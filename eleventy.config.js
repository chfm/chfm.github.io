import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";
import * as sass from "sass";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import kramdownHtml from "./_11ty/kramdown-html.js";

const SITE = {
  title: "Chapel Hill Friends Meeting",
  url: "https://www.chapelhillfriends.org",
  baseurl: "",
};

// Dates stay as plain `YYYY-MM-DD` strings (CORE_SCHEMA has no timestamp type)
// so they print the way they were typed and never shift across timezones.
const loadYaml = (file) =>
  yaml.load(fs.readFileSync(file, "utf8"), { schema: yaml.CORE_SCHEMA });

// Everything in _data/*.yml, exposed to templates as `site.data.<filename>`
function loadData() {
  const data = {};
  for (const file of fs.readdirSync("_data")) {
    const ext = path.extname(file);
    if (ext !== ".yml" && ext !== ".yaml") continue;
    data[path.basename(file, ext)] = loadYaml(path.join("_data", file));
  }
  return data;
}

// Every nl/**/newsletter-YYYY-MM.pdf, oldest first. The year and month come
// from the filename, so a new newsletter only needs to be dropped into nl/.
function loadNewsletters() {
  return fs
    .readdirSync("nl", { recursive: true })
    .map((file) => file.split(path.sep).join("/"))
    .map((file) => ({ file, match: /(?:^|\/)(newsletter-(\d{4})-\d{2})\.pdf$/.exec(file) }))
    .filter(({ match }) => match)
    .map(({ file, match }) => ({
      path: `/nl/${file}`,
      name: `${match[1]}.pdf`,
      basename: match[1],
      nl_year: Number(match[2]),
      newsletter: true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Same ids kramdown gave headings, so existing #anchor links keep working
const headingId = (text) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/\s/g, "-");

const md = markdownIt({ html: true, typographer: true })
  .use(kramdownHtml)
  .use(markdownItAttrs, { leftDelimiter: "{:" })
  .use(markdownItAnchor, { slugify: headingId, tabIndex: false });

export default function (eleventyConfig) {
  eleventyConfig.setLibrary("md", md);
  // Eleventy turns indented code blocks off; the content here relies on them
  eleventyConfig.amendLibrary("md", (lib) => lib.enable("code"));
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false, // {% include nav.html %} without quotes
    timezoneOffset: 0,
  });

  eleventyConfig.addGlobalData("site", () => ({
    ...SITE,
    data: loadData(),
    static_files: loadNewsletters(),
  }));
  eleventyConfig.addWatchTarget("./_data/");
  eleventyConfig.addWatchTarget("./nl/");
  eleventyConfig.addWatchTarget("./_sass/");

  for (const layout of fs.readdirSync("_layouts")) {
    eleventyConfig.addLayoutAlias(path.basename(layout, ".html"), layout);
  }

  eleventyConfig.addFilter("markdownify", (text) => md.render(String(text ?? "")));
  eleventyConfig.addFilter("relative_url", (url) => `${SITE.baseurl}${url}`);
  eleventyConfig.addFilter("absolute_url", (url) => `${SITE.url}${SITE.baseurl}${url}`);
  eleventyConfig.addFilter("slugify", (text) =>
    String(text ?? "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-|-$/g, ""),
  );

  // Pages list old URLs in `redirect_from`; content/redirects.11ty.js turns
  // each one into a small redirect page.
  eleventyConfig.addCollection("redirects", (collectionApi) =>
    collectionApi
      .getAll()
      .flatMap((item) => [item.data.redirect_from ?? []].flat().map((from) => ({ from, to: item.url }))),
  );

  // assets/css/styles.scss -> assets/css/styles.css
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile(inputContent, inputPath) {
      const { css, loadedUrls } = sass.compileString(inputContent, {
        loadPaths: [path.dirname(inputPath), "_sass"],
        style: "compressed",
        silenceDeprecations: ["import", "global-builtin", "color-functions"],
      });
      this.addDependencies(inputPath, loadedUrls);
      return () => css;
    },
  });

  eleventyConfig.addPassthroughCopy("assets", { filter: (file) => !file.endsWith(".scss") });
  eleventyConfig.addPassthroughCopy("nl");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_sass/**");
  eleventyConfig.ignores.add("_11ty/**");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "html", "liquid", "11ty.js"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
