---
layout: home
title: CHFM Home
permalink: /
sidebar: home
---

<div class="col-md-4">
  {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
  {{ welcome-include | markdownify }}
</div>
<div class="col-md-8">
  {% capture fds-schedule-include %}{% include fds-schedule.md %}{% endcapture %}
  {{ fds-schedule-include | markdownify }}
  {% capture currently-include %}{% include currently.md %}{% endcapture %}
  {{ currently-include | markdownify }}
</div>