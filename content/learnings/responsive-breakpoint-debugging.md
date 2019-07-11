---
title: debugging responsive breakpoints in the browser
summary: using media queries and some clever but simple CSS
tags:  [ CSS3, HTML5, Debugging ]
date:  2019-07-11T16:23:37-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering
draft: true

---
     ____  ____      _    _____ _____
    |  _ \|  _ \    / \  |  ___|_   _|
    | | | | |_) |  / _ \ | |_    | |
    | |_| |  _ <  / ___ \|  _|   | |
    |____/|_| \_\/_/   \_\_|     |_|

using the [live-resizing trick][css-block] from [Pomo][pomo]

{{< highlight css >}}
@media (min-width:20em) and (max-width:30em) {
  body::before {
    background-color: blue;
    content: "20 - 30em";
  }
}

@media (min-width:30em) and (max-width:40em) {
  body::before {
    background-color: green;
    content: "30 - 40em";
  }
}


@media (min-width:40em) and (max-width:50em) {
  body::before {
    background-color: orange;
    content: "40 - 50em";
  }
}

@media (min-width:50em) and (max-width:60em) {
  body::before {
    background-color: purple;
    content: "50 - 60em";
  }
}

@media (min-width:60em) {
  body::before {
    background-color: coral;
    content: "60em +";
  }
}

body::before {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6em 1em;
  font-size: 1.5rem;
  color: white;
  opacity: 0.8;
}
{{< / highlight >}}

[css-block]: https://github.com/jm3/pomo/blob/master/assets/layout.scss#L10-L54
[pomo]: /projects/pomodoro/