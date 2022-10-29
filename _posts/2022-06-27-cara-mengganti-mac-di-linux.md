---
layout: post
title: Cara mengganti MAC ADDRESS di linux
date: 2022-07-18 18:32:00 -0500
categories: [Linux, Tutorial]
tags: [wifi, trik]
---

Assalamualaikum semua, jadi kali ini saya mau share cara mengganti Mac Address Di Linux kalian ;)<br />
Buat Kalian yang tidak paham apa itu Mac Address Kalian mungkin bisa googling dulu dan kenapa saya mau ganti Mac Address? itu buat mencegah kalian di ban dari router wifi oleh si admin pemilik wifi. Jadi intinya saya ganti Mac Address itu untuk Ganti identitas lain, ya seperti itulah intinya.<br />
Oke Langsung saja masuk ke tutorial nya ;)
## Cara Pertama
Pertama Kalian harus tau wifi interface kalian yang mau di down dengan ifconfig, caranya cuma ketik `ifconfig` lah itu nanti akan menampilan semua interface yang ada.
## Cara kedua
kalian harus meng-down wifi interface kalian dengan cara :
### Debian/Ubuntu
```terminal
sudo ifconfig INTERFACE down
```
### Arch Linux
```terminal
sudo ip link set INTERFACE down
```
untuk arch linux juga bisa menggunakan ifconfig tapi harus menginstall 'net-tools' terlebih dahulu.
## Cara Ketiga
Setelah wifi interface nya sudah down saat nya kita menggunakan `macchanger` untuk mengganti Mac Address kita Dengan cara :
```terminal
sudo macchanger -A INTERFACE
```
setelah itu kalian akan mendapatkan Mac Address baru.
## Cara Keempat
Setelah kalian mendapat Mac Address baru saat nya kita menghidupkan lagi wifi interface yang tadi kita matikan/down dengan cara :
### Debian/Ubuntu
```terminal
sudo ifconfig INTERFACE up
```
### Arch Linux
```terminal
sudo ip link set INTERFACE up
```

Dan Selamat Anda telah mengganti Mac Address Anda :)
