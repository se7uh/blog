---
layout: post
title: Mengatasi Magisk error code 8
date: 2023-06-13 01:32:25 0500
categories: [Tutorial, Android]
tags: [Android, Magisk]
---

Assalamualaikum kawan.<br>
Jadi disini saya mau bagikan cara mengatasi magisk error code 8.<br>
Sebelum itu saya mau ngasih tau kenapa terjadi error tersebut.<br>
## Alasannya adalah karena
- Magisk tidak mengetahui kita menggunakan prosessor 32-bit atau 64-bit.

## Cara Mengatasi
1. Kalian Pasang module [busybox-ndk](https://github.com/Magisk-Modules-Repo/busybox-ndk) dan restart.
2. Kalian copy file di `/data/adb/modules/busybox-ndk/system/bin/busybox` ke `/data/adb/magisk/`.
3. Jika ditanya ingin Mengganti file Kalian tekan Saja ganti
4. Restart hp

Sekian.

refrensi : [Github](https://github.com/topjohnwu/Magisk/issues/3898)
