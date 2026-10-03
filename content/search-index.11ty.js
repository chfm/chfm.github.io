// Content index for assets/js/search.js: every page's title, text and URL

const ENTITIES = { "&quot;": '"', "&#39;": "'", "&lt;": "<", "&gt;": ">", "&amp;": "&" };

const text = (html) =>
  String(html ?? "")
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(quot|#39|lt|gt|amp);/g, (entity) => ENTITIES[entity])
    .replace(/\s+/g, " ")
    .trim();

export default class {
  data() {
    return {
      permalink: "/assets/js/search-index.js",
      eleventyExcludeFromCollections: true,
    };
  }

  render({ collections }) {
    const pages = collections.all
      .filter((item) => item.url?.endsWith(".html") || item.url?.endsWith("/"))
      .sort((a, b) => a.url.localeCompare(b.url))
      .map((item) => ({
        title: text(item.data.title),
        text: text(item.templateContent),
        url: item.url,
      }));
    return `var searchIndex = ${JSON.stringify(pages, null, 1)};\n`;
  }
}
