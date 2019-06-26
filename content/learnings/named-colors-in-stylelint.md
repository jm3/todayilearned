---
title: Named colors in Stylelint
summary: '"always where possible"'
tags:  [ CSS3, Color, Command line ]
date:  2019-06-23
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Today I learned you can configure your Stylelint config to whine
whenever it sees hex colors in your stylesheets that could instead be
represented as one of the [148][color-history] official CSS color keywords + aliases
(**PapayaWhip, LemonChiffon, DarkSlateGray, WhiteSmoke,** etc.).

Why would you want this? IMHO because these colors are much easier to
remember and sight-read than hex values. Which is simpler:
**DodgerBlue** or `#1E90FF`?

THE PROSECUTION RESTS. [Learn more][docs].

[docs]: https://stylelint.io/user-guide/rules/color-named/
[color-history]: /learnings/evolution-of-color-in-css/
