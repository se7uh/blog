---
layout: post
title: Cara Install Arch Linux (cepet what whet)
date: 2022-11-23 04:36:25 0500
categories: [Tutorial, Linux]
tags: [Linux, Arch Linux]
---

pertama siapkan partisi yg kosong dan format jadi ext4
```terminal
mkfs.ext4 /dev/sda4
```
> Disini contoh nomer partisi yg saya gunakan adalah **sda4**
{: .prompt-info }
setelah itu kalian mount ke /mnt
```terminal
mount /dev/sda4 /mnt
```
setelah masuk **sambungkan ke ethernet atau bisa tethering usb**
dan kalian install menggunakan pacstrap :
```terminal
pacstrap /mnt base base-devel linux linux-firmware vim
```
lanjut kalian gunakan perintah genfstab untuk gen(erator)fstab untuk kalian
```terminal
genfstab -U /mnt >> /mnt/etc/fstab
```
selanjutnya kalian gunakan arch-chroot untuk masuk ke arch linux nya
```terminal
arch-chroot /mnt /bin/bash
```
lanjut kita install paket yg dibutuhkan nanti
```terminal
pacman -S networkmanager grub
```
dan kita enable networkmanager nya agar setiap masuk linux langsung jalan
```terminal
systemctl enable NetworkManager
```
> **Perhatikan besar-kecilnya penulisan huruf**
{: .prompt-danger }
setelah itu kita install grub untuk setiap komputer dihidupkan masuk ke linux boot manager
```terminal
grub-install /dev/sda
```
> **Disini kita installnya di hardisknya, bukan cuma di partisinya aja, jadi gk ush nomer**
{: .prompt-warning }
lanjut kita buat folder untuk penempatan grub confignya
```terminal
mkdir -p /boot/grub
```
dan kita jalankan perintah dibawah untuk dapat grub confignya
```terminal
grub-mkconfig -o /boot/grub/grub.cfg
```
lanjut kita gunakan perintah passwd untuk password root nya
```terminal
passwd
```
dan sekarang kita gen(erator) locale (bahasa)
```terminal
vim /etc/locale.gen
```
dan karena saya menggunakan bahasa inggris saya uncomment (Menghilangkan tanda pagar/#)
di bagian `en_US.UTF-8`.

setelah itu kalian ketik perintah locale-gen untuk merefresh settingan locale (bahasa) nya
```terminal
locale-gen
```
lanjut kita ketik
```terminal
vim /etc/locale.conf
```
disana kita ketik locale yang kita uncomment sebelumnya, karena saya uncomment `en_US.UTF-8` jadi
saya ketik gini
```
LANG=en_US.UTF-8
```
setelah itu kita akan setting hostname kita.<br> kalian tidak tahu hostname?? hostname itu yg saya
garis bawahi ini lho => username@<b><u>hostname</u></b><br>
oke, kembali ke cara settingnya. kita ketik:
```terminal
vim /etc/hostname
```
dan disana kalian masukkan hostname sesuka kalian.<br>

lanjut kita set timezone kita, ketik:
```terminal
ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
```
> fungsi ln disini adalah untuk melink kan jakarta tsb ke /etc/localtime.
{: .prompt-info }

setelah itu kalian **exit (CTRL + D)**

dan kalian umount partisi tsb
```terminal
umount -R /mnt
```
dan restart/reboot
```terminal
reboot
```
sekarang kalian tinggal copot USB kalian, sekarang kalian bisa masuk arch linux
karena kalian belum set username kalian hanya bisa login menggunakan root.
jika kalian dusuruh masukkan username masukkan root, contoh:

**username: root**<br>
**password: {password yg kalian masukkan tadi}**

dan selamat, tapi kalian tinggal install Desktop Enviroment aja, tapi lanjut di next
tutor ya kawan, pegel nulis aq..

credit : [@Mental outlaw](https://www.youtube.com/c/mentaloutlaw)
