---
title: Stylelint
date: 2019-06-11
tags: [css3, command line, tools]
summary: A mighty, modern linter helping you avoid errors and enforce style conventions.

---

For decades (literally, since [1978][c]), programmers have used static
analyzers called linters to find and fix stylistic and formatting errors
in code. For many years, CSS was without tools like this, and knowing
the intriciacies of cross-browser compatibility was a sort of ancestral
lore, proven in the wild and stored in the dome. But now, since 2014,
CSS has its own full-featured linter, [Stylelint][s], that not only
finds and fixes formatting errors, but with an extensible set of
plugins, can also fix and flag all sorts of other errors.

See also: [HTMLhint][crosslink] (not lint)

Here's my  config (synced + backed up with [Mackup](https://github.com/lra/mackup), of course):

{{< gist jm3 32d5a7a52c96cb932bdc114565759fd3 >}}

[c]: http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.56.1841
[s]: https://github.com/stylelint/stylelint
[crosslink]: /learnings/find-markup-errors-with-html-hint/
