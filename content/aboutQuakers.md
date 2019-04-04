---
layout: default
title: About Quakers - Chapel Hill Friends Meeting
permalink: /aboutQuakers.html
---

<div class="row">
  <div class="col">
    <h1 style="">About Quakers</h1>
  </div>
</div>

<div class="row">
  <div class="col-sm-7">
    <p>The Religious Society of Friends was founded by George Fox and others
    amid the religious turbulence of the seventeenth-century England, and
    swiftly spread to the New World. (The prominent Friend, William Penn,
    founded Pennsylvania.) Early Friends conceived the Society as a revival of
    first-century Christianity. It has always been grounded in the conviction
    that there is that of God in everyone &ndash; often referred to as the Inward
    Light or the Christ or Seed or Teacher Within &ndash; to which we can turn for
    immediate and continuing revelation. This conviction has underlain Friends'
    longstanding, historic opposition to war, slavery, capital punishment,
    subordination of women, and other forms of social oppression.</p>
    <p>A strength of the Society has been that Friends learned early to rely on
    corporate worship in addition to individual inspiration and to base
    decisions on &ldquo;the sense of the Meeting.&rdquo; Nevertheless, over the years
    different groups have come to emphasize different parts of Friends'
    tradition. During the nineteenth and early twentieth centuries, some
    Meetings decided to hire ministers and develop more structured forms of
    worship. Generally, however, we all adhere to the personal and social values
    and concerns that have characterized Friends since their beginning.</p>

  </div>
  <div class="col-sm-5" style="word-wrap: break-word">
    <h2>National Quaker Links</h2>
    <ul>
    {% for item in site.data.quaker-links %}      
      {% if item.url %}
        <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name }}</a></li>
      {% else %}
        <li>{{item.name}}</li>
      {% endif %}      
    {% endfor %}
    </ul>
  </div>
</div>
<div class="row pagecontent">
  <div class="col-sm-12 text-center">
    <img src="{{ site.baseurl }}/assets/images/GeorgeFox.jpg" >
    <img src="{{ site.baseurl }}/assets/images/WilliamPenn.jpg" >
    <img src="{{ site.baseurl }}/assets/images/FGC.jpg" >
  </div>
</div>
