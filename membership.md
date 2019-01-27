---
layout: default
title: Membership
revised: 2018
permalink: /membership/
---
# Membership

**Revised in 2018**

The Society of Friends does not require that its members subscribe to fixed
theological doctrines or rituals, but trusts the individual's own mind and
conscience, guided by the Inward Light---that of God - in each of us, which it
attempts to stimulate and nourish within the community of Friends. Membership
does have certain implications, however. It implies that life in the manner of
Friends, as expressed in the historic Quaker testimonies, is a meaningful guide
to one's own life: simplicity in manner of living, respect for life and the
sanctity of every person, community as the nurturing source and basis of social
justice, non-violent transformations of conflicts and controversies, and
decision-making through the sense of the Meeting. Above all, it implies a
devotion to the Inward Light as the source of Divine guidance, sought through
the Meeting for Worship and through individual meditation and spiritual search.

In becoming a member, one accepts responsibility for participating in the life
of the Meeting community; through the Meetings for Worship, entering into the
living silence and contributing as one is moved by the spirit; through Meetings
for Business, participating in the decisions necessary to the ongoing life of
the Meeting; through committee service and other volunteer work the Meeting
needs to fulfill the tasks it undertakes; through financial support of the
Meeting and its outreaching concerns. One's ability to give time, effort and
money in these ways will vary according to the individual member's circumstances
and from time to time.

The Meeting also has responsibilities to its members and their children;
assisting their integration into the Meeting's activities; facilitating personal
and spiritual growth; and providing pastoral care and counseling in times of
need and a supportive community in times of major life passages. It is a vehicle
for expressing collective social concerns and serves as a channel between
individuals and larger Friends organizations. It is committed to keeping in
touch with less active members or those at a distance and keeping them informed
of its business. The Meeting is entrusted with being a good steward of the
personal and financial gifts made to it.

Joining the Meeting should be viewed not as a final step but as another step on
a continuing Journey in the company of a fellowship of seekers. The Meeting
welcomes into membership those who desire to join with us in spiritual growth,
sharing and learning from our individual differences, united in mutual love and
respect, guided by the Divine Within which we all share.

Anyone who is moved by the Spirit to join in membership of the Meeting and the
Religious Society of Friends of which it is a part, is invited to write an email
or letter to the Clerk requesting a clearness committee to consider his/her
membership.

<div style="height: 10px;"></div>

<div class="accordion">
  {% for item in site.data.membership%}
    <div class="card">
      <div class="card-header" id="heading-{{item-tag}}">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed accordionButton" data-toggle="collapse" data-target="#{{ item.tag }}" aria-expanded="false" aria-controls="{{item.tag}}">
            {{ item.name }}
          </button>
        </h5>
      </div>
      <div id="{{ item.tag }}" class="collapse autoScroll" aria-labelledby="heading-{item-tag}}" data-parent=".accordion">
        <div class="card-body">
          {{ item.content | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
