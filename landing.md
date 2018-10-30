---
layout: landing
title: CHFM Landing
permalink: /landing
---

<div class="container-fluid" id="landingBase">
  <div class="row justify-content-center">
    <div class="col-12 noPadding" id="bigImage">
      <div class="parallax"></div>
      <!-- <img class="img-fluid" src="/assets/images/quaker-meeting.jpg" /> -->
    </div>
    <div class="col" id="chfmOverlay">
      Chapel Hill Friends Meeting
    </div>
  </div>
  <div class="row justify-content-center mt-4 px-auto" id="aboutUs">
    <div class="col-md-4">
      {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
      {{ welcome-include | markdownify }}
    </div>
    <div class="col-md-4">
      {% capture currently-include %}{% include currently.md %}{% endcapture %}
      {{ currently-include | markdownify }}
    </div>
  </div>
  <div class="row justify-content-center mt-4 px-auto" id="linkToHome">
    <a href="/"><h1>Continue to site</h1></a>
  </div>
</div>
