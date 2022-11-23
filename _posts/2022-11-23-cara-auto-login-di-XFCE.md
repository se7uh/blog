---
layout: post
title: Cara auto-login di XFCE
date: 2022-11-23 04:36:25 0500
categories: [Linux, Tutorial]
tags: [Linux, XFCE]
---
Assalamualaikum kawan.
jadi saya mau sher cara auto login di XFCE, karena setiap laptop saya hidup harus masukkan password,
jadinya saya males :|<br>
oke langsung ke tutor nya kawan :)
## Caranya
kalian edit file di **/etc/lightdm/lightdm.conf** dengan teks editor kesukaan kalian
dan tambah kan teks ini :
```
[Seat:*]
autologin-session=
autologin-user=(Nama username mu) <-- hapus tanda kurung ea
autologin-user-timeout=0
```
