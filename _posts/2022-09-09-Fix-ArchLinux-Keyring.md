---
layout: post
title: Mengatasi Arch linux pgp signature corrupted
date: 2022-09-08 18:32:00 -0500
categories: [Tutorial, Linux]
tags: [Arch Linux, Linux]
---
#Haloo
> **UPDATE 18 FEBRUARI 2023**
{: .prompt-info }
ini ada cara yg baru2 ini saya temuin. caranya
1. kalian edit file /etc/pacman.conf
2. kalian ubah SigLevel = Never
3. Dan selesai

## DIBAWAH CARA LAMA tapi keamanannya lebih baik
Jadi kamu mau upgrade paket di arch linux tapi malah dapat error kayak gini ?<br>
`error: jansson: signature from "Eli Schwartz <eschwartz@archlinux.org>" is marginal trust
:: File /var/cache/pacman/pkg/jansson-2.10-3-x86_64.pkg.tar.xz is corrupted (invalid or corrupted package (PGP signature)).`

Tenang saja karena saya akan membagikan cara mengatasi hal tersebut ;)
oke, pertama perlu kalian ketahui biasanya kalian dapat error seperti itu ketika kalian upgrade paket
di arch linux secara bersamaan. <br>
Trus gimana cara ngatasinya?<br>
Gampang kalian hanya perlu install paket `archlinux-keyring` terlebih dahulu, Caranya tinggal install seperti biasa
```terminal
sudo pacman -S archlinux-keyring
```


Dan selamat sekarang anda sudah bisa upgrade paket di arch linux :)
