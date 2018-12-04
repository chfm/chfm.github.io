---
layout: center
title: CHFM About
permalink: /about
---

# About

<div style="height: 10px;"></div>

<div id="accordion">
    {% for item in site.data.about-content %}
        <div class="card">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#{{ item.tag }}" aria-expanded="true" aria-controls="collapseOne">
                        {{ item.name }}
                    </button>
                </h5>
            </div> 
            <div id="{{ item.tag }}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    {{ item.content | markdownify }}
                </div>
            </div>
        </div>
    {% endfor %}
</div>