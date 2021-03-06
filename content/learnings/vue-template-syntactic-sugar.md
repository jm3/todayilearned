---
title: Vue template syntactic sugar
tags:  [Vue.js]
goal:  Front-End Engineering
date:  2019-06-03
summary: Some shortcuts that can save time but also obfuscate meaning.

---

Event listeners:
v-on:click` → `@click

Data binding - object syntax:
v-bind:class=“{title: dog}” → :title=”dog”

The bound object doesn’t have to be inline:

<div v-bind:class="classObj"></div>

data: {
  classObj: {
    active: true,
    'text-danger': false
  }
}

Data binding - array of props:

v-bind:class=“[cat, dog]”
data: {
  cat: 'active',
  dog: 'text-danger'
}
