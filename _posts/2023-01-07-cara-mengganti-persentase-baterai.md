---
layout: post
title: Cara Mengganti Persentase Baterai Android
date: 2023-01-08 01:32:25 0500
categories: [Tutorial, Android]
tags: [Android, adb]
---
Assalamualaikum kawan, jadi hari ini saya buat tutor cara menggant persentasi baterai di android.

Disini Ada Dua Caranya:
1. [Tanpa Root](#tanpa-root) 
2. [Root](#root)

## Tanpa Root
- kalian masuk terminal dan install `android-tools` / `adb` setelah itu kalian keluar termux dan masuk lagi.
- lanjut kalian ketik :
```terminal
adb wait-for-device
adb shell dumpsys battery set level 999
```
![after](/gambar/cara-mengganti-persentase-baterai/after.webp) 
- jika kalian ingin kembali normal, ketik :
```
adb shell dumpsys battery reset
```
![before](/gambar/cara-mengganti-persentase-baterai/before.webp) 

## Root
Untuk __Pengguna Root__ Kalian __tidak usah pakai adb__, kalian tinggal masuk `su` dan ketik :
```
su
dumpsys battery set level 999
```
untuk mereset nya :
```
dumpsys battery reset
```

dann selesai :)

Credit : [Sagar](https://stackoverflow.com/users/4390381/sagar)<br>
SC : [StackOverflow](https://stackoverflow.com/a/50756355/15596956) 
