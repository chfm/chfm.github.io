# Chapel Hill Friends Meeting Website

- https://chfm.github.io/
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
```

## Adding Forums

Maintain the `_data\forums.yml` file

- For items without a description just enter in a blank description with a ""
- Put dates in `YYYY-MM-DD` format

### Example `_data\forums.yml` File

```YAML
- date: 2019-03-31
  title: Personal sharing by Tom McQuiston
  description: ""
- date: 2019-04-07
  title: Building Institutional Capacity for True Inclusion
  description: Karen Cumberbatch (CFS)
- date: 2019-04-14
  title: Personal Sharing
  description: |
    Lois Ann Hobbs (age 97) will share historical memories from
    the 1940s and 1950s, of the handful of people who started the CHFM, which
    led to the development of the IFC (Interfaith Food Council) and Quaker
    House. Attending Friends who knew these people are invited to participate
    in the discussion.
```

## Adding to Currently

The currently section on the landing page uses Twitter to update the feature.

Post tweets from @chfm_quakers.

## Adding a Newsletter

Place a the new PDF newsletter in `assets/nl/yyyy` with the filename
`newsletter-yyyy-dd.pdf`

The newsletter.md template will automatically incorporate the PDF into the
newsletter archive.

Each year the `_config.yml` needs a new section added so that the template will
pick up the new newsletters. This section looks like

```YAML
defaults:
  - scope:
      path: "assets/nl/YYYY"
    values:
      nl_year: YYYY
      newsletter: true
```

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
