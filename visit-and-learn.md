---
layout: center
title: CHFM Visit and Learn
permalink: /visit-and-learn.html
---

<h1>Visit and Learn</h1>

<div class="accordion">
  {% for item in site.data.visit-and-learn-content %}
    <div class="card">
      <div class="card-header" id="heading-{{item-tag}}">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.tag }}" aria-expanded="false" aria-controls="{{item.tag}}">
            {{ item.name }}
          </button>
        </h5>
      </div>
      <div id="{{ item.tag }}" class="collapse autoScroll" aria-labelledby="heading-{item-tag}}" data-parent=".accordion">
        <div class="card-body">
          {{ item.content | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
