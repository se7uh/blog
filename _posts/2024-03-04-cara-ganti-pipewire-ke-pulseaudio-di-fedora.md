---
layout: post
title: Cara mengganti Pipewire ke Pulseaudio di Fedora
date: 2024-03-04 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Audio, PulseAudio]
---
> **Saya coba di Fedora 39** 
{: .prompt-info }

Karena Pipewire suaranya tidak bisa lebih dari 100% menggunakan Shortcut, jadi saya balik pakai Pulseaudio. Caranya :

1. Ganti paket `pipewire-pulseaudio` dengan `pulseaudio` :
```sh
sudo dnf swap --allowerasing pipewire-pulseaudio pulseaudio
```
2. Pasang ALSA dan utility (kegunaan) lainnya untuk Pulseaudio :
```sh
sudo dnf install alsa-plugins-pulseaudio pulseaudio-utils
```
3. Jalankan service Pulseaudio setiap Komputer hidup :
```sh
sudo systemctl --global enable pulseaudio.service
```
4. Restart Komputer
5. Jika setelah di restart tidak ada suara, ketik di terminal :
```sh
pulseaudio -k
```

Refrensi: [redhat](https://access.redhat.com/articles/6958410)
