// sitemap.xml: every page, plus the PDFs under assets/ and nl/

import fs from "node:fs";
import path from "node:path";

const pdfs = (dir) =>
  fs
    .readdirSync(dir, { recursive: true })
    .filter((file) => file.endsWith(".pdf"))
    .map((file) => `/${dir}/${file.split(path.sep).join("/")}`);

export default class {
  data() {
    return { permalink: "/sitemap.xml", eleventyExcludeFromCollections: true };
  }

  render({ collections, site }) {
    const urls = [
      ...collections.all.map((item) => item.url).filter((url) => url !== "/404.html" && /(\.html|\/)$/.test(url)),
      ...pdfs("assets"),
      ...pdfs("nl"),
    ].sort();
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url>\n<loc>${site.url}${site.baseurl}${encodeURI(url).replace(/&/g, "&amp;")}</loc>\n</url>`).join("\n")}
</urlset>
`;
  }
}
