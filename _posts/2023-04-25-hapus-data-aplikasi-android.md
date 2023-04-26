---
layout: post
title: Cara Menghapus data Aplikasi di terminal
date: 2023-04-25 01:32:25 0500
categories: [Tutorial, Android]
tags: [Android, Termux, adb]
---

Assalmualaikum Kawan, Jadi Saya buat tutor ini karena trial Poweramp saya habis. trus
saya mencoba hapus data aplikasinya lewat **Info Aplikasi** dan gk bisa.
Dan saya nemu cara ini.

- Caranya kalian pergi ke termux dan jangan lupa install adb.
- Kalian gunakan command ini:

```
adb shell pm clear com.example.myapp
```

- di **com.example.myapp**, kalian harus ganti dengan nama paket aplikasi yang kalian inginkan.
  bisa dilihat di **Info Aplikasi**

Dan selesai

sumber: [stackoverflow](https://android.stackexchange.com/questions/205264/cannot-clear-app-data)
