---
layout: post
title: Install 32bit Package di Linux
date: 2022-05-31 18:32:00 -0500
categories: [Linux, Tutorial]
---

# Install 32bit Package Di Linux
## Arch Linux 
Untuk Arch Linux Pertama2 Kalian Harus Mengaktifkan **Multilib** dahulu di `/etc/pacman.conf`.<br>
untuk penginstalan packagenya, caranya:

`sudo pacman lib32-*`


## Ubuntu / Debian Based

`sudo apt-get install *:i386`

> `*`  adalah nama packagenya
{: .prompt-info }
