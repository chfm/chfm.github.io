---
layout: default
title: Contact - Chapel Hill Friends Meeting
permalink: /contact.html
---

<div class="row pagecontent">
  <div class="col-sm-6">
    <h1>Contact</h1>
    <p>
      531 Raleigh Road <br />
      Chapel Hill, NC 27514<br />
      <a href="mailto:friends@chapelhillfriends.org">friends@chapelhillfriends.org</a><br />
      919.929.5377
    </p>
    <h1>Assorted Email</h1>
    {% for item in site.data.contact %}
      <p class="mt-0 mb-1">
        <a href="mailto:{{ item.email }}@chapelhillfriends.org">{{item.name}}</a>
      </p>
    {% endfor %}
  </div>
  <div class="col-sm-6" style="word-wrap: break-word">
    <h1>Committees</h1>
    {% for item in site.data.committees %}
      <p class="mt-0 mb-1">
        <a href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org">{{item.name}}</a>
      </p>
    {% endfor %}
  </div>
  <div class="col">
    <h1>Who should I contact?</h1>
    <p></p>
    <b>I want to receive via email your weekly Enews and monthly Newsletter</b>
    <p><a href="{{ site.baseurl }}/subscribe.html">Subscribe</a></p>
    <b>I have an idea; how best to bring it to Meeting</b>
    <p><a href="mailto:clerkofmeeting@chapelhillfriends.org">Clerk of Meeting</a> or appropriate committee </p>
    <b>I'm interested in joining a committee</b>
    <p><a href="mailto:nominations@chapelhillfriends.org">Nominations committee</a></p>
    <b>I have an idea for a Forum</b>
    <p><a href="mailto:are@chapelhillfriends.org">Adult Religious Education committee</a></p>
    <b>I have a desire for Clearness for Marriage or need a clearness or support committee for a personal issue</b>
    <p><a href="mailto:careandcounsel@chapelhillfriends.org">Care and Counsel</a></p>
    <b>I can't get into the Meeting House or the Schoolhouse</b>
    <p><a href="mailto:buildingandgrounds@chapelhillfriends.org">Buildings and Grounds committee</a> or <a href="mailto:resident@chapelhillfriends.org">Resident</a></p>
    <b>I have a problem with one of the buildings</b>
    <p><a href="mailto:buildingsandgrounds@chapelhillfriends.org">Buildings and Grounds committee</a> or <a href="mailto:resident@chapelhillfriends.org">Resident</a></p>
    <b>I have questions about Quakerism</b>
    <p><a href="mailto:ministryandworship@chapelhillfriends.org">Ministry and Worship committee</a></p>
    <b>I'm considering becoming a member</b>
    <p><a href="mailto:ministryandworship@chapelhillfriends.org">Ministry and Worship committee</a></p>
    <b>I'm requesting membership</b>
    <p>Letter to <a href="mailto:clerkofmeeting@chapelhillfriends.org">Clerk of Meeting</a></p>
    <b>I'd like to make a donation or to get a tax receipt</b>
    <p><a href="mailto:finance@chapelhillfriends.org">Finance committee</a></p>
    <b>I need a travelling minute, a letter of introduction, or a letter of transfer</b>
    <p><a href="mailto:clerkofmeeting@chapelhillfriends.org">Clerk of Meeting</a></p>
    <b>I'd like to undertake some Quaker service (e.g. FCNL, AFSC, QEW) and need some financial help for travel</b>
    <p><a href="mailto:peaceandjustice@chapelhillfriends.org">Peace and Justice committee</a></p>
    <b>I'd like some spiritual or leadership development and need some financial help</b>
    <p><a href="mailto:shotts-leadershipfunds@chapelhillfriends.org">Shotts/Leadership committee</a></p>
    <b>I have a short term request for food or visitation</b>
    <p><a href="mailto:hospitality@chapelhillfriends.org">Hospitality committee</a></p>
    <b>I need to report the death, injury or illness of a Meeting member/attender</b>
    <p><a href="mailto:clerkofmeeting@chapelhillfriends.org">Clerk of Meeting</a> or <a href="mailto:careandcounsel@chapelhillfriends.org">Clerk of Care and Counsel</a></p>
    <p><a href="mailto:news@chapelhillfriends.org">Publications and Communications committee</a> for In The Light IF YOU HAVE PERMISSION</p>
    <b>I have some information I would like to get out to the Meeting</b>
    <p><a href="mailto:news@chapelhillfriends.org">Publications and Communications committee</a> for monthly newsletter, weekly enews, In The Light, and webpage</p>
    <b>I want to communicate with someone at Orange County Correctional</b>
    <p>Please refer to the <a href="/occ.html">Transition and Support Committee&apos;s recommendation</a>.</p>
  </div>
</div>
