---
title: Create + reference a native CSS variable
tags:  [code, CSS3, Color]
goal:  Front-End Engineering
summary: CSS now has variables — it only took 20 years! 😲
date:  2019-06-08
category: code

---

{{< highlight css >}}
:root {
  --scale: scale(1.1);
  --primary-color: #00FF00;
}
{{< / highlight >}}

{{< highlight css >}}
.btn { transform: var(--scale); }
.foo { color: var(--primary-color); }
/* etc */
{{< / highlight >}}

{{< codepen id="vwZWPz" tab="css" >}}
