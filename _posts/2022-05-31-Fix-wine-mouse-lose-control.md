---
layout: post
title: Mengatasi Mouse Kehilangan fokus di wine
date: 2022-05-31 18:32:00 -0500
categories: [Linux, Tutorial]
---

### Mengatasi Mouse Di Wine Kehilangan Fokus
Saya pernah punya masalah yang lalu, ketika melakukan alt+tab di beberapa game di wine. Setiap kali saya melakukan alt+tab saya kehilangan fokus dan permainan tidak mendapatkan input mouse dan keyboard saya. Saya mencoba dengan solusi yang saya temukan di beberapa halaman yang mengatakan bahwa di Regedit, saya harus membuat entri baru bernama "UseTakeFocus" dengan nilai "N" di `HKEY_CURRENT_USER\Software\Wine\X11 Driver`

> Buat folder baru jika tidak lihat folder 'X11 Driver'.
{: .prompt-info }

Ini berhasil, dan saya bisa alt+tab tanpa masalah.

Refrensi : [Forum Manjaro](https://archived.forum.manjaro.org/t/lose-focus-of-window-in-wine/127097) 
