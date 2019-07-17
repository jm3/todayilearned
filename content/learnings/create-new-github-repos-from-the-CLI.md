---
title: Create New Github Repos from the CLI
summary: Using the Hub helper tool
tags:  [ Command Line ]
date:  2019-07-17T07:34:32-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Today I learned you can use GitHub's command-line helper [Hub][hub] to
create new GitHub respositories purely on the command line, without
visiting github.com in a browser and using the web flow:

{{< highlight sh >}}
# new project name will be taken implicitly from the $CWD
hub create -d "some cool new project" 
{{< / highlight >}}

Love it!

[hub]: https://hub.github.com/
