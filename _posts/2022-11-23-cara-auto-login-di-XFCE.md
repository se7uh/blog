---
layout: post
title: Cara auto-login di XFCE
date: 2022-11-23 04:36:25 0500
categories: [Tutorial, Linux]
tags: [Linux, XFCE]
---
Assalamualaikum kawan.
jadi saya mau sher cara auto login di XFCE, karena setiap laptop saya hidup harus masukkan password,
jadinya saya males :|<br>
oke langsung ke tutor nya kawan :)
## Caranya
1. kalian buat group `autologin`
```
sudo groupadd -r  autologin
```
2. kalian tambahkan username kalian ke group autologin
```
sudo gpasswd -a azizz autologin
```

3. kalian edit file di **/etc/lightdm/lightdm.conf** dengan teks editor kesukaan kalian
cari kata `autologin-user` dan hapus tanda pagarnya agar tidak dianggap komentar :
```
autologin-user=(Nama username mu) <-- hapus tanda kurung nya
```

4. Selesai 
