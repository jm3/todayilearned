---
title: A catalog of CSS Attribute / Value Selectors
summary: \*
tags:  [ CSS3, Code ]
date:  2019-07-12
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

CSS Attribute Value Selectors help you laser in on specific elements for
styling based on their attribute values.

## […] → Attribute exists

{{< highlight css >}}
/* matches elements with a foo attribute of any (or no) value */
[foo] {
  ...
}
{{< / highlight >}}

Attribute `foo` exists &mdash; it may be a value-less boolean (like "autoplay"), or have any value.

## = → Attribute value matches exactly
{{< highlight css >}}
/* matches elements with a data-dongle attribute of "rubidium" */
[data-dongle="rubidium"] {
  ...
}
{{< / highlight >}}

## ^= → Attribute value begins with …
{{< highlight css >}}
/* matches SVG images with a viewBox value beginning with "0 " */
svg[viewBox^="0 "] {
  ...
}
{{< / highlight >}}

Nerds who know Perl, [ruby](https://rubular.com/), PHP, or grep/unix will recoginze the `$` character that denotes an end of string / end of line.


## $= → Attribute value ends with …
{{< highlight css >}}
/* matches elements with an href whose value ends in .pdf */
[href$=".pdf"] {
  ...
}
{{< / highlight >}}

Nerds who know Perl, [ruby](https://rubular.com/), PHP, or grep/unix will recoginze the `$` character that denotes an end of string / end of line.

## ~= → Attribute value contains word …
{{< highlight css >}}
/* matches elements with a class list containing the WORD "discipline" */
[data-program~="discipline"] {
  ...
}
{{< / highlight >}}

The one will match elements with the attribute attr only if `val` is one of a space-separated list of words contained in attr's value. Note that even adjoining sentence style punctuation like commas will invalidate this, e.g. an element `<div data-program="harsh discipline, no reprieve">` would not match the above selector.

## *= → Attribute value contains substring …
{{< highlight css >}}
/* matches elements with a fill @attr containing the string "flood" ANYWHERE */
[fill*="flood"] {
  ...
}
{{< / highlight >}}

This matches elements with the attribute value containing the requested substring, whether it be at the beginning, middle, end, the entire string, etc.

<!-- unused reference links -->

[moz-intro]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors
[w3s]: https://www.w3schools.com/css/css_attribute_selectors.asp
[w3s-all-selectors]: https://www.w3schools.com/cssref/css_selectors.asp
[treehouse-substr-selectors]: https://blog.teamtreehouse.com/css3-substring-matching-attribute-selectors

