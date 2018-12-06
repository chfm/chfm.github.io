---
layout: default
title: CHFM Home
permalink: /
sidebar: home
---

<div class="container" id="content">
  <div class="row pagecontent">
    <div class="col-12 d-none" id="slogan">Hello world</div>
    <div class="col-md-4">
      <h1><a href="{{site.baseurl}}/landing">Welcome</a></h1>
      <p>The Chapel Hill Friends is an unprogramed meeting established in 1937. We are a member of the <a href="https://piedmontfriendsfellowship.org/">Piedmont Friends Yearly Meeting</a>.</p>
      <p>Our <a href="{{site.baseurl}}/visit-and-learn">Visit and Learn</a> page has basic information about what to expect at a Quaker Meeting for Worship. If you have additional questions or would like to know more about Quakers, feel free to <a href="{{site.baseurl}}/contact">contact us</a> and be sure to <a href="#" id="newsPop" data-toggle="popover" data-placement="top">sign up for our newsletter</a>.</p>
    </div>
    <div class="col-md-8">
      <h1>First Day School Schedule</h1>
      <h2>Sunday</h2>
      <p>8:30am - Worship</p>
      <p>9:45am - <a href="{{site.baseurl}}/forums">Forum</a></p>
      <p>11am - Worship</p>
      <p>11:15am - First Day School</p>
      <small>child care available 9:30am - 12pm</small>
      <p></p>
      {% capture currently-include %}{% include currently.md %}{% endcapture %}
      {{ currently-include | markdownify }}
    </div>
  </div>
</div>