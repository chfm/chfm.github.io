---
layout: center
title: Chapel Hill Friends Meeting - Committees
permalink: /committees.html
---

<h1 class="mb-2">Committees</h1>

<div class="accordion">
  {% for item in site.data.committees %}
    <div class="card">
      <div class="card-header py-2" id="heading-{{ item.name | slugify }}">
        <h5 class="mb-0 d-flex justify-content-between">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.name | slugify }}" aria-expanded="false" aria-controls="{{ item.name | slugify }}">
            {{ item.name }}
          </button>
          <div class="inline-flex">
            {% if item.page %}
              <a class="noIcon btn btn-light py-1 px-2 m-0" style="border: solid 2px #ddd" href="{{site.baseurl}}/{{ item.page }}"><span class="fas fa-link"></span></a>
            {% endif %}
            <a class="noIcon btn btn-light py-1 px-2 m-0" style="border: solid 2px #ddd" href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org"><span class="far fa-envelope"></span></a>
          </div>
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
