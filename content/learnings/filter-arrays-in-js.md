---
title: Filter arrays in JS
summary: using array.filter
tags:  [Javascript]
goal:  Front-End Engineering
date:  2019-06-20
code: true

---

Filter a list and return a new array of items matching conditional test, a la Ruby, lisp/funcprog, etc.

{{< highlight javascript >}}

/*
 * let result = array.filter(callback_fn);
 *
 * callback_fn accepts:
 *   el:   current array element
 *   idx:  index of current element
 *   list: original array
 */

let list = [2, 3.14159, 4, 6, 7, 8, 11, 98, 31, 23, 69, 420, 666, 944];

function is_even(value) {
  return value % 2 == 0;
}

let evens = list.filter(is_even);
// Array(8) [ 2, 4, 6, 8, 98, 420, 666, 944 ]

let odds  = list.filter(x => x % 2 == 1);
// Array(5) [ 7, 11, 31, 23, 69 ]
{{< / highlight >}}
