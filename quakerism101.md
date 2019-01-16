---
layout: default
title: CHFM Quakerism101
permalink: /quakerism101
---

<div class="container" id="content">
  <div class="row">
    <div class="col-md-4">
      <h1>Quakerism 101</h1>
      <p>The Ministry and Worship Committee offered Quakerism 101, in 2017, a series of four two-hour sessions focused on learning about living in the Religious Society of Friends. Topics covered included history, beliefs, worship, social witness, decision making and other traditions of Friends. All videos, PDFs, and links and suggested readings, used in these 4 sessions, are available online to support your journey in Quakerism. Click on the session link and you will be taken to these materials.</p>
      <p>If you have further questions, please contract:
        <a href="mailto:ministryandworship@chapelhillfriends.org">Ministry & Worship</a></p>
    </div>
    <div class="col-md-8">
      <h3>Follow the session links below for a list of preparatory readings.</h3>
      <div class="accordion">
        {% for item in site.data.quakerism101-content %}
          <div class="card">
            <div class="card-header" id="heading-{{item.tag}}">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.tag }}" aria-expanded="false" aria-controls="{{item.tag}}">
                  {{ item.name }}
                </button>
              </h5>
            </div> 
            <div id="{{ item.tag }}" class="collapse" aria-labelledby="heading-{item.tag}}" data-parent=".accordion">
              <div style="padding-top: 0px;" class="card-body">
                {{ item.content | markdownify }}
              </div>
            </div>
          </div>
        {% endfor %}
        <h3>Facilitated by Lynn Drake and Jan Hutton, with Matt Drake as special presenter.</h3>
      </div>
    </div>
  </div>
</div>