---
layout: post
title: Cara menjalankan ydotool sebagai user
date: 2024-07-29 01:32:25 0500
categories: [Tutorial, Linux]
tags: [ydotool]
---

Jadi saya ingin menjalankan ydotool sebagai pengganti xdotool di wayland. nah masalahnya aku tidak bisa menjalankan ydotool sebagai user dan harus sebagai root, yg dimana itu sangat mengganggu karena aku hanya ingin menggunakan ydotool untuk menghentikan video youtube setelah beberapa menit.

Untuk menjalankan ydotool sebagai user bisa gunakan perintah dibawah ini:
```
export YDOTOOL_SOCKET=/tmp/.ydotool_socket
systemctl restart ydotool
sudo chmod 666 /tmp/.ydotool_socket
```

Refrensi: [fedoraproject](https://discussion.fedoraproject.org/t/ydotool-not-working-on-fedora-40/114333/3)
