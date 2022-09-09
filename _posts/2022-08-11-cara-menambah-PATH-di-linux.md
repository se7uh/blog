---
layout: post
title: Cara Menambah PATH di Linux
date: 2022-08-10 18:32:00 -0500
categories: [Linux, Tutorial]
---
Assalamualaikum.
halo diriku dari masa depan.
jadi ini saya mau mengingatkan diriku di masa depan *Cara Menambah PATH di linux* karena lupa(mungkin?).
oke caranya tambah ini di shell source yg kita gunakan:
`export PATH="$HOME/.local/bin:$PATH"`<br>
setelah itu kita perlu restart shell source yang kita gunakan:
## bash
`source ~/.bashrc`
## zsh
`source ~/.zshrc`

oke itu ajah, konten ini buat yang paham2 ajah kalo gk paham ngapain disini.
