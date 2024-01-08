---
layout: default
title: Forums - Chapel Hill Friends Meeting
permalink: /forums.html
---
<div class="row">
  <div class="col">
    <h1 style="">Forums</h1>
  </div>
</div>
<div class="row">
  <div class="col-12 col-sm-4 order-sm-1 order-2">
    <p>A Forum is offered on most Sundays from 9:30 to 10:30 a.m. from late August
      through late June. Forums are offered to enhance and deepen our spiritual
      lives.</p>
    <p>During the COVID-19 crisis Forums have moved to an online format</p>
    <p>The Adult Religious Education Committee schedules Forums that offer a
      wide variety of topics as related to Quaker faith and practice, social
      issues, personal sharings, outside speakers, Chapel Hill Friends Meeting
      Committees, etc. (There is no Forum on the third Sunday of each month, which
      is the 9:00 a.m. Meeting for Worship with Attention to Business.)</p>
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
