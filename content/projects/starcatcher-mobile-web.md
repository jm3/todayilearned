---
title: "Starcatcher for Mobile"
description: "Harvesting the bright stars (of Twitter) before they burn out forever"
summary: ⚰️  The mobile twitter archiving client to be buried with
notes: Mobile-first design, media/mobile breakpoints, and Vue.js reactivity
tags: [ CSS3, HTML5, Mobile, Vue.js, Full Stack, Testing ]

# weight: 4

---

Starcatcher is a personal full-stack web app built on Rails, Postgres,
and the Twitter API to harvest my favorite posts, the ones I'll take
with me to my grave laser etched on a block of rare-earth iridium.

I built it as a hobby skill-sharpening project to practice Rails,
12-Factor apps, test-driven development, and to scratch a personal itch
in the wake of The Death of Favstar (long live Favstar).

Favstar has a schizophrenic role for me:

On one hand, it was used by a lot of normie twitter celebrities to track
clout and be cheesy. The weird twitter edgelords I follow used to mock
this Favstar.

Being a popular Twitter API app with a non-trivial flow of web traffic,
it was also of interest to my last startup, 140 Proof, because our
social data API helped Twitter app developers make money by serving
targeted ads to their free, non-paying users. I once reached out to Tim,
Favstar's creator about using our API, but it went laughably wrong when
he decided that our API wasn't for him, and he wanted nothing to do with
us at first. Later he offered to sell the domain and business when
traffic declined.

Finally, regardless of the above two niche perspectives, Favstar was
simply a very useful archiver of top posts.

Despite these values, there's no accounting for personal taste, and the
pure crowd-ranked algorithm that Favstar used (counting which tweets had the
most favorites + retweets) never corresponded  to my own favorite posts.
Over my long tenure on twitter (lol), I've followed and laughed at
hundreds if not thousands of ridiculous posts and accounts, and to me,
the best of those posts have a lot of meaning, nostalgia, and humor
value in them.

Twitter's own search is functionally adequate but constrained in many
ways, and the previous free alternative to Twitter's own search, Topsy,
was acquired by Apple and summarily executed on the battlefield, cutting
off my last avenue for searching and bookmarking favorite posts.

The imperfectly named STARCATCHER is the antidote to all this. It runs
nightly, sweeping up the new favorites I've squirreled away in my
private favoriting account, and indexes them safely in a non-Twitter
database for recall and searchability. It even sends daily rediscovery
emails, not for spaced repetition, but just because it's funny as hell.
