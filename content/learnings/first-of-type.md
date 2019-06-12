---
title: Use the :first-of-type selector to select the first of a type of element
tags:  ["CSS3"]
goal:  Front-End Engineering
date:  2019-05-23
draft: false

---

What's a little unintuitive to me is that `:first-of-type` doesn't necessarily
select **one** element, as the name might suggest! first-of-type selects ALL first of (element) type.

A selector like `header .fizzgig > ul li:first-of-type` would select
**all** first `<li>`s inside a `<header>` that are direct descendents of
  an element with class `fizzgig`.

``` css
path:first-of-type {
  fill: black;
}
```

Click "Result" to see how :first-of-type selects ALL first of type, not "THE" first of type.

{{< codepen id="OeVpqo" tab="css" >}}
