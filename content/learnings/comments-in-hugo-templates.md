---
title: Commenting within Hugo templates
summary: without being stripped out by the processor
tags:  [ Hugo, Debugging]
date:  2019-06-19
goal:  Front-End Engineering

---

Commenting in web pre-processors can be complicated because there's so
many layers and steps of interpolation. Hugo is no exception.

Hugo automaticalyl strips HTML comment tags. If you need to add an HTML
comment to your Hugo templates that doesn't get stripped, you can use
[this syntax][docs]:

```{{ "<!-- foo/bar/baz whatever -->" | safeHTML }}```

[You hate to see it.][forum]

[forum]: https://discourse.gohugo.io/t/how-to-add-comments-in-a-template/75/6
[docs]: https://gohugo.io/templates/introduction/#toc_9
