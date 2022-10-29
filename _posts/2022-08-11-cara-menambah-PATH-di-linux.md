---
layout: post
title: Cara Menambah PATH di Linux
date: 2022-08-10 18:32:00 -0500
categories: [Linux, Tutorial]
---
Assalamualaikum.
halo, ini cara **Cara Menambah PATH di linux**.<br>
oke caranya tambah ini di shell source yg kita gunakan:
```
export PATH="$HOME/.local/bin:$PATH"
```
setelah itu kita perlu restart shell source yang kita gunakan:
## bash
```terminal
source ~/.bashrc
```
## zsh
```terminal
source ~/.zshrc
```

oke itu ajah, konten ini buat yang paham2 ajah kalo gk paham ngapain disini :u
