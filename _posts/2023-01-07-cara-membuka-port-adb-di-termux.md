---
layout: post
title: Cara Membuka Port adb di Termux
date: 2023-01-06 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Termux, Android, adb]
---

Asslamualaikum kawan, Ini tutor cara membuka port adb di Termux, Android.

Saya buat tutor ini karena saya mau pakai adb tanpa PC.

## Caranya
Caranya ada 2, Lihat dibawah.:

### 1. Cara Pertama
Biasanya adb akan memulai sendiri jika kalian restart Termux nya, jika tidak bisa pakai cara ke 2.

### 2. Cara Kedua
>**HP WAJIB ROOT UNTUK CARA YANG KE-2**
{: .prompt-danger }
Pergi ke Termux dan ketik :
```terminal
su
setprop service.adb.tcp.port 5555
stop adbd
start adbd
```
Jika anda ingin mengembalikan agar bisa konek via USB :
```terminal
setprop service.adb.tcp.port -1
stop adbd
start adbd
```
dan selesai :)

credit : [Brian](https://stackoverflow.com/users/251050/brian)<br>
sc : [StackOverflow](https://stackoverflow.com/a/3623727/15596956)
