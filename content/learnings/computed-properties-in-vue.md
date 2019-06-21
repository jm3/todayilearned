---
title: Computed properties in Vue
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-13
summary: cached by reactive dependencies

---

[Computed properties][docs] in Vue are cached based on their “reactive
dependencies”, aka any VM (ViewModel) data they use.

Unless some of the VM data changes, the computed property value will be
cached and returned instantly.

[docs]: https://vuejs.org/v2/guide/computed.html
