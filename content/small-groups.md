---
layout: default
title: Small Group Signups - Chapel Hill Friends Meeting
permalink: /small-groups.html
---

# Small Group Signups 2022-2023

Click or touch the name of the small group you are interested in to see more 
information about the group. Each group name will expand to include a
description of the group and the name of the facilitator. A link in this 
expanded area will lead you to a page where you can access more information 
about the group including times and dates, along with access to the sign up.

To sign up click through to Google Sheets, and enter in the following 
information in one of the rows:

- Name: your name.
- Email: email address the facilitator can reach you at.
- Phone: phone number the facilitator can reach you at.
- Text: text enabled phone number the facilitator can reach you at.

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
      aria-labelledby="heading-{{ item.tag }}" 
      data-parent=".accordion">
      <div class="card-body">
        <p>Facilitator: {{ item.facilitator}}</p>
        {{ item.content | markdownify }}
        <p><a href="{{ site.baseurl }}/signups/{{ item.tag }}.html">
          Click here for more information about <i>{{ item.name }}</i> and 
          the signup!</a> </p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
