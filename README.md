# Chapel Hill Friends Meeting Website

- https://chfm.github.io/

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

Add a file in `_forums` in the format `YYYY-MM.md` to be included in the
forums.html page.

The template for the forums markdown is as follows:

```Markdown
---
layout: default
title: "Month Year"
removeDate: YYYY-MM-DD
---

# Month Year

## _Month Day_ - Forum Title

Forum description.
## _Month Day_ - Forum Title

Forum description.

## _Month Day_ - NO FORUM: Meeting for Worship with Attention to Business (9am)

## _Month Day_ - Forum Title

Forum description.

## _Month Day_ - Forum Title

Forum description.
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
