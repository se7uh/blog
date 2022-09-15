---
layout: post
title: Mengatasi Arch linux pgp signature corrupted
date: 2022-09-08 18:32:00 -0500
categories: [Linux, Tutorial]
---
#Haloo
Jadi kamu mau upgrade paket di arch linux tapi malah dapat error kayak gini ?
`error: jansson: signature from "Eli Schwartz <eschwartz@archlinux.org>" is marginal trust
:: File /var/cache/pacman/pkg/jansson-2.10-3-x86_64.pkg.tar.xz is corrupted (invalid or corrupted package (PGP signature)).`

Tenang saja karena saya akan membagikan cara mengatasi hal tersebut ;)
oke, pertama perlu kalian ketahui biasanya kalian dapat error seperti itu ketika kalian upgrade paket
di arch linux secara bersamaan. <br>
Trus gimana cara ngatasinya?<br>
Gampang kalian hanya perlu install paket `archlinux-keyring` terlebih dahulu, Caranya tinggal install seperti biasa<br>
`sudo pacman -S archlinux-keyring`<br>
Dan selamat sekarang anda sudah bisa upgrade paket di arch linux :)
