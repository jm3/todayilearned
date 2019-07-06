---
title: Inline-ing SVG
summary: Save a network call and gain styling benefits
tags:  [ code, HTML5 ]
date:  2019-06-16
goal:  Front-End Engineering
categories: code

---

A quirk of how the DOM and img src attributes work is that SVGs
referenced using an `<img src=...>` cannot be later styled with CSS,
e.g. to add a fill color or a stroke. Only "inline" (inline to the page
DOM, i.e. embedded literally as XML with the HTML document) SVGs can be
styled in this way. So that's one advantage to inlining.

Another advantage of inlining is the lack of a separate network call to
fetch the SVG; it's already inline.

I created a Hugo [shortcode][docs] to auto-line SVG art from within a content
post. It looks like this:

{{< highlight go-html-template >}}
<figure>
{{ readFile (print "static/img/" (index .Params 0) ".svg") | safeHTML }}
</figure>
{{< / highlight >}}

[docs]: https://gohugo.io/content-management/shortcodes/
