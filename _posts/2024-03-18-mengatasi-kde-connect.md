---
layout: post
title: Cara mengatasi KDE Connect tidak mendeteksi Perangkat
date: 2024-03-18 01:32:25 0500
categories: [Tutorial, Linux]
tags: [KDE]
---
Jika KDE Connect tidak mendeteksi perangkat padahal sudah satu Wifi, mungkin karena masalah firewall.
Untuk mengatasi masalah tersebut anda dapat mengikuti cara berikut.

Sebelum itu pilih firewall yang sedang anda gunakan:
1. [ufw](#ufw)
2. [firewalld](#firewalld)
3. [iptables](#iptables)

## ufw
Untuk firewall **ufw** ikuti cara ini:
```terminal
sudo ufw allow 1714:1764/udp
sudo ufw allow 1714:1764/tcp
sudo ufw reload
```

## firewalld
Untuk firewall **firewalld** ikuti cara ini:
```terminal
sudo firewall-cmd --permanent --zone=public --add-service=kdeconnect
sudo firewall-cmd --reload
```

## iptables
Untuk firewall **iptables** ikuti cara ini:
```terminal
sudo iptables -I INPUT -i <yourinterface> -p udp --dport 1714:1764 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables -I INPUT -i <yourinterface> -p tcp --dport 1714:1764 -m state --state NEW,ESTABLISHED -j ACCEPT

sudo iptables -A OUTPUT -o <yourinterface> -p udp --sport 1714:1764 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables -A OUTPUT -o <yourinterface> -p tcp --sport 1714:1764 -m state --state NEW,ESTABLISHED -j ACCEPT
```
> `<yourinterface>` bisa dilihat lewat perintah `ifconfig` / `ip addr`
{: .prompt-info }

Refrensi: [userbase.kde.org](https://userbase.kde.org/KDEConnect#I_have_two_devices_running_KDE_Connect_on_the_same_network.2C_but_they_can.27t_see_each_other)