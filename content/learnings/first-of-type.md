---
title: The :first-of-type CSS element selector
summary: select the first of a group of similar elements
tags:  [CSS3]
goal:  Front-End Engineering
date:  2019-06-18
code: true

---

What's a little unintuitive to me is that `:first-of-type` doesn't necessarily
select **one** element, as the name might suggest! first-of-type selects ALL first of (element) type.

A selector like `header .fizzgig > ul li:first-of-type` would select
**all** first `<li>`s inside a `<header>` that are direct descendents of
  an element with class `fizzgig`.

{{< highlight css >}}

path:first-of-type {
  fill: black;
}
{{< / highlight >}}

Click "Result" to see how :first-of-type selects ALL first of type, not "THE" first of type.

{{< codepen id="OeVpqo" tab="css" >}}
