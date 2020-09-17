---
layout: image
title: Chapel Hill Friends Meeting
permalink: /
header: Chapel Hill Friends Meeting
image: meeting-house.jpg
---

<div class="row mx-auto">
  <div class="imageInfo col-md-6 order-md-1 order-2 pt-md-2 pt-0">
    <h1>Welcome</h1>

    <p>The Chapel Hill Friends is an unprogrammed meeting established in 1937.
    We are a member of the <a
    href="https://www.fgcquaker.org/cloud/piedmont-friends-fellowship-and-yearly-meeting">
    Piedmont Friends Yearly Meeting</a>.</p>

    <p>During the current COVID-19 crisis, join us online for <a href="{{ site.baseurl }}/zoom/online.html">Meeting for Worship
    via Zoom</a>.</p>

    <!-- <a href="mailto:friends@chapelhillfriends.org">Need access?</a>
    For help with Zoom look at: <a href="{{ site.baseurl }}/zoom.html">
    How to Participate in a Zoom Meeting (On a Computer)</a> and
    <a href="{{ site.baseurl }}/zoom/browser.html">Zoom Workarounds</a>.</p> -->

    <p>Our <a href="{{ site.baseurl }}/visit-and-learn.html">Visit and Learn</a>
    and our <a href="{{ site.baseurl }}/Q101.html">Quakerism 101</a> pages
    share considerable information (including videos and a glossary) about
    Quakerism, Meeting for Worship, and the Chapel Hill Friends Meeting. If you
    have additional questions or would like to know more about
    Quakers, feel free to <a href="{{ site.baseurl }}/contact.html">contact us.</a>
    <!-- and be sure to <a href="#" id="newsPop" data-toggle="popover"
    data-placement="top">sign up for our weekly email newsletter</a>--></p>

    <p>Want to visit?
      <a class="d-sm-inline d-none noIcon" href="#" data-toggle="modal" data-target="#visitCHFM">
        Here’s a map <span class="far fa-compass"></span>
      </a>
      <a class="d-sm-none d-inline" href="https://goo.gl/maps/YShvAXQGwSL2">Here’s a map</a>.
    </p>

    <div class="modal fade" id="visitCHFM" tabindex="-1" role="dialog" aria-labelledby="visitCHFMLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title black" id="visitCHFMLabel">Map</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pl-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3231.4272848958494!2d-79.040614!3d35.91204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc690b7a12fb90e69!2sChapel+Hill+Friends+Meeting!5e0!3m2!1sen!2sus!4v1550611311696" width="450" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <a class="btn btn-success noIcon" href="https://goo.gl/maps/YShvAXQGwSL2">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </div>

    {% capture schedule-include %}{% include schedule.html %}{% endcapture %}
    {{ schedule-include | markdownify }}
  </div>
  <div class="imageInfo col-md-6 order-md-2 order-3">
    <h1>Currently</h1>
    <div class="mt-2" style="padding: 0 10px 0; border-left: solid 3px #6E7182; border-right: solid 3px #6E7182">
      <a class="twitter-timeline"
        data-theme="dark"
        data-chrome="transparent nofooter noheader noborders"
        data-link-color="#7BC679"
        data-tweet-limit="3"
        data-dnt="true"
        href="https://twitter.com/chfm_quakers?ref_src=twsrc%5Etfw">Tweets</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <!-- this line is to meet twitter usage guidelines -->
      <small>tweets by <a href="https://twitter.com/chfm_quakers?lang=en">@chfm_quakers</a></small>
    </div>
  </div>
  <div class="imageInfo col-12 order-md-3 order-1 pb-0">
    <p><i>We joyfully embrace the full spectrum of the light within, made visible through the participation of people of all beliefs, cultures, backgrounds, abilities, ethnicities and races, sexual orientations, and gender identities.</i></p>
  </div>
</div>
