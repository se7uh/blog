---
layout: post
title: Cara Memasang Font secara manual di Linux
date: 2024-07-27 01:32:25 0500
categories: [Tutorial, Linux]
tags: [font]
---

Untuk Memasang Font, Pertama anda harus punya font yang mau di pasang. Jika sudah maka kalian bisa membuat folder di `~/.local/share/fonts` atau `~/.fonts`.

jika sudah maka taruh font di salah satu folder tersebut dan ketik perintah ini di terminal:
```
fc-cache -f -v
```

> **Perintah itu digunakan untuk mengupdate font yang terpasang di system anda**
{: .prompt-info }

Refrensi: [Medium](https://medium.com/source-words/how-to-manually-install-update-and-uninstall-fonts-on-linux-a8d09a3853b0)
