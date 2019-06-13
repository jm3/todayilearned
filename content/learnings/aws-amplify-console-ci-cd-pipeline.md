---
title: AWS Amplify Console for CI/CD pipelines
tags:  [command line, tools]
goal:  Front-End Engineering
date:  2019-06-08
summary: glue that unifies the AWS service zoo to works for front-end devs

---

[AWS Amplify](js) is a Javascript library. But [AWS Amplify CONSOLE][a] is mostly
free docker-ized, one button deploy pipeline tool that will listen for
git commits and then fire off Docker-ized builds of your app, build and
deploy your app to an s3 bucket, and set up the Cloudfront CDN and SSL
certificates for you, automatically, saving several annoying AWS
configuration steps.

I had to do one mild customization of the build script to use the latest
version of Hugo, which looks like this:

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

I ❤️  it. This site is deployed and built for production using AWS
Amplify Console. The tool even screenshots your app using headless
Chrome in a number of different mobile-device-screen-sized browser
configurations to give you a quick visual preview of how your deployed
app looks at different screen sizes.

![mobile screenshot][ms]

[a]:  https://aws.amazon.com/amplify/
[js]: https://aws-amplify.github.io/
[ms]: /img/aws-amplify-console-mobile-preview.png 
