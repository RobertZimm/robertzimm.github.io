---
layout: post
title: A template for an internal blog post
date: 2026-01-01 12:00:00
description: A one-line summary shown on the blog index and in link previews.
tags: research phd
categories: notes
featured: false
related_posts: true

# ---- Bilingual (optional) ----
# Set lang to "en" or "de". If you also add a sibling file with the same
# translation_key and a different lang, a small EN | DE switch appears in
# the top-right of the post.
lang: en
translation_key: 2026-example-post
permalink: /blog/2026/example-post/

# thumbnail: assets/img/your-thumbnail.jpg
# giscus_comments: true
---

Write the post body in Markdown here. Everything in this file lives on the site at the URL defined by `permalink:` once published.

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

## To publish (monolingual)

1. Move this file out of `_drafts/` into `_posts/`.
2. Rename to `YYYY-MM-DD-a-short-slug.md` (the date in the filename must match the `date:` field).
3. Replace the placeholder title, description, tags, and body. If you don't want a translation, delete the `lang`, `translation_key`, and `permalink` lines — the post lives at `/blog/<year>/<slug>/` by default.

## To publish bilingually

1. Copy this file twice, once as `YYYY-MM-DD-slug.md` and once as `YYYY-MM-DD-slug.de.md`, both in `_posts/`.
2. In the English file keep `lang: en` and `permalink: /blog/<year>/<slug>/`.
3. In the German file use `lang: de` and `permalink: /blog/de/<year>/<slug>/`.
4. Make sure **both files share the same `translation_key`** (that's what links them).
5. Translate the title, description, and body in the German file.

When both files exist, every visitor to either page sees an `EN | DE` switch in the post header's top-right corner.
