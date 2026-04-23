---
layout: post
title: A template for an internal blog post
date: 2026-01-01 12:00:00
description: A one-line summary shown on the blog index and in link previews.
tags: research phd
categories: notes
featured: false
related_posts: true
# thumbnail: assets/img/your-thumbnail.jpg
# giscus_comments: true
---

Write the post body in Markdown here. Everything in this file lives on the site itself at `/blog/<year>/<slug>/` once published.

## Section heading

Regular prose, links, and images work as normal Markdown. You can reference
figures with al-folio's include:

{% raw %}
{% include figure.liquid path="assets/img/example.jpg" class="img-fluid rounded z-depth-1" %}
{% endraw %}

### Sub-section

- Lists work
- `inline code` works
- Math: $$E = mc^2$$

```python
# fenced code blocks are highlighted by Rouge
def hello():
    print("hello")
```

## To publish

1. Move this file out of `_drafts/` into `_posts/`.
2. Rename to `YYYY-MM-DD-a-short-slug.md` (the date in the filename must match the `date:` field).
3. Replace the placeholder title, description, tags, and body.
