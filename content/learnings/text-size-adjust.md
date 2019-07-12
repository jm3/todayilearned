---
title: The text-size-adjust property in CSS
summary: Control how mobile browsers and smartphones "inflate" text sizes
tags:  [ CSS3, Mobile, Responsive ]
date:  2019-07-02T00:00:00-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering

---

Mobile browsers  can render text using an entirely different rendering
algorithm than desktop browsers at the browser / CSS level, to account
for the fact that most websites were not originally designed for mobile
use. 

_In Mozilla's words:_

> Instead of laying out pages at the width of the device screen, they
lay them out using a viewport that is much wider, usually 800 or 1000
pixels. To map the extra-wide layout back to the original device size,
they either show only part of the whole render or scale the viewport
down to fit.

> Since text that has been scaled down to fit a mobile screen may be
very small, many mobile browsers apply a text inflation algorithm to
enlarge the text to make it more readable. When an element containing
text uses 100% of the screen's width, the algorithm increases its text
size, but without modifying the layout. The **[text-size-adjust][docs]** property
allows web authors to disable or modify this behavior, as web pages
designed with small screens in mind do not need it.

[Read more][docs] at Mozilla

[Some folks][blog] have been writing about this since ... 2002!?  WHO KNEW? 

[docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
[blog]: https://jwir3.wordpress.com/2012/07/30/font-inflation-fennec-and-you/
