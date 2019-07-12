---
title: nth-last-child(num) - the reverse (Polish) selector
summary: selecting from the last element backwards
tags:  [CSS3]
goal:  Front-End Engineering
date:  2019-06-02

---

Ever needed to select the last element, or select by counting backwards from the last element?!

\*Ricky Jay voice\* I HAVE.

[The nth-last-child() selector][mo] will do that with style.

{{< highlight css >}}
/* select the -3rd (third from last) div  */
div:nth-last-child(3) {
  ...
}
{{< / highlight >}}

## Click the "CSS" button below:

{{< codepen id="vqMvMr" tab="result" >}}

[mo]: https://www.geeksforgeeks.org/css-nth-last-child-selector/
