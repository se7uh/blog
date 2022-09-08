---
layout: post
title: Cara Auto Mount NTFS di linux
date: 2022-06-14 18:32:00 -0500
categories: [Linux, Tutorial]
---

# Hello Welcome back
jadi saya mau bagi pengalaman saya saat menggunakan arch linux, yaitu cara auto mount ntfs file system saat booting.
edit file `/etc/fstab` dan langsung copas saja config di bawah ini:

`#/dev/sda2 (WINDOWS 7)`<br>
`UUID=*UUID_partisinya /run/media/azizz/B664A3E364A3A499 ntfs-3g uid=azizz,gid=wheel 0 0`

> Kalian bisa liat UUID kalian Dengan Command `lsblk -f`<br>
> **uid** adalah nama user kalian
{: .prompt-info }
