---
title: The evolution of color names in CSS 
summary: the first version of the CSS spec supported only 16 named colors
tags:  [ CSS3, Lore, Color ]
date:  2019-06-24T14:10:51-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Today, while reading Mozilla's CSS color developer docs, I learned that
the list of CSS colors is not (and never was) equivalent to the full X11
named colors list.

_Thus spake Mozilla:_

The list of accepted keywords has undergone many changes during the evolution of CSS:

* CSS Level 1 only included 16 basic colors, called the <em>VGA colors</em> as they were taken from the set of displayable colors on <a class="external external-icon" href="https://en.wikipedia.org/wiki/VGA" rel="noopener">VGA</a> graphics cards.
* CSS Level 2 added the <code>orange</code> keyword.
* Although various colors not in the specification (mostly adapted from the X11 colors list) were supported by early browsers, it wasn't until SVG 1.0 and CSS Colors Level 3 that they were formally defined. They are called the <em>extended color keywords</em>, the <em>X11 colors</em>, or the <em>SVG colors</em>.
* CSS Colors Level 4 added the <code>rebeccapurple</code> keyword <a class="external external-icon" href="https://codepen.io/trezy/post/honoring-a-great-man" rel="noopener">to honor web pioneer Eric Meyer</a>.

[Read more][mozdox] on Mozilla.org.

[img]: /img/css-color-keywords-evolution.png
[mozdox]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
