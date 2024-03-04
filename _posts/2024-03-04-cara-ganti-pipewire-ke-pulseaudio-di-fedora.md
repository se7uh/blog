---
layout: post
title: Cara mengganti Pipewire ke Pulseaudio di Fedora
date: 2024-04-04 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Audio, PulseAudio]
---
> Saya coba di Fedora 39
{: .prompt-info }

Karena Pipewire suaranya tidak bisa lebih dari 100% menggunakan Shortcut, jadi saya balik pakai Pulseaudio. Caranya :

1. Ganti paket `pipewire-pulseaudio` dengan `pulseaudio` :
```
sudo dnf swap --allowerasing pipewire-pulseaudio pulseaudio
```
2. Hapus paket Pipewire yg lain :
```
sudo dnf remove pipewire-alsa pipewire-jack-audio-connection-kit
```
3. Pasang ALSA dan utility (kegunaan) lainnya untuk Pulseaudio :
```
sudo dnf install alsa-plugins-pulseaudio pulseaudio-utils
```
4. Jalankan service Pulseaudio setiap Komputer hidup :
```
sudo systemctl --global enable pulseaudio.service
```
5. Restart Komputer