---
layout: post
title: Cara mengatasi Fedora tidak bisa update aplikasi padahal sudah ada repository nya
date: 2024-04-26 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Fedora]
---
Jadi waktu itu saya coba update google chrome menggunakan `sudo dnf upgrade --refresh` tapi  chrome tetap tidak terupdate. Untuk mengatasi itu ikuti cara ini:

1. Pergi ke `/etc/yum.repos.d` dan periksa apakah file `google-chrome.repo` ada
2. Jika ada, Buka file tersebut dan kalian cari kata `enabled=0`
3. Jika ada, ubah jadi `enabled=1`

> **Ini tidak hanya untuk Chrome saja, untuk aplikasi lain juga bisa. <br>Intinya kalian ganti `enabled=0` jadi `enabled=1`**
{: .prompt-info }

Refrensi: [Reddit](https://www.reddit.com/r/Fedora/comments/ess2r4/my_chrome_doesnt_get_updated_via_dnf/)
