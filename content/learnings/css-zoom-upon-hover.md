---
title: CSS zoom upon hover
tags:  ["CSS3"]
goal:  Front-End Engineering
date:  2019-04-24
draft: false

---
set: 
  transition: transform 2s; 
on the element 
and then:
  transform: var(--scale);
on the :hover pseudo-class, where scale is defined previously:
  --scale: scale(1.05);

