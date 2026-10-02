// Site search: looks up the ?q= words in the index built by
// content/search-index.11ty.js and lists the matching pages, best first.
document.addEventListener("DOMContentLoaded", function () {
  var SNIPPET_WORDS = 25;

  var input = document.getElementById("tipue_search_input");
  var output = document.getElementById("tipue_search_content");
  var query = (new URLSearchParams(location.search).get("q") || "").trim();
  if (!query) {
    return;
  }
  input.value = query;

  var words = query.toLowerCase().split(/\s+/);

  function count(text, word) {
    return text.toLowerCase().split(word).length - 1;
  }

  function add(parent, tag, attributes, text) {
    var element = parent.appendChild(document.createElement(tag));
    Object.assign(element, attributes);
    element.textContent = text || "";
    return element;
  }

  // the words around the first match, with every match in bold
  function addSnippet(parent, text) {
    var all = text.split(" ");
    var first = all.findIndex(function (word) {
      return words.some(function (w) { return word.toLowerCase().includes(w); });
    });
    var start = Math.max(0, first - 5);
    var snippet = all.slice(start, start + SNIPPET_WORDS).join(" ");
    var lower = snippet.toLowerCase();
    var position = 0;
    while (position < snippet.length) {
      var next = -1, length = 0;
      words.forEach(function (w) {
        var at = lower.indexOf(w, position);
        if (at !== -1 && (next === -1 || at < next)) {
          next = at;
          length = w.length;
        }
      });
      if (next === -1) {
        break;
      }
      parent.append(snippet.slice(position, next));
      add(parent, "span", { className: "tipue_search_content_bold" }, snippet.slice(next, next + length));
      position = next + length;
    }
    parent.append(snippet.slice(position) + (start + SNIPPET_WORDS < all.length ? " ..." : ""));
  }

  var results = searchIndex
    .map(function (page) {
      var score = 0;
      words.forEach(function (word) {
        score += 20 * count(page.title, word) + count(page.text, word);
      });
      return { page: page, score: score };
    })
    .filter(function (result) { return result.score > 0; })
    .sort(function (a, b) { return b.score - a.score; });

  if (!results.length) {
    add(output, "div", { id: "tipue_search_warning" }, "Nothing found.");
    return;
  }

  add(output, "div", { id: "tipue_search_results_count" },
    results.length === 1 ? "1 result" : results.length + " results");
  results.forEach(function (result) {
    var page = result.page;
    var title = add(output, "div", { className: "tipue_search_content_title" });
    add(title, "a", { href: page.url }, page.title || "No title");
    var url = add(output, "div", { className: "tipue_search_content_url" });
    add(url, "a", { href: page.url }, page.url);
    addSnippet(add(output, "div", { className: "tipue_search_content_text" }), page.text);
  });
});
