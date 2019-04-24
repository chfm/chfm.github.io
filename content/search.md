---
layout: center
title: Search - Chapel Hill Friends Meeting
permalink: /search.html
tipue_search_active: true
---

<h1>Search</h1>

<form class="d-flex" action="{{ page.url | relative_url }}">
  <div class="tipue_search_left"><img src="{{ "/assets/tipuesearch/search.png" | relative_url }}" class="tipue_search_icon"></div>
  <div class="tipue_search_right"><input autocomplete="off" type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required></div>
  <div style="clear: both;"></div>
  <button type="submit" class="tipue_search_button">
    <span class="fas fa-search" style="font-size: 24px;"></span>
  </button>
</form>

<div id="tipue_search_content"></div>

<script>
$(document).ready(function() {
  $('#tipue_search_input').tipuesearch();
});
</script>