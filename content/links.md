---
layout: default
title: Links - Chapel Hill Friends Meeting
permalink: /links.html
---
<div class="row">
  <div class="col">
    <h1 style="">Links</h1>
  </div>
</div>
<div class="row pagecontent">
  <div class="col-sm-6">
    <h2>Quaker Links</h2>
    <ul class="ulBullets">
    {% for item in site.data.quaker-links %}      
      {% if item.url %}
        <li class="liBullets"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a></li>
      {% else %}
        <li class="liBullets">{{item.name}}</li>
      {% endif %}      
    {% endfor %}
    </ul>
  </div>

  <div class="col-sm-6">
    <h2>Links for Conscientious Objectors</h2>
    <ul class="ulBullets">
    {% for item in site.data.co-links %}      
      {% if item.url %}
        <li class="liBullets"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a></li>
      {% else %}
        <li class="liBullets">{{item.name}}</li>
      {% endif %}      
    {% endfor %}
    </ul>
  </div>

  <div class="col-sm-6">
    <h2>Local Links</h2>
    <ul class="ulBullets">
    {% for item in site.data.local-links %}      
      {% if item.url %}
        <li class="liBullets"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a></li>
      {% else %}
        <li class="liBullets">{{item.name}}</li>
      {% endif %}      
    {% endfor %}
    </ul>
  </div>

  <div class="col-sm-6">
    <h2>Miscellaneous Links</h2>
    <ul class="ulBullets">
    {% for item in site.data.misc-links %}      
      {% if item.url %}
        <li class="liBullets"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a></li>
      {% else %}
        <li class="liBullets">{{item.name}}</li>
      {% endif %}      
    {% endfor %}
    </ul>
  </div>
</div>
