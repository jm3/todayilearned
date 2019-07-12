---
title: REm Sizing for CSS Text
summary: "Ad Rem*: REM REM REM"
tags:  [ CSS3 ]
date:  2019-07-03T11:44:38-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

> \* Ad Rem: relevant or pertinent to the activity or topic at hand;
germane.

The "Em" as a unit of size in CSS text and boxes comes from an old
typoegraphic unit from the print days: the "em", which was the width of
a capital letter M in a given type face. 

This is no longer true — in the modern era of computers and CSS, an em
simply means "the font size number in px". It is not the width of a
capital M; see "[an Em is NOT as wide as an M][related]".) ) It's a
relative measurement, in that it changes depending on the typeface, and,
somewhat confusingly, it also **compounds** depending on the level of
parent nesting as the font size changes.

Example:

{{< highlight css >}}

div#small {
  font-size: 2em; 
}
div#big {
  font-size: 6em;
}
p {
  font-size: .5em; /* effective sizes: big: 3em, small: 1em */
}
span {
  font-size: 2em; /* effective sizes: big: 12em, small: 4em */
}
{{< / highlight >}}

Ems were initially interesting and then not so much because web layouts
grow tend to have deeply nested UI elements, wherein the compounding
property of Em sizing becomes confusing quickly.  It's a relative unit
whose value can change at any time! Not so useful.

## REm to the rescue:

Enter the REm: REm, or "Root Em" is a root-relative font-size, so that
if the default of your view root is 16px then 1 rem = 16px for all
elements. It's still relative to the current font, sort of, but it
doesn't compound or change with nesting. Easy!

[related]: /learnings/ems-are-not-as-wide-as-an-m/
