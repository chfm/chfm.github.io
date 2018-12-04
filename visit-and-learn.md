---
layout: center
title: CHFM Visit and Learn
permalink: /visit-and-learn
---

# Visit and Learn

<div style="height: 10px;"></div>

<div id="accordion">
    {% for item in site.data.visit-and-learn-content %}
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