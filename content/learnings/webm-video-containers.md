---
title: WebM video containers
tags:  [Flinto, tools]
goal:  Front-End Engineering
date:  2019-04-18
draft: false

---

WebM is a video container format sponsored by Google.

* It's based on the open source [Matroska][m] container format
* It supported VP8 video and Vorbis audio streams at launch
* It was updated in 2013 to support VP9 video and Opus audio

I don't know much more than that, other than I exported my first one today:

 <video width="600" height="600" controls autoplay>
  <source src="/mov/left-nav-loading-anim-50fps.webm" type="video/webm">
  Your browser does not support the video tag lol
</video> 

Embed a webm in HTML markup using a standard HTML5 `<video>` tag, like this:

```html
 <video width="600" height="600" controls autoplay>
  <source src="/mov/left-nav-loading-anim-50fps.webm" type="video/webm">
  Your browser does not support the video tag lol
</video> 
```

[m]: https://en.wikipedia.org/wiki/Matroska
