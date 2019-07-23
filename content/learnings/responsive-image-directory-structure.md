---
title: Responsive Image Directory Structure
summary: Or, why my images are not in "img"
tags:  [ CSS3, Command Line, Images, Command Line, Responsive ]
date:  2019-07-11T14:58:24-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

My first version of a responsive image directory structure looks like
the following. I used this structure because I wanted to keep
non-responsive image assets, like UI chrome images, separate from the
batch-processed, responsive fan-out image assets. BUT! It turns out that
I have so few non-responsive, non-"art" images that I don't know if all
this was worth it.

The reason for the unusual "art" image folder name, vs. the more common
"img/" or "images/" is that it seemed more clean to keep my high-res
web-ready responsive original images completely out of the webserver's
purview, in a higher level directory, hence they are not in static/ or a
subdirectory thereof.

Instead, gulp processes the root-level `art/` directory and saves its
derivative images into `static/art`, which is git-ignored, since the
CI-deployment bastion host will re-build all the images from source at
deploy time.

# Pre-fan-out, before `gulp-responsive` runs:

## hi-res originals, versioned in git, not available to hugo webserver

    art
    ├── mies-plano-winter.jpg
    ├── mr-div-neon-landscape-vaporwave.jpg
    └── vaporwave-firefox.jpg

# `gulp-responsive` outputs its variation images here:

## responsively-sized, git-ignored, available to hugo webserver in dev

    static/art
    ├── mies-plano-winter-1000.jpg
    ├── mies-plano-winter-1200.jpg
    ├── mies-plano-winter-1600.jpg
    ├── mies-plano-winter-600.jpg
    ├── mies-plano-winter-800.jpg
    ├── mr-div-neon-landscape-vaporwave-1000.jpg
    ├── mr-div-neon-landscape-vaporwave-1200.jpg
    ├── mr-div-neon-landscape-vaporwave-1600.jpg
    ├── mr-div-neon-landscape-vaporwave-600.jpg
    ├── mr-div-neon-landscape-vaporwave-800.jpg
    ├── vaporwave-firefox-1000.jpg
    ├── vaporwave-firefox-1200.jpg
    ├── vaporwave-firefox-1600.jpg
    ├── vaporwave-firefox-600.jpg
    └── vaporwave-firefox-800.jpg

