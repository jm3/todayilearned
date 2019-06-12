---
title: Use computed properties in Vue
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-20
draft: false

---
Computed properties in Vue	are cached based on their “reactive dependencies”, aka any VM (ViewModel) data they use. 

Unless some of the VM data changes, the computed property value will be cached and returned instantly.

