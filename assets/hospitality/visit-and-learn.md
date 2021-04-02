---
layout: default
title: Visit and Learn - Chapel Hill Friends Meeting
permalink: /assets/hospitality/visit-and-learn.html
---

<h1>Visit and Learn</h1>

[Sign our guestbook](https://docs.google.com/forms/d/e/1FAIpQLSc64xeAH8_bA2Fml-WLPo4KfNwJJnpyea-vb08OxRDdLBJzaA/viewform?usp=pp_url&entry.902399132=Welcome+email&entry.902399132=Weekly+enews) and receive a greeting and information about our meeting.

<div class="accordion">
    <div class="card" style="border: solid 0 #fff;">
      <div style="border: solid 1px white; background-color: {% cycle '#F9D1E3', '#F9D8D1', '#F9F0D1', '#EBF9D1', '#D3F9D1', '#D1F9E8', '#D1F3F9', '#D1DBF9', '#E1D1F9', '#F9D1F9' %}" class="card-header" id="heading-visit-and-learn">
        <h3 class="mb-0">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#visit-and-learn" aria-expanded="false" aria-controls="visit-and-learn">
            Note: This page is under construction!
          </button>
        </h3>
      </div>
      <div id="visit-and-learn" class="collapse autoScroll" aria-labelledby="heading-visit-and-learn" data-parent=".accordion">
        <div class="card-body">
          This page is under construction and not yet a part of the Chapel Hill Friends website!
          
          In particular, the guestbook is not yet active.
        </div>
      </div>
    </div>
</div>

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
