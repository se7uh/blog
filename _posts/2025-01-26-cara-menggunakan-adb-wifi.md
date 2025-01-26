---
layout: post
title: Cara Menggunakan ADB wireless di Android 10 kebawah
date: 2025-01-26 11:32:25 0500
categories: [Tutorial, Android]
tags: [ADB]
---

Jika kalian ingin menggunakan ADB tanpa kabel di Android 10 kebawah, kalian bisa mengikuti cara berikut.

Pertama, pastikan:
- HP kalian sudah terhubung ke PC via USB
- USB Debugging sudah aktif di Developer Options
- HP dan PC terhubung ke jaringan WiFi yang sama

Lalu jalankan perintah berikut di terminal:
```sh
adb tcpip 5555
adb connect ip_hp_kalian:5555
```

Setelah itu kalian bisa lepas kabel USB nya.

> Note: Koneksi akan terputus jika HP kalian masuk mode sleep. Jadi kalian perlu mengatur waktu sleep yang lebih lama.

Tips: Untuk mendapatkan IP HP kalian, bisa menggunakan perintah:
```sh
adb shell ip route
```
IP yang digunakan adalah IP yang muncul paling akhir.

sc: [Stack Overflow](https://stackoverflow.com/questions/74681846/running-wifi-adb-on-android-10-device) 