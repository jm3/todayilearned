---
title: Filter arrays in JS
tags:  ["Javascript"]
goal:  Front-End Engineering
date:  2019-05-20


---
Returns a new array, filtered:

et newAr = oldAr.filter(callbackFn);

cbFn accepts:

El : current element of the array
Idx : index of value being processed
Arr:  the original array

todos.filter(t => !t.isDone) // filter list, returning items matching conditional

function isEven(value) {
  return value % 2 == 0;
}

const a = [11, 98, 31, 23, 944];
const f = a.filter(isEven);

