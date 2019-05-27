---
layout: center
title: Glossary - Chapel Hill Friends Meeting
permalink: /glossary.html
redirect_from: "/popups/glossary.html"
---

<script>
  // thanks
  function glossarySearch() {
    // Declare variables
    var input, filter, ul, li, a, b, i, termValue, definitionValue, indexOfTermA, indexOfTermB;
    input = document.getElementById('glossaryFilter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("glossary");
    li = ul.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('h2')[0];
      b = li[i].getElementsByTagName('p')[0];

      termValue = a.textContent || a.innerText;
      definitionValue = b.textContent || b.innerText;

      indexOfTermA = termValue.toUpperCase().indexOf(filter);
      indexOfTermB = definitionValue.toUpperCase().indexOf(filter);

      if (indexOfTermA > -1) {
        li[i].style.display = "";
      } else if (indexOfTermB > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
</script>

<h1>Glossary</h1>

<input type="text" id="glossaryFilter" class="searchBox" onkeyup="glossarySearch()" placeholder="Search glossary…">

<div id="glossary">
  {% for item in site.data.glossary %}
    <div>
      <h2>{{ item.term }}</h2>
      <p>{{ item.definition }}</p>
    </div>
  {% endfor %}
</div>
