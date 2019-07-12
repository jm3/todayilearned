---
title: Using then "even" + "odd" keywords in CSS selectors
summary: Alternating, zebra-row styling
tags:  [CSS3, Code]
goal:  Front-End Engineering
date:  2019-06-03
categories: [code]

---

{{< highlight css >}}
/* matches the odd childen of TR (table rows), presumably TDs (table cell data) */
 tr:nth-child(odd) {
   ...
 }
{{< / highlight >}}

{{< codepen id="QXPJVr" tab="result" >}}

tr:nth-child(even) {background: #CCC}
tr:nth-child(odd) {background: #FFF}

col:first-child {background: #FF0}
col:nth-child(2n+3) {background: #CCC}

.grid div:nth-of-type(even) { ... }
