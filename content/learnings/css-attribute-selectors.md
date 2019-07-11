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


# Attribute presence & value selectors

## [...] → attribute "presence"

_(attribute exists, may be boolean or have any value)_

`[class]` matches elements with a `class` attribute, empty or not

## [attr='val'] → EXACT attribute VALUE
[class='btn-label'] matches elements with a `class` attribute exactly equal to `btn-label`

## [attr$="-val-suffix"] → attribute VALUE ends with 
`[href$=".pdf"]` matches elements with an `href` whose value **ends** in `.pdf`

## [attr~=val] → attribute VALUE containing word
`[class~=discipline]` matches elements with `attr`, but only if `val` is one of a space-separated list of words contained in attr's value. Even adjoining puncutation will invalidate this, ie. "harsh discipline, no reprieve" would not match. 









<!-- unused reference links -->

[moz-intro]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors
[w3s]: https://www.w3schools.com/css/css_attribute_selectors.asp
[w3s-all-selectors]: https://www.w3schools.com/cssref/css_selectors.asp
[treehouse-substr-selectors]: https://blog.teamtreehouse.com/css3-substring-matching-attribute-selectors

