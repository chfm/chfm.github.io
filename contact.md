---
layout: default
title: CHFM Contact
permalink: /contact
---

<div class="container" id="content">
    <div class="row pagecontent">
        <div class="col-sm-6">
            <h1>Contact</h1>
            {% for item in site.data.contact %}
                <p>
                    <a href="mailto:{{ item.email }}@chapelhillfriends.org">{{item.name}}</a>
                </p>
            {% endfor %}
        </div>
        <div class="col-sm-6" style="word-wrap: break-word">
            <h1>Committees</h1>
            {% for item in site.data.committees %}
                <p>
                    <a href="mailto:{% if item.email %}{{ item.email }}{% else %}{{ item.name | downcase | remove: ' '}}{% endif %}@chapelhillfriends.org">{{item.name}}</a>
                </p>
            {% endfor %}
        </div>
        <div class="col">
            <h1>Who should I contact?</h1>
            <h2>I have an idea; how best to bring it to Meeting</h2>
            <p>Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) or appropriate committee </p>
            <h2>I'm interested in joining a committee</h2>
            <p>Nominations committee (nominations@chapelhillfriends.org) </p>
            <h2>I have an idea for a Forum</h2>
            <p>Adult Religious Education committee (are@chapelhillfriends.org) </p>
            <h2>I have a desire for Clearness for Marriage or need a clearness or support committee for a personal issue</h2>
            <p>Care and Counsel (careandcounsel@chapelhillfriends.org) </p>
            <h2>I can't get into the Meeting House or the Schoolhouse</h2>
            <p>Buildings and Grounds committee (buildingandgrounds@chapelhillfriends.org) or Resident (resident@chapelhillfriends.org) </p>
            <h2>I have a problem with one of the buildings</h2>
            <p>Buildings and Grounds committee (buildingandgrounds@chapelhillfriends.org) or Resident (resident@chapelhillfriends.org) </p>
            <h2>I have questions about Quakerism</h2>
            <p>Ministry and Worship committee (ministryandworship@chapelhillfriends.org) </p>
            <h2>I'm considering becoming a member</h2>
            <p>Ministry and Worship committee (ministryandworship@chapelhillfriends.org) </p>
            <h2>I'm requesting membership</h2>
            <p>Letter to Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) </p>
            <h2>I'd like to make a donation or to get a tax receipt</h2>
            <p>Finance committee (finance@chapelhillfriends.org) </p>
            <h2>I need a travelling minute, a letter of introduction, or a letter of transfer</h2>
            <p>Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) </p>
            <h2>I'd like to undertake some Quaker service (e.g. FCNL, AFSC, QEW) and need some financial help for travel</h2>
            <p>Peace and Justice committee (peaceandjustice@chapelhillfriends.org) </p>
            <h2>I'd like some spiritual or leadership development and need some financial help</h2>
            <p>Shotts/ Leadership committee (shotts-leadershipfunds@chapelhillfriends.org) </p>
            <h2>I have a short term request for food or visitation</h2>
            <p>Hospitality committee (hospitality@chapelhillfriends.org) </p>
            <h2>I need to report the death, injury or illness of a Meeting member/attender
            Clerk of Meeting (clerkofmeeting@chapelhillfriends.org) or Clerk of Care and Counsel (careandcounsel@chapelhillfriends.org) </h2>
            <p>Publications and Communications committee for In The Light IF YOU HAVE PERMISSION (news@chapelhillfriends.org)</p>
            <h2>I have some information I would like to get out to the Meeting</h2>
            <p>Publications and Records committee (news@chapelhillfriends.org) for newsletter, listserv, In The Light, and webpage</p>
        </div>
    </div>
</div>