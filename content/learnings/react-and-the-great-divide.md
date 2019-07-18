---
title: "React, Javascript, and 'The Great Divide'"
summary: Between the front of the front end and the back of the front end
tags:  [ Javascript, Vue.js, React, Lore ]
date:  2019-07-17T16:05:43-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Today [@buzz][buzz] shared a great article on Twitter called
"[Front-End Design, React, and a Bridge over the Great
Divide][via-buzz]", which in turns references some great, highly-related
articles:

* [The Great Divide][great-divide] by Chris Coyier (creator of the 
  public code sandbox site [CodePen][codepen])
* [My struggle to learn React][mein-kampf] by Brad Frost 
  (author of Atomic Design and Pattern Lab)'s 
* "[Why Did I Have Difficulty Learning React?][snook]" by Jonathan Snook,
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
Gulp or whatever replace entire portions of the stacks with pure,
future-fucked (my term for the opposite of future-proofed, where
developers deliberately write code that DOES NOT WORK in current
browsers, then pass it through an additional compiler (transpiler) to
output second-order code that will run.

[Snook][snook] expresses some heroic vulnerability by admitting that,

> "It was difficult to come in thinking I was a senior developer and
instead feeling like a junior."

Wow. Honesty! So rare, so refreshing. This stuff is complicated. It
seems clear beyond being obvious that Javascript is far from a perfect
language, and that its subsuming all adjacent territory of web
development not for its own superiority, but simply because between
Javascript, CSS, and HTML, only Javascript is a programming language
(barely) with the ability to subsume anything else.

I have a lot of thoughts and feelings about this but they aren't
organized yet. I'll keep learning and we'll see what evolves here.

[buzz]: https://www.twitter.com/buzz
[codepen]: https://codepen.io/jm3
[snook]: https://snook.ca/archives/javascript/difficulty-with-react
[via-buzz]: http://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/
[great-divide]: https://css-tricks.com/the-great-divide/
[mein-kampf]: http://bradfrost.com/blog/post/my-struggle-to-learn-react/

[brad-gif]: http://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif
