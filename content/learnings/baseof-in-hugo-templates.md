---
title: BASEOF in Hugo templating
summary: Much like Ruby's elegant :yield construct
tags:  [Hugo, Command Line]
date:  2019-06-25T22:55:29-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Hugo allows you to define a single, confusingly named master ["baseof" 
template][docs] which site templates can override or populate portions of, a
feature Hugo calls blocks. This is incredibly useful, and should be
required in every modern web templating framework.

Today, I rewrite my simple hugo theme used on this site to use baseof,
in order to embed the most recent Git SHA of the content in a meta tag.

Before Rails, certain paradigms of web templating were difficult because
it was often necessary to calculate some piece of data at the end of a
list in the middle of the page, say, which would then need to be
included at the top of the DOM which had already been calculated by some
previous, upstream component.

If you've written Rails view code, or used Blade templating with PHP /
Laravel, then you already know this concept: Ruby + Rails introduced it
first, which wasn't surprisingly given Ruby's deep love of blocks,
procs, and lambda (anonymous functions). It's a huge win, and once you
start working with blocks and yields, you'll wonder how you ever lived
without them.

I'd be surprised if any respectable web templating solution **didn't**
support some form of out-of-order, `:yield`-like feature.  ([Blade
templates][blade] in PHP use the term blocks and sections)

Learn more about blocks in Ruby:

* [Introducing Blocks](http://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/18-blocks/lessons/51-new-lesson)
* [Everything you need to know about blocks in Ruby](https://hackernoon.com/everything-you-need-to-know-about-blocks-in-ruby-2ad99352f855)
* [Mastering Ruby blocks in five minutes](https://mixandgo.com/learn/mastering-ruby-blocks-in-less-than-5-minutes)

[docs]: https://gohugo.io/templates/base/
[blade]: https://laravel.com/docs/5.8/blade#template-inheritance
