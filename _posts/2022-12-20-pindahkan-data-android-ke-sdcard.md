---
layout: post
title: Cara Pindahkan Data Android ke Kartu SD
date: 2022-12-20 13:33:25 0500
categories: [Tutorial, Android]
tags: [Linux, Android]
---

>**HP WAJIB ROOT**
{: .prompt-danger }

> **Hanya Bekerja di Android 10 Kebawah, Karena Android 11+ mulai menggunakan [Scoped storage](https://source.android.com/docs/core/storage/scoped?hl=en)**
{: .prompt-info }

1. pertama kalian perlu format kartu sd kalian agar bisa menjadi internal
untuk tutorial format bisa lihat di yt/google karena rom hp yg saya gunakan beda dengan kalian.

2. setelah di format kalian download aplikasi APP2SD di playstore, gratis ;)

3. lanjut kalian masuk ke app nya dan pergi ke **Folder Mount** dan kalian Klik tanda **+**

4. dibawah:
  - untuk kolom nama kasih nama aplikasi nya
  - dan untuk kolom di tengah (Source Folder) kalian isi folder data yg ada di internal kalian. contoh:
  `/storage/emulated/0/Android/data/ini_folder_datanya`
  - Dan untuk Kolom terakhir (Destination folder) kalian isikan folder yg ada di sd card kalian :
  `/mnt/expand/sdcard/data/ini_folder_datanya`
  - Lanjut klik ok

5. Kalian Bisa Nyalakan dan **jika ditanya enable copy from source kalian ok saja**

