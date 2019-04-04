---
layout: default
title: Hospitality - Chapel Hill Friends Meeting
permalink: /hospitality.html
---

<div class="row">
  <div class="col">
    <h1 style="">Hospitality Committee</h1>
  </div>
</div>

<div class="row mt-1 mb-3">
  <div class="col">
    <table class="table table-bordered table-sm" style="margin-bottom: 0;">
      <tbody>
        {% for item in site.data.hospitality.minutes %}
          <tr>
            <th scope="row" style="width: 25%">{{item.date | date: '%b %Y'}}</th>
            <td><a href="{{item.date}}-agenda.pdf">Agenda</a></td>
            <td><a href="{{item.date}}-minutes.pdf">Minutes</a></td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>

<div class="row">
  <div class="col">
    <div class="card-deck">
      {% for item in site.data.hospitality.lists %}
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="m-0 mb-2">{{ item.title }}</h2>
            {% for listItem in item.items %}
              <div class=""><a href="{{listItem.link}}">{{listItem.name}}</a></div>
            {% endfor %}
          </div>
        </div>
        {% assign remainderTwo = forloop.index | modulo: 2 %}
        {% assign remainderThree = forloop.index | modulo: 3 %}
        {% if remainderTwo == 0 %}
          <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on md--></div>
        {% endif %}
        {% if remainderThree == 0 %}
          <div class="w-100 d-none d-md-block"><!-- wrap every 3 on lg--></div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
