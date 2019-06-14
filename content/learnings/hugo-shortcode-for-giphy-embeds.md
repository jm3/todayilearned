---
title: Hugo shortcode for Giphy embeds
summary: embed gifs directly within markdown
tags:  [ html5, hugo ]
date:  2019-06-14T15:15:47-07:00
goal:  Front-End Engineering

---

{{< giphy GguSJ3WrA7mx2 >}}

Fully responsive embed, just save the following in your
`layouts/shortcodes/` dir and pass the hash/slug of the giphy you want,
like so:

```html
<div style="width:100%;height:0;padding-bottom:40%;position:relative;">
<iframe src="https://giphy.com/embed/{{ (index .Params 0) }}"
  width="100%" height="100%" style="position:absolute"
  frameBorder="0" allowFullScreen></iframe></div>
```
