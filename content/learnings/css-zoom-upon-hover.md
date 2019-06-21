---
title: CSS zoom upon hover
tags:  [CSS3]
goal:  Front-End Engineering
date:  2019-06-15

---

To create a pure CSS zoom effect on user, just set:
  `transition: transform 2s;`
on the element and then:
  `transform: var(--scale);`
on the :hover pseudo-class, where scale is defined previously:
  `--scale: scale(1.05);`

View a demo in Codepen

{{< codepen id="QPJOzv" tab="css" >}}
