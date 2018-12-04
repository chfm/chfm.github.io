---
layout: center
title: CHFM Contact
permalink: /contact
---

# About Page Testing :)

<div id="accordion">
    {{ for item in site.data.about-navigation }}
        <div class="card">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {{item.name}}
                    </button>
                </h5>
            </div> 
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    {{ item.content }}
                </div>
            </div>
        </div>
    {{ end for}}
</div>