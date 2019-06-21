---
title: CSS selector performance 1
summary: Prefer class-attribute to element-attribute selectors
tags:  [CSS3, Debugging]
goal:  Front-End Engineering
date:  2019-05-17

---

It turns out that with large websites and stylesheets, parsing many
element-attribute selectors like `div[data-v-foo]` is much slower than
parsing many class-attr selectors like `.cool-btn[data-v-foo]`, so
prefer the class-attr selector style when possible.

View some [Performance test results][perf].

[perf]: http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=a[href]&body=background%3A+%23CFD&ne=1000
