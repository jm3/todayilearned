---
title: Remove git submodules
summary: 
tags:  [ command-line ]
date:  2019-06-13
goal:  Front-End Engineering
summary: it's a lot easier than it used to be

---

Git submodules are great, except when they're not. Constantly keeping
two development flows in sync is annoying. To add insult to injurey,
previously removeing a submodule took about 4 steps. DON'T DO THIS:

https://gist.github.com/myusuf3/7f645819ded92bda6677

Now it takes one step: `git submodule deinit (-f)`. After that, you can commit, and remove the
submodule checkout if you like (or add it to your repo).

[Read more][docs]

[docs]: https://git-scm.com/docs/git-submodule#Documentation/git-submodule.txt-deinit-f--force--all--ltpathgt82308203

