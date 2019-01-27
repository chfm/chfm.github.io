---
layout: center
title: CHFM Visit and Learn
permalink: /visit-and-learn.html
---

# Visit and Learn

<div style="height: 10px;"></div>

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
