---
layout: post
title: Cara membuka file WebP di Linux
date: 2022-11-24 00:06:25 0500
categories: [Tutorial, Linux]
tags: [Linux, WebP, Gambar]
---
WebP adalah alternatif dari file gambar lainnya, yg menjadikan WebP disukai banyak orang adalah
karena bisa menggunakan gambar kualitas tinggi tapi ukuran file yang kecil.
dan disini ada cara membuka file WebP native di linux, tapi sebenarnya kalian juga bisa membuka file ini di browser.

oke, yg kalian butuh kan cuma paket `webp-pixbuf-loader`. kalau di Arch Linux kalian bisa menginstall langsung dengan pacman.
## Arch Linux
```terminal
sudo pacman -S webp-pixbuf-loader
```
## Debian/Ubuntu
Sedangkan kalau di Linux berbasis Debian/Ubuntu kalian harus menambahkan PPA dulu baru install:
```terminal
sudo add-apt-repository ppa:krifa75/eog-ordissimo
sudo apt-get update
sudo apt install webp-pixbuf-loader
```
Dan selamat kalian bisa membuka file WebP secara native di linux :)
