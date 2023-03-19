---
layout: post
title: Cara Menggunakan tombol Fn di Sway
date: 2023-03-18 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Sway, Wayland]
---

Assalamualaikum kawan, jadi saya mencoba menggunakan swaywm di laptop saya dan ada kendala
yaitu saya gak tau cara setting tombol Fn di sana. dan akhirnya saya nemu caranya.

Caranya menggunakan tombol Fn di sway menggunakan `XF86`.

contoh shortcut menambah volume : 
```
bindsym --locked XF86AudioRaiseVolume exec pactl -- set-sink-volume 0 +10%
```

sebenarnya ada banyak `XF86` tapi kalian bisa mencari sendiri di google.

pokok kata kunci nya `XF86`.
