---
layout: base
title: CHFM Home
permalink: /
---
<head>
  <style>
  html, body { background-color: #1C1D20; } /* dark1 */
  body { padding-top: 0px; }
  #navigation { background-color: #1C1D20; } /* dark1 */
  #footer {
    background-color: #1C1D20; /* dark1 */
    color: #6E7182; /* light1 */
  }
  #footerLine { border-color: #6E7182; } /* light1 */
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
  <div class="homeInfo col-md-6 order-md-1 order-2">
    <h1>Welcome</h1>
    <p>The Chapel Hill Friends is an unprogramed meeting established in 1937. We are a member of the <a href="https://piedmontfriendsfellowship.org/">Piedmont Friends Yearly Meeting</a>.</p>
    <p>Our <a href="{{site.baseurl}}/visit-and-learn">Visit and Learn</a> and our <a href="{{site.baseurl}}/">Quakerism 101</a> pages have basic information about what to expect at a Quaker Meeting for Worship. If you have additional questions or would like to know more about Quakers, feel free to <a href="{{site.baseurl}}/contact">contact us</a> and be sure to <a href="#" id="newsPop" data-toggle="popover" data-placement="top">sign up for our newsletter</a>.</p>
    
    {% capture schedule-include %}{% include fds-schedule.html %}{% endcapture %}
    {{ schedule-include | markdownify }}
  </div>
  <div class="homeInfo col-md-6 order-md-2 order-3">
    <h1>Currently</h1>
    <div class="mt-2" style="padding: 0 10px 0; border-left: solid 3px #6E7182; border-right: solid 3px #6E7182">
      <a class="twitter-timeline" data-height="470" data-theme="dark" data-chrome="transparent nofooter noheader noborders" data-link-color="#7BC679" href="https://twitter.com/NPR?ref_src=twsrc%5Etfw">Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <small>tweets by <a href="https://twitter.com/NPR?lang=en">@npr</a></small><!-- this line is to meet twitter usage guidelines -->
    </div>
  </div>
  <div class="homeInfo col-12 order-md-3 order-1">
    <p><i>We joyfully embrace the full spectrum of the light within, made visible through the participation of people of all beliefs, cultures, backgrounds, abilities, ethnicities and races, sexual orientations, and gender identities.</i></p>
  </div>
  </div>
</div>

{% include footer.html %}

</body>