---
title: Splice using Array.splice
tags:  [Javascript]
goal:  Front-End Engineering
date:  2019-06-01
summary: The swiss-army knife of arrays

---

- changes array contents in place by removing or replacing existing
elements and/or adding new elements

- remove a range of elements:
```javascript
gas.splice(0,4) // removes first four elements
```

- splice in new elements at the beginning, middle, or end, replacing the
Index → Count range defined by the first two args:

```Javascript
gas.splice(1, 0, 'foo', 'bar'); // inserts two new els at idx 1
```
