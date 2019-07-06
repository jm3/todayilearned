---
title: FlexBox 101
summary: one-dimensional (linear) layouts
tags:  [code, CSS3]
date:  2019-06-01
goal:  Front-End Engineering
categories: code

---

Flexbox (as opposed to CSS Grid) is best for one-dimensional layouts,
i.e. a set of content items in a line, be it horizontal or vertical.

On the parent container element, set:

{{< highlight css >}}
.some-parent {
  display: flex;
  justify-content: space-evenly;
}
{{< / highlight >}}

{{< codepen id="vwaPOJ" tab="css" >}}

{{< codepen id="QPJOzv" tab="css" >}}
