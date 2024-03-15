---
layout: post
title: PulseAudio, menuju tak terbatas dan melampauinya
date: 2022-11-23 04:36:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Audio, PulseAudio]
---

assalamualaikum kawan, jadi saya habis install ulang arch linux dan saat dengar lagu suaranya kok kecil?
jadi disini ada caranya mengatasi pulseaudio suaranya mentok di 100%.
oke, pertama kalian install 
`pulseaudio pulseaudiocontrol pulseaudio-equalizer`
dengan pacman atau apt atau dnf.
## pacman  (arch based)
```terminal
sudo pacman -S pulseaudio pulseaudiocontrol pulseaudio-equalizer
```
## apt-get  (debian based)
```terminal
sudo apt-get install pulseaudio pulseaudiocontrol pulseaudio-equalizer
```
## dnf  (fedora based)
```terminal
sudo dnf install pulseaudio-utils
```
setelah itu kalian buat shortcut keyboard agar kalian nanti tdk ngetik perintah banyak2

pergi ke settingan keyboard dan tambahkan shortcut terserah kalian dan 
tambahkan
```
pactl -- set-sink-volume 0 +50%
```
sebagai perintah yg dijalankan.

> Jika perintah `pactl` diatas tidak bisa, kalian ketikkan perintah `pactl list sinks short`. Nanti disana akan ada nomor audio yang keluar. Nanti kalian ganti `0` diatas ke nomor yang ada. ATAU kalian juga bisa menggunakan namanya (disebelah nomor) agar ketika nomornya berubah ketika di reboot tidak usah mengganti nomornya lagi.
{: .prompt-info }

dan selamat sekarang kalian sudah bisa atur volumenya sesuai keinginan kalian :).
