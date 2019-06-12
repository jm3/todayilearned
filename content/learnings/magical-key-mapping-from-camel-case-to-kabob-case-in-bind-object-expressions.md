---
title: Magical key mapping from camel case to kabob case in bind object expressions
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-25
draft: false

---
Due to JS limitations on unquoted object keys, you can’t use kebab case on the left hand side of bind object expressions, so
camelCase will be evaluated to dash-case syntax (ie: fontSize to font-size). WEIRD

