---
layout: center
title: CHFM Newsletter
permalink: /newsletter
---
<!-- TODO: Swap between grid and timeline layouts -->

<div class="container" id="content">
    <div class="row pagecontent">
        <div class="col-12 col-sm-12 order-sm-1 order-1">
          <h1>Newsletter</h1>
          {% assign current = site.static_files | where: "newsletter", true | last %}
          <h2><a href="{{ site.baseurl }}{{ current.path}}" target="\_new">Current Newsletter</a></h2>
          <p><object data="{{ site.baseurl }}{{ current.path }}" type="application/pdf" width="500" height="650" internalinstanceid="6"></object></p>

          <p>Submit newsletter items to news@chapelhillfriends.org</p>
        </div>


        <div class="col-12 col-sm-8 order-sm-2 order-1">
            {% assign files = site.static_files
                | where: "newsletter", true |  group_by:"nl_year" %}
            {% assign files = files | sort: "name" | reverse %}
            {% for group in files %}
              <h2>{{ group.name }}</h2>
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
                     {% assign month_name = '' %}
                {% endcase %}
                <p><a href="{{ site.baseurl }}{{ newsletter.path }}">{{month_name}}</a></p>
              {% endfor %}
            {% endfor %}
        </div>
    </div>
</div>
