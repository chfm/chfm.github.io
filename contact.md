---
layout: default
title: CHFM Contact
permalink: /contact
---

<div class="container" id="content">
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
                <p style="margin: 0">
                    <a href="mailto:{{ item.email }}@chapelhillfriends.org">{{item.name}}</a>
                </p>
            {% endfor %}
        </div>
        <div class="col-sm-6" style="word-wrap: break-word">
            <h1>Committees</h1>
            {% for item in site.data.committees %}
                <p style="margin: 0">
                    <a href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org">{{item.name}}</a>
                </p>
            {% endfor %}
        </div>
        <div class="col">
            <h1>Who should I contact?</h1>
            <p></p>
            <b>I have an idea; how best to bring it to Meeting</b>
            <p>Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) or appropriate committee </p>
            <b>I'm interested in joining a committee</b>
            <p>Nominations committee (nominations@chapelhillfriends.org) </p>
            <b>I have an idea for a Forum</b>
            <p>Adult Religious Education committee (are@chapelhillfriends.org) </p>
            <b>I have a desire for Clearness for Marriage or need a clearness or support committee for a personal issue</b>
            <p>Care and Counsel (careandcounsel@chapelhillfriends.org) </p>
            <b>I can't get into the Meeting House or the Schoolhouse</b>
            <p>Buildings and Grounds committee (buildingandgrounds@chapelhillfriends.org) or Resident (resident@chapelhillfriends.org) </p>
            <b>I have a problem with one of the buildings</b>
            <p>Buildings and Grounds committee (buildingandgrounds@chapelhillfriends.org) or Resident (resident@chapelhillfriends.org) </p>
            <b>I have questions about Quakerism</b>
            <p>Ministry and Worship committee (ministryandworship@chapelhillfriends.org) </p>
            <b>I'm considering becoming a member</b>
            <p>Ministry and Worship committee (ministryandworship@chapelhillfriends.org) </p>
            <b>I'm requesting membership</b>
            <p>Letter to Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) </p>
            <b>I'd like to make a donation or to get a tax receipt</b>
            <p>Finance committee (finance@chapelhillfriends.org) </p>
            <b>I need a travelling minute, a letter of introduction, or a letter of transfer</b>
            <p>Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) </p>
            <b>I'd like to undertake some Quaker service (e.g. FCNL, AFSC, QEW) and need some financial help for travel</b>
            <p>Peace and Justice committee (peaceandjustice@chapelhillfriends.org) </p>
            <b>I'd like some spiritual or leadership development and need some financial help</b>
            <p>Shotts/ Leadership committee (shotts-leadershipfunds@chapelhillfriends.org) </p>
            <b>I have a short term request for food or visitation</b>
            <p>Hospitality committee (hospitality@chapelhillfriends.org) </p>
            <b>I need to report the death, injury or illness of a Meeting member/attender
            Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) or Clerk of Care and Counsel (careandcounsel@chapelhillfriends.org) </b>
            <p>Publications and Communications committee for In The Light IF YOU HAVE PERMISSION (news@chapelhillfriends.org)</p>
            <b>I have some information I would like to get out to the Meeting</b>
            <p>Publications and Records committee (news@chapelhillfriends.org) for newsletter, listserv, In The Light, and webpage</p>
        </div>
    </div>
</div>