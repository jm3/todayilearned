---
title: Vue's magical key mapping
summary: ...from 'CamelCase' to 'kebab-case' in bind object expressions
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-25

---

Due to JS limitations (i.e., keys need to be valid JS identifiers, ie.
unambiguous barewords or quoted strings), so you can’t use "kebab case" on
the left hand side of a bind object expression; it owuld look to the
browser's JS parser like string subtraction (`hummus-peppers`). So, Vue
helpfully and silently accepts camelCase keys instead, and then
evaluates them to dash-case syntax for you (ie: `fontSize` will become
`font-size`). Cool but **magical**.

[Read more][issue]

[issue]: https://github.com/vuejs/vue/issues/4184
