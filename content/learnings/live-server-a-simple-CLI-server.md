---
title: "Live Server: a Simple CLI Server"
summary: npm i -g live-server; live-server public
tags:  [ Command Line, Javascript, Bundling ]
date:  2019-07-17T07:52:38-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

A simple alternative to BrowserSync for development: the npm package [Live Server][npm].

{{< highlight sh >}}
# to install locally to the project:
npm i -D live-server

# or, to install globally:
# npm install -g live-server

# then just point it at your web directory
live-server public

# to use a different port, 
# say if another service or project is already running on port 8080
live-server --port=8081 public
{{< / highlight >}}

[npm]: https://www.npmjs.com/package/live-server
