---
layout: post
title: Akses port Linux di Android
date: 2022-11-07 04:36:25 0500
categories: [Linux, Tutorial]
tags: [Linux, Android]
---
Assalamualaikum kawan jadi kali ini saya mau buat tutorial cara akses port di linux di android.

**PENTING : KALIAN HARUS MENGGUNAKAN 1 WIFI YANG SAMA**

## Cara Pertama 
yaitu kalian buka port di linux. di kasus saya karena saya pakai 
arch linux, bawaan nya pakai iptables, tinggal ketik
```terminal
sudo iptables -A INPUT -p tcp --dport 8000 -j ACCEPT
```
kemmudian restart service iptables
```terminal
sudo systemctl restart iptables
```
## Cara Kedua
setelah sudah kalian cari ip address local anda dengan cara
```terminal
ifconfig | grep "inet " | grep -v 127.0.0.1
```
disana kalian akan melihat ip address kalian yang ada di sebelah tulisan **inet**

## Cara Ketiga
jika sudah, kalian aktifkan/buka servernya dengan pyserver di folder yang kalian inginkan
```terminal
python3 -m http.server
```
## Cara Keempat
dan setelah itu kalian bisa akses nya di android kalian dengan cara kalian masukkan ip address
yang dan tambah nomer port nya tadi, ketik di browser hp anda, contoh:
```
192.168.51.13:8000
```
maksud angka 8000 adalah port yang kalian buka untuk memberikan akses.

dan selesai, itu aja sih semoga bermanfaat dan buat pengingat gweh juga ini kalo lupa, hehe :3
<hr>

Disini Saya membuat script untuk kalian jika ingin langsung tanpa perlu ngetik banyak hehe:3
```bash
# Mendeklarasikan IP sebagai perintah/command
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1)

# Membuka port dengan port 8000
# disini kalian bisa ganti port terserah kalian
sudo iptables -A INPUT -p tcp --dport 8000 -j ACCEPT
sudo systemctl restart iptables

# Menuggu Merestart iptables
echo ""
echo "Menuggu iptables terestart"
sleep 3s

# Menampilkan IP
echo ""
echo "Lihat ip anda dibawah disebelah 'inet' : "
echo $IP

# membuka terminal baru dan membuka port dengan pyserver
# disini kalian bisa ganti terminal kesukaan kalian
# karena saya pakai xfce jadi pakai xfce4-terminal
xfce4-terminal -e 'python3 -m http.server'

# Selesai
echo ""
echo "pyserver berjalan di terminal yg baru terbuka"
```

btw disini ada alternatif lain untuk pyserver, namanya [live server](https://github.com/tapio/live-server) kelebihannya adalah **FITUR LIVE RELOAD**

jadi jika ada perubahan di file nya kita tidak
perlu buka dan tutup port lagi karena dengan fitur live reload halaman web akan langsung
terupdate dengan sendirinya. Hal ini sangat membantu saat kalian apalagi bagi saya yang ingin mengatur dpi yang cocok untuk pengguna android :)

## RANGKUMAN CEPAT
1. <a href="#cara-pertama">buka port di linux</a>
2. <a href="#cara-kedua">cari ip address local anda</a>
3. <a href="#cara-ketiga">buka server dengan pyserver atau live server</a>
4. <a href="#cara-keempat">Anda tinggal masukkan ip anda dan port nya</a>
5. Selesai :)

#### credit : [groovypost](https://www.groovypost.com/howto/open-ports-in-linux/)