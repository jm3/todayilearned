---
title: Find security vulnerabilities in libraries with Lighthouse + SNYK
tags:  ["Hugo", "Command Line"]
goal:  Front-End Engineering
date:  
draft: false

---

You could probably also use use [Fossa][f] or [Kenna][k], but those will require a
lot more registration + setup than just opening Chrome Inspector, which
has [Snyk][s] built in. That's how I found today's security hole in an
older version of jQuery used by a Hugo theme.

[f]: https://fossa.com/vulnerability-scanning/
[k]: https://www.kennasecurity.com/
[s]: https://snyk.io/vuln/npm:jquery?lh=3.2.1
