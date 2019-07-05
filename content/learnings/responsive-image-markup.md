---
title: Responsive image markup
summary: A strange and wonderful confluence of new elements and attributes
tags:  [HTML5]
date:  2019-06-26T16:55:31-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---
{{< img src="/art/test/mies" type="jpg"
  caption="Sample responsive image" >}}

## TL;DR - resize this page (or rotate your phone screen) to see different images load magically.

Doing responsive images right is complicated, largely given the number
of different scenarios to consider:

1. delivering the best **file format** for the browser and reader's net connection
2. delivering the **optimal resolution** image (pixel density) given the DPI of the user's device
3. picking the best particular crop of the image for user's device + window size / orientation (art direction)
4. fitting the chosen image appropriately into the page layout, given things like column width, whitespace, etc.

The [HTML WhatWG][whatwg] has considered all these factors, and
accommodates them in modern HTML using new tags like `<picture>` and new
attributes like `@srcset` and `@sizes`, which in turn use a strange new
list format rarely seen in HTML.

To make all this work together to deliver a responsive image like the one below, this site (TIL) employs:

1. a Hugo shortcode template that emits 
  * HTML `<picture>` and `<source>` element tags 
  * with the new `@srcset` + `@media` + `@sizes` attributes
1. a fallback `<img>` element for old browsers
1. some lightly modified CSS
1. with new image variations batch-processed with `gulp-responsive`
1. a Javascript lazy-loader to only load the currently in-window
  (viewport) images #overkillforthisblog

A single image on a page, displayed with an awareness of browser width,
screen density, and scroll position now involves five different levels
of the front-end layer cake.

{{< img src="/art/mies-plano-winter" type="jpg"
  caption="the Farnsworth House. Architect: Mies van der Rohe. Plano, IL" >}}

[whatwg]: https://whatwg.org/faq
