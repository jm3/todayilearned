---
title: Using the "even" and "odd" keywords in CSS selectors
summary: Alternating, zebra-row styling
tags:  [CSS3, Code]
goal:  Front-End Engineering
date:  2019-06-03
categories: [code]

---

This matches the odd childen of TR (table rows), presumably TDs (table cell data), 
for "zebra-row" styling of alternating elements.

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

Notably, because of the CSS cascade, you may not often need even and odd, because you can just apply one style to all rows, and then override just the even rows with `nth-child(even)`, giving an even / odd result.  `¯\_(ツ)_/¯` 

{{< codepen id="QXPJVr" tab="result" >}}
