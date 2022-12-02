---
layout: post
title: cara Install paket 32bit di Linux
date: 2022-05-31 18:32:00 -0500
categories: [Tutorial, Linux]
---

## Arch Linux 
Untuk Arch Linux Pertama2 Kalian Harus Mengaktifkan **Multilib** dahulu di `/etc/pacman.conf`.<br>
untuk penginstalan paketnya, caranya:

```terminal
sudo pacman lib32-*
```

## Ubuntu / Debian Based

```terminal
sudo apt-get install *:i386
```

> `*`  adalah nama paketnya
{: .prompt-info }
