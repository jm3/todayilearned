---
title: Bind DOM elements to data (1-way)
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-11
draft: false

---
TEXT - {{mustache}} or v-text:
mustache tags: <b>`{{ bind-it }}`</b>
or
v-text="todo.text" to replace an el’s text contents

HTML: v-html
<b v-html="someCoolHtml"></b>

ATTRIBUTES:
v-bind:class=“{ completed: todo.isDone }”`
or shortcut → :title="bogus.dingus"

BOOLEAN ATTRIBUTES:
<button v-bind:disabled="isBtnDisabled">Go</button>

If isButtonDisabled is null, undefined, or false, the disabled attribute will NOT EVEN BE INCLUDED in the rendered el.

