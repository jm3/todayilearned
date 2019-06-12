---
title: Splice using Array.splice
tags:  ["Javascript"]
goal:  Front-End Engineering
date:  2019-05-20
draft: false

---
- changes array contents in place by removing or replacing existing elements and/or adding new elements

- remove a range of elements:
gas.splice(0,4) // removes first four elements

- splice in new elements at the beginning, middle, or end, replacing the Index → Count range defined by the first two args:
gas.splice(1, 0, 'foo', 'bar'); // inserts two new els at idx 1

