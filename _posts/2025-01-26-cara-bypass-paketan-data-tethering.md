---
title: Cara Bypass Paketan Data yang Tidak Bisa di Tethering
date: 2025-02-25 10:30:00 0500
categories: [Tutorial, Networking]
tags: [tethering, bypass, ttl, iptables]
---

Kalian pernah gak sih beli paketan data yang murah tapi gak bisa di tethering? Biasanya provider sengaja membatasi paketan data murah supaya gak bisa dibagi ke perangkat lain. Tapi tenang, ada cara buat bypass batasan ini.

## Cara Kerjanya

Provider internet biasanya mendeteksi tethering dengan melihat nilai TTL (Time To Live) pada paket data. Ketika kita tethering, nilai TTL akan berkurang 1 setiap melewati perangkat. Jadi kalau provider melihat TTL yang lebih rendah dari biasanya, mereka tahu kita lagi tethering.

Solusinya? Kita bisa mengubah nilai TTL ini supaya provider gak bisa bedain mana paket data dari HP langsung dan mana yang dari tethering.

## Cara 1: Gunakan Module nfqttl (untuk Android root)

Kalau HP kalian sudah di-root dan pakai Magisk, cara ini paling gampang:

1. Download module [nfqttl dari GitHub](https://github.com/cyborg-one/nfqttl)
2. Install module lewat Magisk Manager
3. Restart HP
4. Selesai! Sekarang kalian bisa tethering tanpa diblokir provider

Module ini bekerja dengan cara:
- Mengubah nilai TTL jadi 64 untuk paket data dari jaringan mobile
- Mengubah nilai TTL jadi 65 untuk paket data dari interface lokal (wifi, bluetooth)
- Memecah paket TCP menjadi beberapa sequence
- Untuk paket yang masuk dengan TTL=1, akan diubah jadi TTL=64
- Paket IPv6 akan di-drop

## Cara 2: Gunakan iptables (untuk Linux)

Kalau kalian pakai Linux dan tethering dari komputer/laptop, bisa pakai command iptables:

```bash
sudo iptables -t mangle -A POSTROUTING -j TTL --ttl-set 65
```

Command ini akan mengubah nilai TTL semua paket keluar jadi 65, sehingga provider gak bisa mendeteksi kalian lagi tethering.