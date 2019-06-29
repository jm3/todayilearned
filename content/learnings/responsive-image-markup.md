---
title: Responsive image markup
summary: A strange and unsettling confluence of element attributes
tags:  [HTML5]
date:  2019-06-26T16:55:31-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Responsive images in HTML + Hugo, with

1. Hugo shortcode templates and
2. a Javascript lazy-loader and
3. the HTML picture + sourceset + img tags and
4. manually exported images from Photoshop

Oh my lord that was complicated. A single image now involves like four
difference levels of the front-end layer cake.

<!-- #notthebestprocess #dothingsthatdontscale #noCDNyet #shouldwebeusingcloudinary? -->

{{< img src="/img/mies-plano-winter" type="jpg"
  caption="Mies van der Rohe Farnsworth House Plano, IL" >}}

