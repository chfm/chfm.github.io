---
layout: default
title: Business Meeting - Chapel Hill Friends Meeting
permalink: /mwab.html
---
<div class="row">
  <div class="col">
    <h1 style="">Meeting For Worship with Attention to Business</h1>
  </div>
</div>

<div class="row">
  <div class="col-md-3">

    <h2>{{ site.data.mwab.datetime | date: "%b %e, %l:%M%p"}}</h2>
    <div class="my-3">
      <a href="{{ site.baseurl }}/assets/mwab/Agenda.pdf">Agenda</a>
    </div>
    <div class="my-3">
      <a href="{{ site.baseurl }}/newsletter.html">Newsletter (with Minutes)</a>
    </div>
  </div>
  <div class="col-md-9 px-md-0">
    <h2>Readings</h2>
    <p>Please look for Zoom access information in the weekly eNews.</p>
    {% for item in site.data.mwab.documents %}
      {% if item.pdf %}
        <div class="my-3"><a href="{{ site.baseurl }}/assets/mwab/{{ item.pdf }}">{{ item.name }}</a></div>
      {% elsif item.link %}
        <div class="my-3"><a href="{{ item.link }}">{{ item.name }}</a></div>
      {% else %}
        <div class="my-3">{{ item.name }}</div>
      {% endif %}
    {% endfor %}

  </div>
</div>
