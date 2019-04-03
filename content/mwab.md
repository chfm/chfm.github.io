---
layout: default
title: CHFM MWAB
permalink: /mwab.html
---

<div class="row">
  <div class="col-12"><h1>Meeting For Worship with Attention to Business</h1></div>
  <div class="col-md-3">
    <h2>{{ site.data.mwab.datetime | date: "%b %e, %l:%M%p"}}</h2>
    <div class="my-3"><a href="{{ site.baseurl }}/assets/mwab/Agenda.pdf">Agenda</a></div>
  </div>
  <div class="col-md-9 px-md-0">
    <h2>Readings</h2>
    {% for item in site.data.mwab.documents %}
      <div class="my-3"><a href="{{ site.baseurl }}/assets/mwab/{{ item.pdf }}">{{ item.name }}</a></div>
    {% endfor %}
  </div>
</div>