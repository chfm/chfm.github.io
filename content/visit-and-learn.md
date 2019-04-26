---
layout: default
title: Visit and Learn - Chapel Hill Friends Meeting
permalink: /visit-and-learn.html
---

<h1>Visit and Learn</h1>

<div class="accordion">
  {% for item in site.data.visit-and-learn-content %}
    <div class="card" style="border: solid 0 #fff;">
      <div style="border: none; background-color: {% cycle '#F7C5DB', '#F7EBC5', '#C5F4C3', '#C5EFF7', '#D8C5F7' %}" class="card-header" id="heading-{{item-tag}}">
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
