---
title: npx envinfo
summary: dump your npm environment
tags:  [ Javascript, Command Line, Debugging ]
date:  2019-06-29T21:00:39-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Very handy for debugging

{{< highlight text >}}
npx envinfo --binaries --languages --system --utilities

System:
  OS: macOS 10.14.5
  CPU: (8) x64 Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz
  Memory: 363.59 MB / 16.00 GB
  Shell: 5.3 - /bin/zsh
Binaries:
  Node: 12.6.0 - /usr/local/bin/node
  Yarn: 1.9.4 - /usr/local/bin/yarn
  npm: 6.9.0 - /usr/local/bin/npm
Utilities:
  Make: 3.81 - /usr/bin/make
  GCC: 10.14. - /usr/bin/gcc
  Git: 2.22.0 - /usr/local/bin/git
Languages:
  Bash: 3.2.57 - /bin/bash
  Go: 1.12.7 - /usr/local/bin/go
  Elixir: 1.9.0 - /usr/local/bin/elixir
  Java: javac 10 - /usr/bin/javac
  Perl: 5.30.0 - /usr/local/bin/perl
  PHP: 7.1.23 - /usr/bin/php
  Python: 2.7.16 - /usr/local/bin/python
  Ruby: 2.5.0 - /Users/jm3/.rubies/ruby-2.5.0/bin/ruby
{{< / highlight >}}
    
