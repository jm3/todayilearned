---
title: Vue event handling + bubble stopping
tags:  ["Vue.js"]
goal:  Front-End Engineering
date:  2019-05-18
draft: false

---
trap user input events with v-on:… directives like:

v-on:keyup.enter="myCoolEnterHandler"

stop or change event bubbling with event modifiers like: 
.stop, .prevent, .capture, .self, .once, .passive`, e.g. `<a v-on:click.stop=“doIt”>yo</a>

