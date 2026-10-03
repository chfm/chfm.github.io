// markdown-it plugin covering the kramdown behaviours this site's content
// was written against (it was a Jekyll site):
//
//  - A block-level HTML element is passed through untouched up to its
//    matching closing tag. CommonMark would end it at the first blank line
//    and then read the indented HTML that follows as a code block.
//  - Markdown inside an element marked markdown="1" is rendered.
//  - A line starting with an inline element (<img>, <a>, ...) is a paragraph.
//  - A list item only gets a <p> when a blank line follows its text, rather
//    than every item in a list that has a blank line anywhere in it.
//  - Link destinations may contain spaces: [PDF](/assets/My File.pdf)

const BLOCK_TAGS =
  "address|article|aside|blockquote|center|content|details|div|dl|fieldset|figure|footer|form|" +
  "h[1-6]|header|iframe|main|nav|noscript|object|ol|p|pre|script|section|style|table|ul|video";
const BLOCK_OPEN = new RegExp(`^<(${BLOCK_TAGS})(?=[\\s>])`, "i");
const SPAN_OPEN =
  /^<(a|abbr|b|br|button|cite|code|em|font|i|img|input|label|small|span|strong|sub|sup|u)(?=[\s/>])/i;
const ONE_LINE_BLOCK = new RegExp(`^(<(${BLOCK_TAGS})\\b[^>\\n]*>.*?</\\2>)[ \\t]*(?=[^\\s<])`, "gim");
const MARKDOWN_ATTR = /<([a-z][\w-]*)\b([^>]*?)\s+markdown=(?:"1"|'1'|1)([^>]*)>/i;

// Offsets of the tag closing the element whose opening tag starts at `start`
function findClose(src, tag, start) {
  const tags = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
  tags.lastIndex = start;
  let depth = 0;
  for (let match; (match = tags.exec(src)); ) {
    depth += match[1] ? -1 : 1;
    if (depth === 0) return { start: match.index, end: tags.lastIndex };
  }
  return null;
}

function dedent(text) {
  const indents = text.match(/^[ \t]*(?=\S)/gm) ?? [];
  const width = Math.min(...indents.map((indent) => indent.length));
  return width ? text.replace(new RegExp(`^[ \\t]{${width}}`, "gm"), "") : text;
}

function renderMarkdownAttr(md, html, env) {
  let out = "";
  for (let match; (match = MARKDOWN_ATTR.exec(html)); ) {
    const [openTag, tag, before, after] = match;
    const innerStart = match.index + openTag.length;
    const close = findClose(html, tag, match.index);
    if (!close) break;
    out +=
      html.slice(0, match.index) +
      `<${tag}${before}${after}>\n` +
      md.render(dedent(html.slice(innerStart, close.start)), env) +
      html.slice(close.start, close.end);
    html = html.slice(close.end);
  }
  return out + html;
}

// markdown-it has already marked every paragraph in a loose list as visible
function tightenListItems(state) {
  const { tokens } = state;
  for (let open = 0; open < tokens.length; open++) {
    if (tokens[open].type !== "list_item_open") continue;
    const level = tokens[open].level;
    let close = open + 1;
    while (tokens[close].type !== "list_item_close" || tokens[close].level !== level) close++;

    const children = tokens.slice(open + 1, close).filter((token) => token.level === level + 1);
    const paragraphs = children.filter((token) => token.type === "paragraph_open");
    if (paragraphs.length !== 1 || children[0] !== paragraphs[0]) continue;

    const next = tokens[close + 1];
    const blankLineFollows =
      children.length === 2 && next.type === "list_item_open" && paragraphs[0].map[1] < next.map[0];
    children[0].hidden = children[1].hidden = !blankLineFollows;
  }
}

export default function kramdownHtml(md) {
  md.core.ruler.after("block", "kramdown_list_items", tightenListItems);

  md.core.ruler.after("normalize", "kramdown_link_spaces", (state) => {
    state.src = state.src.replace(/\]\(([^()<>"'\n]*[^()<>"'\s])\)/g, (link, url) =>
      url.includes(" ") ? `](<${url}>)` : link,
    );
    // <div>1</div> Text on the same line: the text is its own paragraph
    state.src = state.src.replace(ONE_LINE_BLOCK, "$1\n");
  });

  const commonmarkHtmlBlock = md.block.ruler.__rules__.find((rule) => rule.name === "html_block").fn;

  md.block.ruler.at(
    "html_block",
    (state, startLine, endLine, silent) => {
      if (state.sCount[startLine] - state.blkIndent >= 4) return false;
      const start = state.bMarks[startLine] + state.tShift[startLine];
      const line = state.src.slice(start, state.eMarks[startLine]);
      if (SPAN_OPEN.test(line)) return false;
      const open = BLOCK_OPEN.exec(line);
      const close = open && findClose(state.src, open[1], start);
      let lastLine = startLine;
      while (close && lastLine < endLine && state.eMarks[lastLine] < close.end) lastLine++;
      if (!close || lastLine >= endLine) return commonmarkHtmlBlock(state, startLine, endLine, silent);
      if (silent) return true;

      const token = state.push("html_block", "", 0);
      token.map = [startLine, lastLine + 1];
      token.content = renderMarkdownAttr(
        md,
        state.getLines(startLine, lastLine + 1, state.blkIndent, true),
        state.env,
      );
      state.line = lastLine + 1;
      return true;
    },
    { alt: ["paragraph", "reference", "blockquote"] },
  );
}
