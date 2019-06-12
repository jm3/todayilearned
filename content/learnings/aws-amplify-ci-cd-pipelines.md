---
title: AWS Amplify for CI/CD pipelines
tags:  [command line, tools]
goal:  Front-End Engineering
date:  2019-06-08
draft: false

---

Dockerized one button deploy pipeline to SSL'd static site hosted on Amazon's cloud.
This site is deployed and built for production using AWS Amplify.

I had to do one mild customization of the build scrip to use the latest verison of Hugo, which looks like this:

{{< highlight yaml "hl_lines=6-10" >}}
version: 0.1
frontend:
  phases:
    build:
      commands:
        - wget https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_0.55.6_Linux-64bit.tar.gz
        - tar -xf hugo_0.55.6_Linux-64bit.tar.gz
        - mv hugo /usr/bin/hugo
        - rm -rf hugo_0.55.6_Linux-64bit.tar.gz
        - hugo version
        - hugo
  artifacts:
    baseDirectory: public
    files:
      - '**/*'
  cache:
    paths: []

{{< / highlight >}}

[a]: https://aws.amazon.com/amplify/
