---
title: Stylelint on the command line
tags:  ["CSS3", "Command Line"]
goal:  Front-End Engineering
date:  2019-05-30
summary: Stylelint isn't just for editors.
draft: false

---

Stylelint, the pluggable stylesheet checker (and fixer), is often
integrated into an editor like Atom or Vim for convenience, via plugins
like Atom's [linter-stylelint][ls] or Vim's "[ALE](a)".

But you can also run it on a one-off basis on any stylesheets like this:

    # if npm-installed to the project, locally
    npx stylelint --fix geese.scss

    # if installed globally
    stylelint --fix beefin.scss

[ls]: https://atom.io/packages/linter-stylelint)
[a]: https://github.com/w0rp/ale
