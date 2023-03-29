---
layout: post
title: Edit file Docx di Terminal
date: 2022-12-12 00:06:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Termux, Pandoc]
---

> **INI CUMA BUAT CARI PENGALAMAN SAJA, TIDAK DIREKOMENDASIKAN UNTUK PAKE INI BUAT PRODUKTIFITAS**
> {: .prompt-danger }

Assalamualaikum kawan

jadi hp saya penyimpanan nya cuma 16gb, buat download wps kemakan sekitar 400mb dan itu sangat
besar bagi saya. Oleh karena itu saya cari alternatif gimana caranya edit/buat file **docx** di
terminal Yaitu Pakai [Pandoc](https://pandoc.org/)

1. Pasang Termux dan install pandoc:

```terminal
apt install pandoc
```

2. Jika ingin buat,
   kalian bisa buat file **MarkDown(md)** dulu terus di export ke **docx**. cara export nya:

```terminal
pandoc -s file.md -o file.docx
```

3. Jika kalian ingin edit file **docx** yang sudah ada, kalian export ke **MarkDown(md)** dulu terus export lagi ke **docx**.
   ini adalah cara export **docx** ke **MarkDown(md)**:

```terminal
pandoc -s file.docx -o file.md
```

Setelah cara ini selesai Lakukan cara ke 2.

4. Oke itu ajah, Sekian

note : kunjungi web resmi [Pandoc](https://pandoc.org/) untuk tutorial lebih lanjut
