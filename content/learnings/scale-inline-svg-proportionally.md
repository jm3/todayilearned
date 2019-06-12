---
title: Scale inline SVG proportionally using calc() and var()
tags:  ["CSS3", "HTML5"]
goal:  Front-End Engineering
date:  2019-05-24
featured: true
draft: false

---

It turns out that SVG art scales differently depending on whether it’s
inline in the page, or referenced externally as a file...! Why this
should is makes no sense to me, but here's a simple way to scale SVG
correctly, proportionately, using just CSS:

In brief:

1. I define a priori the **target width** and **actual** ratio of the existing art using [CSS][css] [variables][vars]
2. Use CSS3's `calc()` function with the `width` and `ratio` vars to simply calculate the proportional target **height**
3. Now just set `.your_svg { width: var(--width); height: var(--height); `

Hover over the SVG art below, then click the SCSS and JS tabs to see how
it works. 

{{< codepen id="vwZWPz" height="1000" >}}

The above pen also demonstrates: 

* blockframing, a technique for mocking and approximating real content, 
* base64 asset encoding

[css]: /tags/css3/
[vars]: /learnings/native-css-variables/
