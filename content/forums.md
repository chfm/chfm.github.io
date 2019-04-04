---
layout: default
title: CHFM Forums
permalink: /forums.html
---
<div class="row">
  <div class="col">
    <h1 style="">Forums</h1>
  </div>
</div>
<div class="row">
  <div class="col-12 col-sm-4 order-sm-1 order-2">
    <p>A Forum is offered every Sunday from 9:45 to 10:45 a.m. (except the third Sunday of each month which is the 9:00 a.m. Meeting for Worship with Attention to Business). Forums offer a wide variety of topics as related to Quaker faith and practice, social issues, personal sharings, Chapel Hill Friends Meeting Committees, outside speakers, etc. Forums are offered through the Adult Religious Education Committee to enhance and deepen our spiritual lives.</p>
  </div>
  <div class="col-12 col-sm-8 order-sm-2 order-1">
    {% assign forums_by_month_year =
        site.data.forums | group_by_exp: "forum", "forum.date | date: '%B %Y'" %}

    {% for month_year in forums_by_month_year %}
      <h2>{{ month_year.name }}</h2>
        <ul>
          {% for forum in month_year.items %}
            <h3>{{ forum.date | date: "%B %e" }} - {{ forum.title }}</h3>
            <p>{{ forum.description }}</p>
          {% endfor %}
        </ul>
    {% endfor %}  
  </div>
</div>
