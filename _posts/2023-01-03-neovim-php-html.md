
---
layout: post
title: Neovim PHP + HTML
date: 2023-01-03 16:32:25 0500
categories: [Tutorial, Vim]
tags: [Linux, Vim, Neovim]
---

Halo kawan, jadi waktu saya ngoding php di neovim ada masalah, yaitu autocomplete html tidak
keluar dan itu tentu masalah besar, karena itu saya bikin tutor ini.

1. Pertama kalian set file php ke php.html (mksudnya php & html) :
```
:set filetype=php.html
```
2. Kalian Jalankan Lsp HTML jika ingin:
```
:LspStart html
```
3. Dan selesai, kalian bisa dapat autocomplete HTML di PHP :)

info tambahan : https://stackoverflow.com/questions/3008575/vim-activiting-html-snippets-on-php-files
