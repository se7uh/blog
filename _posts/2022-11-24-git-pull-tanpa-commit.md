---
layout: post
title: Cara update git local ke perubahan terbaru di github
date: 2022-11-24 00:06:25 0500
categories: [Git, Tutorial]
tags: [Linux, Git]
---
assalamualaikum kawan.

jadi saat saya mau push ke github, minta di `pull --rebase` dulu, saya males kyak gitu. Karena itu saya bikin tutor ini :)

- pertama kita fetch(mengambil) semua perubahan terbaru di github
```terminal
git fetch --all
```
- kedua, kita reset
```terminal
git reset --hard origin/main
```
- terakhir kita pull/update
```terminal
git pull
```

dan selesai, git local anda sekarang udh sinkron dengan yg ada di github :)

credit : [@Artur Barseghyan](https://stackoverflow.com/users/2318839/artur-barseghyan)
