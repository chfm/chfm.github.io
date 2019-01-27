---
layout: default
title: CHFM Committees
permalink: /committees.html
---

<div class="row">
  <div class="col-md-4" style="">
    <h1 class="mb-2">Committees</h1>
    {% for item in site.data.committees %}
      <div class="pl-0 pr-3 py-1"><a href="#{{ item.name | slugify }}">{{ item.name }}</a></div>
    {% endfor %}
  </div>
  <div class="col-md-8">
    {% for item in site.data.committees %}
      <div class="scrollFix" id="{{ item.name | slugify }}"></div>
      <div class="card mb-2">
        <h2 class="card-header mt-0 mb-0">{{ item.name }}</h2>
        <div class="card-body">
          <p class="card-text">{{ item.description }}</p>
          <a href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org">{{item.name}}</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
