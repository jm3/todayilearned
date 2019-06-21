---
title: Use the -root {} CSS pseudo-class
summary: like the html {} selector, but with even higher precedence
tags:  ["CSS3"]
goal:  Front-End Engineering
date:  2019-04-22

---

The [`:root` CSS pseudo-class][docs] matches the root element of a tree
representing the document. In HTML, `:root` represents the `<html>`
element and is identical to the selector `html {}`, except that `:root`'s
specificity is higher. It's a good, layout-free place to stash [CSS variables][vars].

[docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/:root
[vars]: /learnings/native-css-variables
