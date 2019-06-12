---
title: Save time with CSS grid area start/end shortcuts
tags:  ["CSS3", "CSS Grid"]
goal:  Front-End Engineering
date:  2019-05-27
summary: Because who has time to type all this stuff out?
draft: false

---

`grid-column` & `grid-row` both support a shorthand “slash” syntax where
the first value represents the column or row start and the second value
represents the column or row end. This is more concise than explicitly
listing start and end positions, but not so terse as the four-way
a/b/c/d syntax, which is harder to orient around.


```css
.a {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
```

From Rachel Andrew’s now very outdated (as of 2019) book, *[Getting Ready for CSS Grid Layout][book]*.

[book]: https://abookapart.com/products/get-ready-for-css-grid-layout
