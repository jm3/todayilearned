---
title: Create + reference a native CSS variable
tags:  [CSS3, Color]
goal:  Front-End Engineering
summary: CSS now has variables — it only took 20 years! 😲
date:  2019-06-08

---

```css
:root {
  --scale: scale(1.1);
  --primary-color: #00FF00;
}
```
…
```css
.btn { transform: var(--scale); }
.foo { color: var(--primary-color); }
/* etc */
```

{{< codepen id="vwZWPz" tab="css" >}}
