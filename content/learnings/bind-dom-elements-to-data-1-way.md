---
title: Bind DOM elements to data - 1-way binding
summary: in Vue.js
tags:  [Vue.js]
goal:  Front-End Engineering
date:  2019-06-06

---

Let's get bound in Vue.js:

## TEXT:

{{< highlight html >}}
<span>Message: {{ msg }}</span>
<!-- or -->
<div v-text="todo.text"> to replace an elements’s text contents</div>
{{< / highlight >}}

## HTML

{{< highlight html >}}
<b v-html="someCoolHtml"></b>
{{< / highlight >}}

## Attributes
{{< highlight html >}}
<div v-bind:class=“{ completed: todo.isDone }”>
<!-- or the shorthand form: -->
<input :title="modus.ponens">
{{< / highlight >}}

## Boolean Attributes
{{< highlight html >}}
<!-- NOTE:
  If isButtonDisabled is null, undefined, or false, the disabled
  attribute will *not even be included* in the rendered element. 
  -->
<button v-bind:disabled="isBtnDisabled">Go</button>
{{< / highlight >}}

