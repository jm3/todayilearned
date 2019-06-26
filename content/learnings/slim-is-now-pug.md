---
title: "HTML: a new aesthetic"
summary: Or, Jade is now Slim is now Pug, which is basically Haml
tags:  [ HTML5, Javascript ]
date:  2019-06-26T13:29:57-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

HTML (and XML and XHTML) is an ugly grammar for marking up documents,
and for better or worse, it's the lingua franca of the web. The only
argument for a more primary language "of the web" would be JSON, which
sadly is much worse than HTML and even uglier, but that's a story for
another time.

The problem with HTML is in part its verbosity — too many angle brackets
and closing tags can trip people up and waste time typing.
The good news is that there's a better way: new grammars for writing
better-looking HTML with a minimum of angle brackets and unnecessary tags.

As a side benefit, these new pre-processor grammars for HTML like Haml
solve the "unclosed" or "crossed-closed" tags problem, where sometimes
tags would be closed out of orde,r or not closed at all, tangling the
markup and baffling the parser.\*

Ruby led the way in pushing for a cleaner, more elegant HTML syntax as
the server level, as a pre-processor so developers could write a simple
syntax that would compile down to browser-compatible HTML when rendered
by the app server. It was called [Haml][haml], and it was polarizing,
and yet also very good.

Ruby was first, but soon followed by the Java and Javascript
communities, as has often been the case, with Jade, which was forced to
be renamed to [Pug][pug] following a naming / copyright dispute. Apropos
of nothing, open source name conflicts can be funny and dramatic — who
can forget the [Kik/NPM/"left-pad"][npm] fiasco, or Octokit's [previous
project name][octopussy]?

{{< img src="/img/haml-screenshot" type="jpg" alt="" caption="Haml vs. a stock ERB Ruby template" >}}

\* in modern HTML5 markup, this is rarely an issue, but it used to be.

[haml]: http://haml.info/
[haml-screenshot]: /img/haml-screenshot.png
[npm]: https://medium.com/@kolorahl/kik-left-pad-and-npm-oh-my-e6f216a22766
[octopussy]: https://github.com/octokit/octokit.rb/issues/8
[pug]: https://github.com/pugjs/pug#rename-from-jade
[slim]: https://github.com/slim-template/slim

