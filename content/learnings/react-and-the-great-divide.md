---
title: "React, Javascript, and 'The Great Divide'"
summary: Between the front of the front end and the back of the front end
tags:  [ Javascript, Vue.js, React, Lore ]
date:  2019-07-17T16:05:43-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

This week [@buzz][Buzz] shared a great article about the state of
front-end web development called "[Front-End Design, React, and a Bridge
over the Great Divide][via-buzz]", which in turns references some more great
writing on the topic:

* [The Great Divide][great-divide] by Chris Coyier (creator of the
  public code sandbox site [CodePen][codepen])
* [My struggle to learn React][struggle] by Brad Frost
  (author of Atomic Design and Pattern Lab)'s
* [Why Did I Have Difficulty Learning React?][snook] by Jonathan Snook,
  which includes the amazing sentence, "The rings and knots of The Old
  Ways are made visible under the light of debugging."

These posts give voice to several tectonic fissures that have opened up
in front-end development, among them (my labels):

## ONE: Pervasive BigCo-ification, or: _"What's good for Facebook is good for the web"_

That is, the increasing dominance of the solutions from gigantic web
teams (FB, GOOG, etc) being pushed as solutions to everyone's web
problems.

## TWO: CREEEPING Javascriptism, or: _"There Can Be Only Javascript"_

This is the de-emphasis and de-platforming of CSS + HTML as the lingua
franca of the web (which they are), in favor of the primacy of
Javascript, all the time, everywhere, for everything.

The collision of these two trends is creating a baffling world for
accomplished front-end developers and designers who have woken up and
found they no longer recognize their own previously familiar worlds.
Suddenly they seem to work only on the "front of the front end" as more
application-style programmers who want everything to be Node or React or
Gulp or whatever replace entire portions of the stack with pure, that
may not even run directly in modern browsers without the additional step
of transpilation.

[Snook][snook] expresses some heroic vulnerability by admitting that,

> "It was difficult to come in thinking I was a senior developer and
instead feeling like a junior."

Wow. Honesty! So rare, so refreshing. This stuff is complicated. It
seems clear beyond being obvious that Javascript is far from a perfect
language, and that Javascript's subsuming of the adjacent territory of
web development is happening not because of the great superiority of
Javascipt to mark up documents, or templates, or style them, but simply
because between Javascript, CSS, and HTML, only Javascript is actually a
programming language (barely) with the ability to subsume anything.

As a front-end developer and full-stack-y person who is also old af,
I've lived this transition before, more than once, to be honest.

It happened around the millennium when the amateur web of documents was
subsumed by the influx of Java programmers writing server-side Java to
build what at the time were called "three-tier" (MVC) or "enterprise"
web apps with application server frameworks. As the Dot Com Boom became
the Dot Bomb, one thing that continued up and to the right was that the
role of the front end developer, previously enshrined in the powerful
title of "WebMaster" (#wow), was rapidly and irreversibly demoted to a
sort of subservient, attendant role to the "real" development work of
scaling databases and juggling authentication tokens and other critical
back-end tasks. Web development, which was now called front-end
development, was now something barely better than "graphic design," but
clearly adjacent to code.

This happened again on a smaller scale in a second wave in The Rails
Age, with the advent of meta-languages like RJS and Coffeescript which
aimed to replace the role of the front end developer with a small
function performed by the back-end developer. Now a single Ruby
developer could and might aim to preside over both the front- and
back-end of the entire web app by driving everything via Rails.
Of course, a seemingly magnanimous gesture was often made that front-end
developers were welcome to contribute, they simply needed to learn ruby,
RJS, bundler, Rails, ERB, the correct role of models, views, and
controllers, and then they were welcome to contribute code. This
high-handed approach meant that many front-end developers were
effectively shut out of the dev cycle. Notably, this did not
particularly occur in the world of PHP, which was always perhaps a more
rough and ready, inclusive, duct-tape melting pot, unlike the Ruby Tower
of Rails.

Let's let small stay small, when that's what's called for. Let's allow CSS and
HTML and JS to coexist.

[buzz]: https://www.twitter.com/buzz
[codepen]: https://codepen.io/jm3
[snook]: https://snook.ca/archives/javascript/difficulty-with-react
[via-buzz]: http://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/
[great-divide]: https://css-tricks.com/the-great-divide/
[struggle]: http://bradfrost.com/blog/post/my-struggle-to-learn-react/

[brad-gif]: http://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif
