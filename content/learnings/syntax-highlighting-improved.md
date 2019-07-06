---
title: Syntax Highlighting
summary: Drastically improved
tags:  [ code, CSS3, Color, Debugging, Hugo ]
date:  2019-07-05T23:13:30-07:00
images: [/img/todayilearned.jm3.net.png, /art/syntax-merge-1000.png]
goal:  Front-End Engineering
categories: code

---

{{< img src="/art/syntax-merge" type="png"
  caption="slippery merge" >}}

I removed the goofy generated syntax-highlighting classes that weren't
working anyways (because `pygmentsUseClasses` wasn't set in Hugo's
config.toml), and instead switch to on-the-fly generated inline styles,
which can be switched without eh extra steps of rebuilding the syntax
css and checking it in.

Now the syntax highlighting on this blog is better than the syntax
highlighting on the official [Hugo Discourse forum][forum]!

[forum]: https://discourse.gohugo.io/t/list-all-the-categories-used-in-the-blog/10211
