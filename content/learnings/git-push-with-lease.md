---
title: When it's safe to Git Force Push with Rebase
summary: git push --force-with-lease
tags:  [ Command Line ]
date:  2019-07-18T15:04:39-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

When you've rebased a branch over master and are ready to push your work
back, you can either close your eyes, force-push, and hope you're not
destroying a collaborator's commits, or, you have another option:

{{< highlight css >}}
git push --force-with-lease
{{< / highlight >}} 

Props to [David Tran][src] and Atlassian for cluing me into this!

[src]: https://davidtranscend.com/blog/git-push-rejected-after-rebase/

