---
layout: post
title: Mengatasi WPS Office Force Close di Linux
date: 2025-01-26 10:32:25 0500
categories: [Tutorial, Linux]
tags: [WPS]
---

Jika kalian mengalami WPS Office sering force close/crash saat digunakan di Linux,
masalah ini disebabkan oleh file `wpscloudsvr`.

Untuk mengatasinya, kalian cukup hapus file tersebut yang berada di `/opt/kingsoft/wps-office/office6/wpscloudsvr`:

```sh
sudo rm /opt/kingsoft/wps-office/office6/wpscloudsvr
```

> Note: Setelah update WPS Office, file tersebut akan kembali. Jadi kalian perlu menghapusnya lagi setelah update.

sc: [Manjaro Forum](https://forum.manjaro.org/t/seems-found-a-solution-for-crashing-of-wps-office/389446) 