---
layout: default
title: CHFM MWAB
permalink: /mwab.html
---

<div class="row">
  <div class="col-12"><h1>Meeting For Worship with Attention to Business</h1></div>
  <div class="col-md-3">
    <h2>January 2019</h2>
    <div class="my-3"><a href="{{site.baseurl}}/assets/mwab/Agenda_2019-01.pdf">Agenda</a></div>
  </div>
  <div class="col-md-9 px-md-0">
    <h2>Readings</h2>
    {% for item in site.data.mwab %}
      <div class="my-3"><a href="{{site.baseurl}}/assets/mwab/{{ item.pdf }}.pdf">{{ item.name }}</a></div>
    {% endfor %}
  </div>
</div>
