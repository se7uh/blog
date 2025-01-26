---
layout: post
title: Mengatasi Startup Script Tidak Jalan di KDE Plasma
date: 2025-01-26 11:34:25 0500
categories: [Tutorial, Linux]
tags: [KDE]
---

Jika kalian mengalami masalah startup script atau aplikasi tidak jalan di KDE Plasma,
ini disebabkan karena KDE Plasma sekarang menggunakan systemd untuk startup saat login.

Untuk mengatasinya, kalian cukup nonaktifkan systemd startup dengan perintah berikut:

```sh
kwriteconfig5 --file startkderc --group General --key systemdBoot false
```

Setelah itu, logout dan login kembali. Startup script dan aplikasi kalian akan berjalan normal lagi.

sc: [Reddit](https://www.reddit.com/r/archlinux/comments/ves6mh/comment/inf2mwq/) 