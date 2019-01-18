---
layout: default
title: CHFM Newsletter
permalink: /newsletter
---

<div class="row px-auto">
  <div class="col-12"><h1>Newsletter</h1></div>
  <div class="col-12 col-md-9">
    {% assign current = site.static_files | where: "newsletter", true | last %}
    <h2 class="mt-1 mb-2"><a href="{{ site.baseurl }}{{ current.path}}" target="\_new">Current Newsletter</a></h2>
    <p><object class="d-none d-md-block" data="{{ site.baseurl }}{{ current.path }}" type="application/pdf" width="100%" height="600px" internalinstanceid="6"></object></p>
    <p>Submit newsletter items to <a href="mailto:news@chapelhillfriends.org">news@chapelhillfriends.org</a></p>
  </div>
  <div class="col col-md-3">
    <h2 class="mt-1 mb-2">Archive</h2>
    <div class="accordion" id="newsletterAccordion">
      {% assign files = site.static_files | where: "newsletter", true | group_by:"nl_year" %}
      {% assign files = files | sort: "name" | reverse %}
      {% for group in files %}
        <div class="card">
          <div class="card-header" id="heading-{{group.name}}">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#year-{{ group.name }}" aria-expanded="true" aria-controls="{{ group.name }}">
                {{ group.name }}
              </button>
            </h5>
          </div> 
          <div id="year-{{ group.name }}" class="collapse" aria-labelledby="heading-{{group.name}}" data-parent="#newsletterAccordion">
            <div class="card-body">
              {% for newsletter in group.items %}
                {% assign month = newsletter.basename | slice: -2, 2 %}
                {% case month %}
                  {% when '01' %}
                    {% assign month_name = 'January' %}
                  {% when '02' %}
                    {% assign month_name = 'February' %}
                  {% when '03' %}
                    {% assign month_name = 'March' %}
                  {% when '04' %}
                    {% assign month_name = 'April' %}
                  {% when '05' %}
                    {% assign month_name = 'May' %}
                  {% when '06' %}
                    {% assign month_name = 'June' %}
                  {% when '07' %}
                    {% assign month_name = 'July' %}
                  {% when '08' %}
                    {% assign month_name = 'August' %}
                  {% when '09' %}
                    {% assign month_name = 'September' %}
                  {% when '10' %}
                    {% assign month_name = 'October' %}
                  {% when '11' %}
                    {% assign month_name = 'November' %}
                  {% when '12' %}
                    {% assign month_name = 'December' %}
                  {% else %}
                    {% assign month_name = 'Other' %}
                {% endcase %}
                <a href="{{ site.baseurl }}{{ newsletter.path }}">{{month_name}}</a><br />
              {% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>