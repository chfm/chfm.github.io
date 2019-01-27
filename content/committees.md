---
layout: center
title: CHFM Committees
permalink: /committees.html
---

<h1 class="mb-2">Committees</h1>

<div class="accordion">
  {% for item in site.data.committees %}
    <div class="card">
      <div class="card-header" id="heading-{{ item.name | slugify }}">
        <h5 class="mb-0 d-flex justify-content-between">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.name | slugify }}" aria-expanded="false" aria-controls="{{ item.name | slugify }}">
            {{ item.name }}
            <button class="btn btn-link"><a class="noIcon" href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org"><span class="far fa-envelope"></span></a></button>
          </button>
        </h5>
      </div> 
      <div id="{{ item.name | slugify }}" class="collapse autoScroll" aria-labelledby="heading-{{ item.name | slugify }}" data-parent=".accordion">
        <div class="card-body">
          {{ item.description | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
