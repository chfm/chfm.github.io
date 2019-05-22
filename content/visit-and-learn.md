---
layout: default
title: Visit and Learn - Chapel Hill Friends Meeting
permalink: /visit-and-learn.html
---

<h1>Visit and Learn</h1>

<div class="accordion">
  {% for item in site.data.visit-and-learn-content %}
    <div class="card" style="border: solid 0 #fff;">
      <div style="border: solid 1px white; background-color: {% cycle '#F9D1E3', '#F9D8D1', '#F9F0D1', '#EBF9D1', '#D3F9D1', '#D1F9E8', '#D1F3F9', '#D1DBF9', '#E1D1F9', '#F9D1F9' %}" class="card-header" id="heading-{{item.tag}}">
        <h3 class="mb-0">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.tag }}" aria-expanded="false" aria-controls="{{item.tag}}">
            {{ item.name }}
          </button>
        </h3>
      </div>
      <div id="{{ item.tag }}" class="collapse autoScroll" aria-labelledby="heading-{{item-tag}}" data-parent=".accordion">
        <div class="card-body">
          {{ item.content | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>