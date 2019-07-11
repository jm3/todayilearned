---
title: Attribute / Value Selectors in CSS
summary: \*
tags:  [ CSS3 ]
date:  2019-07-11T13:54:42-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering
draft: true

---
     ____  ____      _    _____ _____
    |  _ \|  _ \    / \  |  ___|_   _|
    | | | | |_) |  / _ \ | |_    | |
    | |_| |  _ <  / ___ \|  _|   | |
    |____/|_| \_\/_/   \_\_|     |_|


# Presence & value attribute selectors

## [...] → attribute "presence"

_(attribute exists, may be boolean or have any value)_

`[class]` matches all elements with a `class` attribute, empty or not

## [attr='val'] → exact attribute value
[class='btn-label'] matches elements with a `class` attribute exactly equal to `btn-label`

## [attr$="-val-suffix"] → attribute value tail 
`[href$=".pdf"]` matches elements with an `href` whose value **ends** in `.pdf`

## [attr~=val]: This selector will select all elements with the attribute attr, but only if  val is one of a space-separated list of words contained in attr's value.  → enumated funky









<!-- unused reference links -->

[moz-intro]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors
[w3s]: https://www.w3schools.com/css/css_attribute_selectors.asp
[w3s-all-selectors]: https://www.w3schools.com/cssref/css_selectors.asp
[treehouse-substr-selectors]: https://blog.teamtreehouse.com/css3-substring-matching-attribute-selectors

