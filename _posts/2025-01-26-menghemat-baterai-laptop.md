---
layout: post
title: Cara Menghemat Baterai Laptop di Linux Menggunakan TLP
date: 2025-01-26 11:41:25 0500
categories: [Tutorial, Linux]
tags: [TLP]
---

Jika kalian ingin menghemat baterai laptop di Linux, kalian bisa menggunakan TLP.
TLP adalah tools yang sangat bagus untuk mengoptimalkan penggunaan baterai laptop tanpa perlu setting yang rumit.

# Instalasi

## Fedora
```sh
# Hapus package yang konflik
sudo dnf remove power-profiles-daemon  # Untuk Fedora 40 kebawah
sudo dnf remove tuned tuned-ppd       # Untuk Fedora 41 keatas

# Install TLP
sudo dnf install tlp
```

## Ubuntu/Debian
```sh
# Tambah PPA untuk versi terbaru
sudo add-apt-repository ppa:linrunner/tlp
sudo apt update

# Install TLP
sudo apt install tlp
```

## Arch Linux
```sh
sudo pacman -S tlp
```

# Konfigurasi Service

Setelah terpasang, aktifkan service yang diperlukan:
```sh
# Aktifkan service TLP
sudo systemctl enable tlp.service

# Nonaktifkan service yang konflik
sudo systemctl mask systemd-rfkill.service systemd-rfkill.socket
```

# Penggunaan

TLP sudah memiliki konfigurasi default yang optimal untuk menghemat baterai. Jadi kalian tidak perlu melakukan konfigurasi tambahan.

## Melihat Status
```sh
sudo tlp-stat -s # status
sudo tlp-stat -b # info baterai
```

## Perintah Dasar
```sh
tlp start      # Terapkan semua pengaturan
tlp ac         # Terapkan profil AC
tlp bat        # Terapkan profil baterai
```

# Catatan untuk ThinkPad

> - Jika kalian menggunakan ThinkPad keluaran 2011 kebawah, kalian perlu memasang paket tambahan:
>   - Fedora: `akmod-tp_smapi`
>   - Ubuntu: `tp-smapi-dkms`
>   - Arch: `tp_smapi` atau `tp_smapi-lts` (untuk kernel LTS)
> - Untuk ThinkPad 2011 keatas dengan kernel 6.8+, tidak perlu paket tambahan

sc: [TLP](https://linrunner.de/tlp/) 
