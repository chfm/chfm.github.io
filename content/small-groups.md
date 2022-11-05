---
layout: default
title: Small Group Signups - Chapel Hill Friends Meeting
permalink: /small-groups.html
---

# Small Group Signups 2022-2023

<div class="accordion">
{% for item in site.data.small-groups %}
  <div class="card" style="border: solid 0 #fff;">
    <div id="heading-{{ item.tag }}">
      <h3 class="mb-0">
        <button 
          class="btn btn-link collapsed accordionButton" 
          data-toggle="collapse" 
          data-target="#{{ item.tag }}" 
          aria-expanded="false" 
          aria-controls="{{ item.tag }}">
          {{ item.name }}
        </button>
      </h3>
    </div>
    <div 
      id="{{ item.tag }}" 
      class="collapse autoScroll" 
      aria-labelledby="heading-{{ item-tag }}" 
      data-parent=".accordion">
      <div class="card-body">
        <p>Facilitator: {{ item.facilitator}}</p>
        {{ item.content | markdownify }}
        <p><a href="{{ site.baseurl }}/signups/{{ item.tag }}.html">
          Click here for more information and the signup!</a> </p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
