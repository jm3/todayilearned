---
title: Repeatable AWS Amplify Console Docker builds
summary: Download your amplify.yml and keep it updated as your build evolves
tags:  [ command-line, debugging ]
date:  2019-06-25T22:49:36-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Updated my amplify.yml and checked it into my project today because I've
been making some changes to my PostCSS config. Because the site now
needs a slightly different build command now to re-generate, the
Dockerfile on AWS Amplify Console needs to be updated correspondingly.
The easiest way to do this is to just download the Yaml build file, add
it to your project, and maintain it yourself, outside of AWS. That way,
when your package.json build steps change, you can just update
amplify.yml, check it in, and the build auto-updates.

🚀
