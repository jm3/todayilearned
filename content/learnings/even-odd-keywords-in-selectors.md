---
title: Using the "even" and "odd" keywords in CSS selectors
summary: Alternating, zebra-row styling
tags:  [CSS3, Code]
goal:  Front-End Engineering
date:  2019-06-03
categories: [code]

---

For "zebra-row" styling of alternating elements.

This matches the odd childen of TR (table rows), presumably TDs (table cell data).

Notably, because of the CSS cascade, you may not often need even and odd, because you can just apply one style to all rows, and then override just the even, giving and even / odd result.

But if you were, e.g. applying icons to even rows and different icons to odd rows, or something like that, then you might still use both.

{{< highlight css >}}
/* select the odd children of TR */
tr:nth-child(odd) {
  ...
}

/* guess lol */
tr:nth-child(even) {
  ...
}
{{< / highlight >}}

{{< codepen id="QXPJVr" tab="result" >}}
