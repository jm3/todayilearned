---
title: Format HTML + CSS with JS-beautify
tags:  [HTML5]
goal:  Front-End Engineering
date:  2019-06-09
summary: JS-Beautify doesn't just beautify JS

---

This was news to me, but: [JS Beautify][npm] can beautify more than just
JS. It can [autoformat your CSS and HTML][docs], including one of my favorite
pathologies: wrapping + aligning attributes:

Possible values:

    auto, force, force-aligned, force-expand-multiline, aligned-multiple, preserve, preserve-aligned

Or on the command-line:

    -A, --wrap-attributes

Side note: there's also a jsbeautify (no dash), which is something
different. Remember the dash, **js-beautify**.

 [npm]: https://www.npmjs.com/package/js-beautify
[docs]: https://www.npmjs.com/package/js-beautify#css--html
