---
title: A little-known way to style Table Columns in CSS
summary: besides classes and td:nth-child(N)
tags:  [ CSS3, HTML5, Lore, code ]
date:  2019-07-12T15:45:52-07:00
images: [/img/todayilearned.jm3.net.png]
goal:  Front-End Engineering
categories: code

---

The primary (only) grouping for table cell data in HTML are rows, and always have been. But! There's a little known `<col>` marker, to be inserted at the beginning of the table, once per desired column. It doesn't wrap `<td>` content, the way that `<tr>` does — it's just a weird, forlorn magical orphan that then lets you select vertical regions of your table.


## Selecting vertical table regions with `<col>` markers

{{< highlight html >}}
<table>

  <!-- strange, non-semantic column markers-->
  <col>
  <col>

  <!-- table row -->
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>

</table>
{{< / highlight >}}

## Click "HTML" or "SCSS" below to view this in action

{{< codepen id="MMRZoN" tab="result" >}}

Why would you do this? I don't exactly know. I think it's an older holdover from a table-based world. The current prevalent way of doing this is selecting `td:nth-child(2)`

## The conventional way: using `td:nth-child(2)`

{{< codepen id="rEboQe" tab="result" >}}
