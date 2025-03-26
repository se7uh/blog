---
title: Cara Mengaktifkan Multi Windows di Waydroid
author: azizz
date: 2025-03-26 14:00:00 0500
categories: [Tutorial, Linux]
tags: [waydroid, android, multi-windows, linux]
pin: false
math: false
mermaid: false
---

Kalian pernah gak sih pengen jalanin aplikasi Android di Linux tapi gak mau pakai emulator yang berat? Nah, Waydroid bisa jadi solusinya. Tapi kadang kita pengen buka beberapa aplikasi Android sekaligus dalam mode multi-windows. Gimana caranya?
{: .prompt-info }

## Cara Mengaktifkan Multi Windows

Untuk mengaktifkan fitur multi-windows di Waydroid, kalian bisa pakai command berikut:

```bash
waydroid prop set persist.waydroid.multi_windows true
systemctl restart waydroid-container.service
```

> **Penting**: Pastikan Waydroid sedang berjalan saat kalian menjalankan command `waydroid prop set`. Kalau belum jalan, buka dulu Waydroid-nya ya!
{: .prompt-warning }

Setelah itu, Waydroid akan restart dan fitur multi-windows sudah bisa digunakan. Kalian bisa buka beberapa aplikasi Android sekaligus dalam window terpisah.

## Tips Tambahan: Gunakan Waydroid Helper

Kalau kalian pengen lebih banyak fitur buat ngotak-ngatik Waydroid, kalian bisa install Waydroid Helper. Ini adalah aplikasi GUI yang memudahkan kalian mengatur Waydroid.

### Cara Install Waydroid Helper

#### Untuk Fedora:
```bash
sudo dnf copr enable cuteneko/waydroid-helper
sudo dnf install waydroid-helper
```

#### Untuk Ubuntu:
```bash
sudo add-apt-repository ppa:ichigo666/ppa
sudo apt update
sudo apt install waydroid-helper
```

#### Untuk Debian:
```bash
echo 'deb http://download.opensuse.org/repositories/home:/CuteNeko:/waydroid-helper/Debian_12/ /' | sudo tee /etc/apt/sources.list.d/home:CuteNeko:waydroid-helper.list
curl -fsSL https://download.opensuse.org/repositories/home:CuteNeko:waydroid-helper/Debian_12/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_CuteNeko_waydroid-helper.gpg > /dev/null
sudo apt update
sudo apt install waydroid-helper
```

### Fitur Waydroid Helper

Dengan Waydroid Helper, kalian bisa:
- Mengatur shared folder
- Mengatur Prop Waydroid
- Memasang Aplikasi tambahan seperti: Magisk, Gapps, libhoudini, dll.
## Catatan Penting

> Pastikan kalian sudah install Waydroid dengan benar sebelum mencoba fitur multi-windows.
{: .prompt-warning }

> Beberapa window manager mungkin gak support fitur multi-windows dengan baik. Jadi kalau ada masalah, coba ganti window manager kalian.
{: .prompt-tip }

## Referensi

- [Forum Android on PC](https://aopc.dev/t/how-to-enable-multi-windows-in-waydroid.1277/)
- [GitHub Waydroid Helper](https://github.com/ayasa520/waydroid-helper) 