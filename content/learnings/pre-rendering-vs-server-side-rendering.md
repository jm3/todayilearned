---
title: Pre-Rendering vs. Server-side Rendering
tags:  ["Javascript"]
goal:  Front-End Engineering
date:  2019-05-16
summary: What's the difference?

---

Pre-rendering - generating static files for SEO and OpenGraph share
previews;  usually requires a **serving proxy** to translate clean URLs
to single-page hashbang client-side URLs.

Server-side rendering (SSR), on the other hand, is full
[isomorphism][iso]; same code running in client and server. [Nuxt][nuxt]
is for server-side rendering.

Read more about [pre-rendering vs. server-side rendering][mo].

[mo]: https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering
[nuxt]: /learnings/nuxt-js
[iso]: https://en.wikipedia.org/wiki/Isomorphic_JavaScript
