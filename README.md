# Chapel Hill Friends Meeting Website

- https://www.chapelhillfriends.org/

## Running Local

- https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

`$ bundle exec jekyll serve`

## Generating Pages

Generate a static website in the `_site` directory. Use a branch with a
differently configured `_config.yml`

`$ bundle exec jekyll build`

## Updating Business Meeting

- Update the `assets/mwab/Agenda.pdf` with the current file.
- - `git rm` old unused files.
- Upload the files for readings and associated documents to `assets/mwab`.
- Update the `_data/mwab.yml` to have the included readings.
  - use the pdf value for a pdf link
  - use the link value for an html link
### Example `_data/mwab.yml` File
```YAML
- name: Minutes of the December 16, 2018 Meeting for Worship with Attention to Business
  pdf: chfm_minutes_201812
- name: Balance Sheet as of December 31, 2018
  pdf: treasurer_balance_sheet_20181231
- name: Budget versus Actuals July 2018 to December 2018
  pdf: treasurer_budget_v_actuals_201812
- name: Budget Snapshot January 1, 2019
  pdf: chfm_snapshot_20190101
- name: "Peace and Justice Minute"
  link: "{{ site.baseurl }}/peaceandjustice.html"
- name: "Spiritual State of CHFM Meeting"
  pdf: "#"
```

## Adding Forums

Maintain the `_data/forums.yml` file

- For items without a description just enter in a blank description with a ""
- Put dates in `YYYY-MM-DD` format

### Example `_data/forums.yml` File

```YAML
- date:        2019-03-31
  title:       Personal sharing by Tom McQuiston
  description: ""
- date:        2019-04-07
  title:       Building Institutional Capacity for True Inclusion
  description: Karen Cumberbatch (CFS)
- date:        2019-04-14
  title:       Personal Sharing
  description: >
    Lois Ann Hobbs (age 97) will share historical memories from
    the 1940s and 1950s, of the handful of people who started the CHFM, which
    led to the development of the IFC (Interfaith Food Council) and Quaker
    House. Attending Friends who knew these people are invited to participate
    in the discussion.
- date:        2019-04-21
  title:       No Forum
  description: >
    <p><a href="/mwab.html">Meeting for Worship with
    Attention to Business at 9:00 a.m</a></p>
```

## Adding to Currently

Add items to the `_data/currently.yml` file:

```YML
- date: 2024-02-16
  title: "CROP Walk for Hunger"
  description: >
    Our meeting is participating this year in the CROP Hunger Walk: donate and
    register on the CROP Walk website: [https://events.crophungerwalk.org/cropwalks/team/chapel-hill-friends-meeting](https://events.crophungerwalk.org/cropwalks/team/chapel-hill-friends-meeting)
- date: 2024-02-10
  title: "February Newsletter"
  description: >
    Our latest newsletter for February, along with minutes from the January
    business meeting have been posted to the Meeting website at: [https://www.chapelhillfriends.org/newsletter.html](https://www.chapelhillfriends.org/newsletter.html)
```

Each item needs a title (stay below 100 characters), a date in YYYY-MM-DD
format, and a shorty description. This description is processed for markdown so use links and styling that way.

## Adding a Newsletter

Place a the new PDF newsletter in `assets/nl` with the filename
`newsletter-yyyy-mm.pdf`

The newsletter.md template will automatically incorporate the PDF into the
newsletter archive.

Each year the `_config.yml` needs a new section added so that the template will
pick up the new newsletters. This section looks like

```YAML
defaults:
  - scope:
      path: "nl/2020"
    values:
      nl_year: 2020
      newsletter: true
  - scope:
      path: "assets/nl/newsletter-2019-*.pdf"
    values:
      nl_year: 2019
      newsletter: true
```

For years after 2020 we are using the subdirectory to group rather than a glob,
which was done in order to maintain existing URLs for newsletter

## External Links

There are sets of link directories that are reusable throughout the site:

- `_data/quaker-links.yml`: Links to Quaker organizations.
- `_data/local-links.yml`: Links of interest for local organizations and partners.
- `_data/co-links.yml`: Links of interest for conscientious objectors.
- `_data/misc-links.yml`: Other miscellaneous external links

### Example Link File Structure
```YAML
---
# Links to Local Organizations
- name: Inter-Faith Council
  url: https://www.ifcweb.org/
- name: Orange Justice United
  url: https://ocjusticeunited.org/
- name: HK on J People's Assembly Coalition
  url: https://www.hkonj.com/
```

To add an additional link to the various place these lists appear just add
another element with the `name` and `url`.

## Adding a Content Page

There are two major layouts available for content pages:

- `[center.html](https://github.com/chfm/chfm.github.io/blob/master/_layouts/center.html)`: which is used for markdown formatted content
- `[base.html](https://github.com/chfm/chfm.github.io/blob/master/_layouts/base.html)`: which is used for HTML formatted pages, though markdown can be embedded also.

To add a content page create a markdown file in `/content` with YAML frontmatter:

```YAML
---
layout: default
title: Newsletter - Chapel Hill Friends Meeting
permalink: /newsletter.html
---
```

The three elements to include in the frontmatter are:

- layout: [center, default]
- title: Name of page - Chapel Hill Friends Meeting
- permalink: the path to the page

Subsequent linking in navigation or through secondary portal pages can be made
as necessary.

## Troubleshooting
- GitHub pages/Jekyll needs Ruby 2.6+
