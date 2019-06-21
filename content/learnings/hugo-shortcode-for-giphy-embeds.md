---
title: Hugo shortcode for Giphy embeds
summary: embed gifs directly within markdown
tags:  [ html5, hugo ]
date:  2019-06-18T15:15:47-07:00
goal:  Front-End Engineering

---

{{< giphy GguSJ3WrA7mx2 >}}

Fully responsive embed, just save the following in your
`layouts/shortcodes/` dir and pass the hash/slug of the giphy you want,
like so: `{ {< giphy GguSJ3WrA7mx2 >} }`


{{< gist jm3 15c59b2b7c8ce8e598c3ec7ef3a737d3 >}}

