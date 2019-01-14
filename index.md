---
layout: base
title: CHFM Home
permalink: /
---
<head>
  <style>
    html, body {
      background-color: #1C1D20;
    }
    body {
      padding-top: 0px;
    }
    #navigation {
    background-color: #1C1D20; // dark1
    }
    #footer {
      background-color: #1C1D20;
      color: #6E7182; // light1
    }
    #footerLine {
      border-color: #6E7182; // light1
    }
  </style>
</head>
<body>
{% include nav.html %}
<div style="margin-top: -70px;" class="container-fluid" id="homeBase">
  <div class="row justify-content-center">
    <div class="col-12 noPadding" id="bigImage">
      <img class="img-fluid" src="assets/images/meeting-house.jpg" />
    </div>
    <div class="col-12 overlay">
      <h1>Chapel Hill Friends Meeting</h1>
    </div>
  </div>
</div>
<div class="container-fluid" id="homeContent">
  <div class="row mx-auto">
    <div class="homeInfo col-md-4 order-md-1 order-2">
      <h1>Welcome</h1>
      <p>The Chapel Hill Friends is an unprogramed meeting established in 1937. We are a member of the <a href="https://piedmontfriendsfellowship.org/">Piedmont Friends Yearly Meeting</a>.</p>
      <p>Our <a href="{{site.baseurl}}/visit-and-learn">Visit and Learn</a> and our <a href="{{site.baseurl}}/">Quakerism 101</a> pages have basic information about what to expect at a Quaker Meeting for Worship. If you have additional questions or would like to know more about Quakers, feel free to <a href="{{site.baseurl}}/contact">contact us</a> and be sure to <a href="#" id="newsPop" data-toggle="popover" data-placement="top">sign up for our newsletter</a>.</p>
    </div>
    <div class="homeInfo col-md-8 order-md-2 order-3">
      <h1>First Day School Schedule</h1>
      <h2>Sunday</h2>
      <p>8:30am - Worship</p>
      <p>9:45am - <a href="{{site.baseurl}}/forums">Forum</a></p>
      <p>11am - Worship</p>
      <p>11:15am - First Day School</p>
      <p><small>child care available 9:30am - 12pm</small></p>
      <p></p>
      <!-- this mess of jekyll (which shouldn't be visible online) is to generate the "currently" -->
      {% capture currently-include %}{% include currently.md %}{% endcapture %}
      {{ currently-include | markdownify }}
      {% for item in site.currently %}
        {% capture currentDate %}{{ site.time | date: '%s' }}{% endcapture %}
        {% capture addDate %}{{ item.addDate | date: '%s' }}{% endcapture %}
        {% capture removeDate %}{{ item.removeDate | date: '%s' }}{% endcapture %}
        {% if currentDate > addDate and currentDate < removeDate %}
          {{ item.content | markdownify }}
        {% endif %}
      {% endfor %}
    </div>
    <div class="homeInfo col-12 order-md-3 order-1">
      <p><i>We joyfully embrace the full spectrum of the light within, made visible through the participation of people of all beliefs, cultures, backgrounds, abilities, ethnicities and races, sexual orientations, and gender identities.</i></p>
    </div>
  </div>
</div>

{% include footer.html %}

</body>