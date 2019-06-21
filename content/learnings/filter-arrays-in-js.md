---
title: Filter arrays in JS
tags:  ["Javascript"]
goal:  Front-End Engineering
date:  2019-06-20
needs-work: fix syntax highlighting for JS

---

Returns a new array, filtered:

```javascript
let newAr = oldAr.filter(callbackFn);

Callback function cbFn accepts:

El : current element of the array
Idx : index of value being processed
Arr:  the original array

todos.filter(t => !t.isDone) // filter list, returning items matching conditional

function isEven(value) {
  return value % 2 == 0;
}

const a = [11, 98, 31, 23, 944];
const f = a.filter(isEven);
```
