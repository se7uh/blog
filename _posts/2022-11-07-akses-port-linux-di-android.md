---
layout: post
title: Akses port Linux di Android
date: 2022-11-07 04:36:25 0500
categories: [Linux, Tutorial]
tags: [Linux, Android]
---
Assalamualaikum kawan jadi kali ini saya mau buat tutorial cara akses port di linux di android.

**PENTING : KALIAN HARUS MENGGUNAKAN 1 WIFI YANG SAMA**

cara pertama yaitu kalian hentikan proses service firewall kalian. di kasus saya karena saya pakai 
arch linux, bawaan firewall nya pakai iptables, kalau mau menghentikannya ketik
```terminal
sudo systemctl stop iptables
```
setelah sudah kalian cari ip address local anda dengan cara
```terminal
ifconfig | grep "inet " | grep -v 127.0.0.1
```
disana kalian akan melihat ip address kalian yang ada di sebelah tulisan **inet**

jika sudah, kalian aktifkan/buka servernya dengan pyserver di folder yang kalian inginkan
```terminal
python3 -m http.server
```
dan setelah itu kalian bisa akses nya di android kalian dengan cara kalian masukkan ip address
yang dan tambah nomer port nya tadi, ketik di browser hp anda, contoh:
```
192.168.51.13:8000
```
maksud angka 8000 adalah port yang kalian buka untuk memberikan akses.

dan selesai, itu aja sih semoga bermanfaat dan buat pengingat gweh juga ini kalo lupa, hehe :3
<hr>
btw disini ada alternatif lain untuk pyserver, namanya [live server](https://github.com/tapio/live-server) kelebihannya adalah **FITUR LIVE RELOAD**

jadi jika ada perubahan di file nya kita tidak
perlu buka dan tutup port lagi karena dengan fitur live reload halaman web akan langsung
terupdate dengan sendirinya. Hal ini sangat membantu saat kalian apalagi bagi saya yang ingin mengatur dpi yang cocok untuk pengguna android :)

## RANGKUMAN CEPAT
1. Hentikan Service firewall
2. cari ip address local anda
3. buka server dengan pyserver atau live server
4. Anda tinggal masukkan ip anda dan port nya
5. Selesai :)
