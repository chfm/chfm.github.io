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
      <img class="img-fluid" src="assets/images/quaker-meeting.jpg" />
    </div>
    <div class="col" id="chfmOverlay">
      Chapel Hill Friends Meeting
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