---
title: Improve CSS performance by preferring class-attr > el-attr selectors
tags:  ["CSS"]
goal:  Front-End Engineering
date:  2019-05-19
draft: false

---
element-attribute selectors like div[data-v-foo] are much slower than class-attr selectors .cool-btn[data-v-foo], so prefer the class-attr selector style when possible.

