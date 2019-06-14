---
title: Boost CSS performance by preferring class-attr > el-attr selectors
tags:  ["CSS3", "Debugging"]
goal:  Front-End Engineering
date:  2019-05-19


---

It turns out that, with large websites and stylesheets, parsing many
element-attribute selectors like `div[data-v-foo]` is much slower than
parsing many class-attr selectors like `.cool-btn[data-v-foo]`, so
prefer the class-attr selector style when possible.
