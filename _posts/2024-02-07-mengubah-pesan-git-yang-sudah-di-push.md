---
layout: post
title: Cara mengubah pesan git yang sudah di push
date: 2024-02-07 01:32:25 0500
categories: [Tutorial, Git]
tags: [Git]
---

Jika kalian salah menulis commit dan sudah kalian push kalian bisa mengubahnya tapi dengan beberapa syarat; yaitu:

1. Itu commit terakhir
2. Hanya dapat mengubah pesan commit (jangan ubah kodenya)

jika sudah maka kalian bisa ketik kode berikut:
```sh
git commit --amend -m "Pesan commit baru"
```
```sh
git push --force-with-lease
```
> `--force-with-lease` ini akan memeriksa apakah ada perubahan di repositori remote sebelum melakukan push. Jika ada perubahan, force push akan ditolak, dan Anda akan diberi tahu untuk menarik (pull) perubahan terlebih dahulu.
{: .prompt-info }
