---
layout: post
title: Wine Tidak ada Suara
date: 2022-10-18 18:32:00 -0500
categories: [Linux, Tutorial]
tags: [wine, emulator]
---
Assalamualaikum brother, jadi hari ini saya ada masalah saat mau main game di linux pake wine (pakai apa lagi kalau gk pake ini wkwk). Jadi saat game nya dimulai kok gk ada suara?? saya pun cari cara ngatasinnya di google dan nemu kalau saya belum install paket nya. btw nama paketnya adalah **lib32-libpulse**, untuk install nya di arch linux cukup ketik :<br>
```terminal
sudo pacman -S lib32-libpulse
```
jika masih tidak berhasil, install paket yg ada di bawah ini juga :
```
lib32-alsa-lib: ALSA audio driver
lib32-jack: JACK audio driver
lib32-libpulse: PulseAudio audio driver
lib32-pipewire: PipeWire audio driver
```