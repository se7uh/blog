---
layout: post
title: Cara Install npm sebagai user di linux
date: 2024-09-09 01:32:25 0500
categories: [Tutorial, Linux]
tags: [nodejs, npm]
---
Untuk menginstall package npm sebagai user, anda perlu mengubah prefix npm ke user, karena default nya npm itu menginstall package ke root system.

Untuk mengubah prefix kalian bisa gunakan perintah berikut ini :
```
npm config set prefix '~/.local/'
```

refrensi: [Stackoverflow](https://stackoverflow.com/a/59227497/15596956)
