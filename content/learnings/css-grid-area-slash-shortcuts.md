---
title: Save time with CSS grid area start/end shortcuts
tags:  [code, CSS3, Grid]
goal:  Front-End Engineering
date:  2019-06-14
summary: Because who has time to type all this stuff out?
category: code

---

`grid-column` & `grid-row` both support a shorthand “slash” [syntax][mo] where
the first value represents the column or row start and the second value
represents the column or row end. This is more concise than explicitly
listing start and end positions, but not so terse as the four-way
a/b/c/d syntax, which is harder to orient around.

{{< highlight css >}}
.a {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
{{< / highlight >}}

From Rachel Andrew’s now very outdated (as of 2019) book, *[Getting Ready for CSS Grid Layout][book]*.

[book]: https://abookapart.com/products/get-ready-for-css-grid-layout
[mo]: https://github.com/abookapart/css-grid-layout-code/blob/master/ch1-line-based-shorthand.html
