---
layout: post
title: A template for an external blog post
date: 2026-01-01 12:00:00
description: A one-line summary shown on the blog index; clicking the card redirects to the external URL.
tags: external
categories: external-posts
external_source: Medium # label shown on the post card (e.g. Medium, Substack, Lab Blog)
redirect: https://example.com/your-external-post
---

This file exists only to make a card appear on your blog index that links out to
an external post. Because `redirect:` is set, al-folio skips the post body and
sends the visitor straight to the URL above.

Nothing below the front matter is rendered for a redirecting post, so you can
leave this area empty or keep notes here.

## To publish

1. Move this file out of `_drafts/` into `_posts/`.
2. Rename to `YYYY-MM-DD-a-short-slug.md` matching the `date:` field.
3. Set the real title, description, `external_source:` label, and `redirect:` URL.
