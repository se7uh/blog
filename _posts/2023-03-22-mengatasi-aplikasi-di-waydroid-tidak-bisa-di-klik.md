---
layout: post
title: Mengatasi Aplikasi di Waydroid tidak bisa di klik
date: 2023-03-22 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Waydroid, Android]
---

Halo kawan, jadi saat saya mau bermain game di Waydroid, saya kok gak bisa klik dalam game nya?.

ternyata ada settingan yang perlu di hidupkan dulu, yaitu fake_touch.

ini cara menghidupkan nya:
```
waydroid prop set persist.waydroid.fake_touch '*'
```

dan jika kalian ingin 1 aplikasi saja, ganti tanda `*` dengan nama aplikasi paket yang kalian ingin.

contoh jika saya mau chrome saja :
```
waydroid prop set persist.waydroid.fake_touch 'com.android.chrome'
```

sumber : [Waydroid Docs](https://docs.waydro.id/usage/waydroid-prop-options)
