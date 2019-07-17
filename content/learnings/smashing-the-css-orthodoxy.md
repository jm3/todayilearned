---
title: Smashing the Sacred Tenets of CSS
summary: It's time for a new religion around CSS
tags:  [ CSS3, Code ]
date:  2019-07-17T08:00:24-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering
needs-work: draw some simple illustrations to break this up. summarize? ran out of gas, edit

---

Tailwind CSS is Adam Watham (of Refactoring UI)'s new utility CSS
framework, a CSS toolkit that takes an heterodox approach to web styling.
I've been curious to learn it because like many web developers, I've had
it with CSS.

> After 20 years of being told by CSS scolds that "we were doing it
wrong," this brash new approach is like a breakfast of Red Bull and
cigarettes after a silent meditation retreat.

To unpack that sentence, we need to review CSS orthodoxy. The sacred
tenets of CSS are:

## Sacred CSS Tenet Zero: Bundle Styles Together Into Rules

## Sacred CSS Tenet One: Separate Content from Presentation (Avoid Inline Styles)

So that viewers can theoretically override page author styles (in
practice this rarely happens), and so that page authors can re-use
styles across screens and scenarios, styles should be defined
separately from page content, stored in external CSS files. After an
initial flourishing of in-page styling, it's now de rigueur to isolate
styles from content.

## Sacred CSS Tenet Two: Cascade Styles Hierarchically

To promote maximum code re-use (i.e. to minimize the amount of code
written), page styles should be defined hierarchically so that general
base styles are defined and then progressively overridden and modified
if necessary by more specific styles. This is called "the Cascade", as
specific styles override more general styles, and is what the C in CSS
stands for.

## Sacred CSS Tenet Three: Semantic Class Names \> Descriptive Styles

It has long been (baffling) orthodoxy among the rangy federation of CSS
oracles that a style that makes a font be bold should not be called
"bold", because that's a visual descriptor, but rather "strong," because
"strong" is conceptually correct but visually neutral. 

This somewhat unintuitive idea, that universally understood concepts
like "italic text" or "bold text" must be referred to only by coy
codewords like "strong" and "emphasis", does make limited sense in some
less common or more theoretical contexts, e.g. a futuristic world of VR
headsets and voice interfaces (think Siri) where web page markup is not
interpreted by a visual browser but rather is heard (by a screen reader
for the blind or by a voice interface like Siri), or in some other
non-textual way. That exception excepted, today (and for LITERALLY THE
ENTIRE HISTORY OF THE WEB), the overwhelming majority of users
experience web pages by reading them with their eyes. While the CSS
community's dogged, noble predilection to advocate for universal
accessibility, perversely, the interplay between a desire for a grand,
universally future-proofed web has often manifested in confusing,
unintuitive principles like, "bold text should not be called bold", and
"a blue box should not be called blue". This makes for even
harder-to-maintain styling code

CSS also has some perilous pitfalls, chief among them

## CSS Pitfall 1: Too Many Ways to Match Styles with Content 

### Selector flexibility is great but impedes clarity

Extremely flexible but manifold ways of matching defined classes to page
markup (these matchers are called "selectors). Selectors can match by
HTML element name, by HTML document tree depth, by parent and sibling
context, by unique arbitrary ID name, by reusable class name, and more.
Any of these are valid ways to match styles to markup and they can be
combined, multiplying the complexity combinatorially. To manage this,
large web organizations have adopted special formal naming systems like
BEM and OOCSS and SMACCSS to attempt to bring order to an inherently
disorderly system.

## CSS Pitfall 2: Baffling Cascade Ordering

### Baroque and confusing precedence rules 

These rules determine which selectors override which in, what order,
called "precedence."

## CSS Pitfall 3: Layout Solution Vacuum

### No (historical) way to place elements within a flexible page grid

An embarrassing lack of usable layout technology, i.e. any way of
placing elements within a flexible page grid. After 20 years, it's
finally the save that CSS Grid and Flexbox have landed, but anyone
working on the web is faced with supporting or migrating old pages laid
out before these new technologies existed, and have to contend with a
world full of users many of whom don't run the latest browsers (though
this has improved dramatically in the last 5-10 years).

To this set of challenges, popular CSS frameworks like Bootstrap add
their own twist. To save time for busy and overwhelmed from-end
developers, these frameworks offer cookbooks of styling solutions to common
web development problems, e.g. defining a flexible page layout or
styling buttons. These take the form of large, internally complex sets
of "components" which work together. Rather than individual styles or
small building blocks, these are like complete toys, each with their own
instructions and safety warnings.

These frameworks arguably succeed in their goal of saving initial
style authoring time — "we can make buttons look like buttons quickly
now, yay!" but they offer a nasty surprise of compounding difficulty
as the project matures when page authors try to follow the second sacred tenet
of CSS (Cascading, Hierarchical Styles) and try to customize or override
the framework components' styling with site-specific styles, say to
reflect a brand's unique look. Now developers are fighting a two-front
war against the framework's opaque decisions **and** CSS Pitfall #2:
**The Baffling Cascade**.

## The Endless War

This is a situation where nobody wins. Into this internecine conflict
comes [Tailwind CSS][tailwind] and the concepts of "Atomic" CSS and "Utility" CSS.
These approaches and the newer CSS frameworks embodying them - Tachyons,
BassCSS, Tailwind — fly dramatically in the face of CSS orthodoxy,
thumbing their nose at the sacred tenets of the CSS priesthood:

## Smashing the Sacred Tenets

Instead of separating styling from markup, these frameworks embed small,
single-purpose classes directly in the HTML, in direct violation of The
First Sacred Tenet of CSS.

Instead of "semantic" (or conceptual) class names like "brand-emphasis"
or "sub-tier-3", they brazenly encoding intuitive styling information
directly in class names like "font-blue" or "margin-10".

After 20 years of being told by CSS scolds that "we were doing it
wrong," this brash new approach is like a breakfast of Red Bull and
cigarettes after a silent meditation retreat.

Why is it OK to violate these sacred tenets now? I think because web
developers and designers have had enough. CSS as defined and evangelized
by a cloistered priesthood has not met the needs of the web development
community. It's not a programming language, yet it's more complicated
than one, and it doesn't come close to meeting the goals or expectation
of most developers. It's clearly time for a new approach.

## Content Markup vs. Template Markup

I'll give a simple example: as the web has evolved, blogs and blog-like
things (social media feeds, news article sites) have defined the
majority of web page building and content wrangling. While there are
many interesting edge-cases for for non-page-based, non-textual web
interfaces, e.g. web games, browser-based multimedia tools like audio
editors, video players, etc. — it remains the case that the web was
defined for interlinked, textual content interspersed with images and
multimedia, and that's what most sites consist of. In this world, for
nearly 20 years, in all scalable web teams and companies, it is the
standard that the **content** of web properties is managed separately
from the code and styling. Content for blogs, articles, social media
posts, forums, etc. is stored in a database, and the templates are
stored separately. Let's be painfully clear: this is not a new approach.
This was professional web developer "standard operating procedure" 15
years ago (I'm  writing this in 2019.) The modern approach for storing
web content is to use a lightweight wiki markup dialect like Markdown
with some formatting commands that suffice for 95% of document markup
needs. These wiki markup commands get auto-converted to consistent
styling classes at site generation time.

This means that while _content creators_ spend their time writing and
marking up web page content, _web developers_ spend their time building
and styling web page **templates**, which are re-used widely and stored
in a version control system like Git. The fundamental difference between
these two styling processes means that web developers treat the two sets
of markup vastly differently, yet CSS and HTML makes no distinction
between styling content HTML (from Markdown) and styling template HTML
(hand-written or generated by a back-end framework like Rails).

Clearly we don't want content creators embedding inline CSS and HTML markup in their articles and posts because it doesn't scale:

1. they're not web developers so they shouldn't need to know how CSS and HTML work in order to write posts, 
2. they're not web developers so they can't be trusted to write secure, maintainable code

That means that inline styles should be verboten within managed content.

But it doesn't say anything about inline styles and template markup.

## Why the Tenets of CSS Are Broken and Out of Date

Given this, it's easy to see how the Sacred Tenets of CSS are
incomplete, because page markup will be duplicated thousands or millions
of times in a large, content-heavy website, while template styles will
not. By comparison, styling for carefully made re-usable templates is
more one-off because the re-usability is baked into the template at the
back-end framework level. The underlying reason for the Sacred CSS Tenet
of Avoiding Inline Styles dates back to a time before CMS to manage our
content were free and widely available, making content-style separation
a bigger problem back then. Inline styles appearing in **template
markup** are less burdensome because they might appear only once or
twice, and may offer a great benefit if they allow the page stylist to
sidestep CSS Pitfalls Two and Three that deal with how styles are
matched to markup. This is the appeal of so-called Atomic CSS: small
(hence atomic), utility classes embedded inline, matched to style
definition by class-name only, thus avoiding selector complexity and
precedence wrangling.

The Atomic or Utility (-First) CSS frameworks take a classes-only
approach to styling, so that no cascade is used and no selector
precedence need to calculated. This magical insulation from some of the
slipperiest snake-pits of CSS is their main attraction.

[rails]: https://guides.rubyonrails.org/getting_started.html#what-is-rails-questionmark
