---
title: Responsive image markup
summary: A strange and unsettling confluence of element attributes
tags:  [HTML5]
date:  2019-06-26T16:55:31-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Exploring responsive images, by connecting:

1. a Hugo shortcode template that emits 
  * HTML `<picture>` and `<source>` element tags 
  * with the new `@srcset` + `@media` + `@sizes` attributes
1. a fallback `<img>` element for old browsers
1. some lightly modified CSS
1. with new image variations batch-processed with `gulp-responsive`
1. a Javascript lazy-loader to only load the currently in-window (viewport) images #overkillforthisblog

A single image on a page, displayed with an awareness of browser width,
screen density, and scroll position now involves five different levels
of the front-end layer cake.

{{< img src="/art/mies-plano-winter" type="jpg"
  caption="Mies van der Rohe Farnsworth House Plano, IL" >}}

