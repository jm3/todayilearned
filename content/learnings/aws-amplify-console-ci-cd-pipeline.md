---
title: AWS Amplify Console for CI/CD pipelines
tags:  [code, command line, tools]
goal:  Front-End Engineering
date:  2019-06-08
summary: glue to unify the AWS service zoo for front-end devs
categories: code

---

[AWS Amplify](js) is a Javascript library. But [AWS Amplify CONSOLE][a] is mostly
free docker-ized, one button deploy pipeline tool that will listen for
git commits and then fire off Docker-ized builds of your app, build and
deploy your app to an s3 bucket, and set up the Cloudfront CDN and SSL
certificates for you, automatically, saving several annoying AWS
configuration steps.

I had to do one mild customization of the build script to use the latest
version of Hugo, which looks like this:

{{< highlight yaml "hl_lines=6-9" >}}
version: 0.1
frontend:
  phases:
    build:
      commands:
        - wget https://github.com/...hugo/releases/hugo-v0.55.6.tar.gz
        - tar -xf hugo_0.55.6_Linux-64bit.tar.gz
        - mv hugo /usr/bin/hugo
        - rm -rf hugo_0.55.6_Linux-64bit.tar.gz
        - hugo version
        - npm install
        - npx postcss --version
        - npm run resize-images
        - npx hugo --config config/hugo.toml
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

{{< img src="/art/aws-amplify-console-mobile-preview" type="png"
  caption="AWS Amplify - screenshot of builds" >}}

[a]:  https://aws.amazon.com/amplify/
[js]: https://aws-amplify.github.io/
