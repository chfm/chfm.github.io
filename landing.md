---
layout: landing
title: CHFM Landing
permalink: /landing
---
<head>
  <style>
    html, body {
      background-color: #1C1D20;
    }
  </style>
</head>

<div style="margin-top: -70px;" class="container-fluid" id="landingBase">
  <div class="row justify-content-center">
    <div class="col-12 noPadding" id="bigImage">
      <img class="img-fluid" src="assets/images/meeting-house.jpg" />
    </div>
    <div class="col-12 overlay">
      <h1>Chapel Hill Friends Meeting</h1>
      <p class="mt-5 mx-auto">We joyfully embrace the full spectrum of the light within, made visible through the participation of people of all beliefs, cultures, backgrounds, abilities, ethnicities and races, sexual orientations, and gender identities.</p>
    </div>
  </div>
</div>
<div class="container-fluid" id="landingContent">
  <div class="row mx-auto">
    {% for item in site.data.landing-content %}
      <div class="col-sm-6">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
        {% if item.linkText %}<a href="{% if item.link %}{{site.baseurl}}{{ item.link }}{% endif %}">{{ item.linkText }}</a>{% endif %}
      </div>
    {% endfor %}
  </div>
</div>