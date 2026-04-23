---
layout: post
title: Vorlage für einen zweisprachigen Blogbeitrag
date: 2026-01-01 12:00:00
description: Eine einzeilige Zusammenfassung für die Blog-Übersicht und Link-Previews.
tags: research phd
categories: notes
featured: false
related_posts: true

# Zweisprachige Version: muss den gleichen translation_key haben wie das englische Pendant.
lang: de
translation_key: 2026-example-post
permalink: /blog/de/2026/example-post/
---

Deutsche Fassung des Beitrags. Sie wird nur dann separat gerendert, wenn die Datei im `_posts/`-Ordner liegt (nicht im `_drafts/`-Ordner).

## Abschnittsüberschrift

Fließtext, Links und Bilder funktionieren wie gewohnt in Markdown.

## Veröffentlichung

1. Datei nach `_posts/` verschieben.
2. Umbenennen in `JJJJ-MM-TT-slug.de.md`.
3. Titel, Beschreibung, Tags und Inhalt anpassen.

Wichtig: `translation_key` muss exakt mit dem der englischen Fassung übereinstimmen — darüber verknüpft die Layout-Datei die beiden Sprachversionen.
