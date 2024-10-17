---
layout: post
title: Cara mengubah Keymap di linux
date: 2024-10-17 01:32:25 0500
categories: [Tutorial, Linux]
tags: [keyboard]
---

Untuk mengubah keymap di linux, anda membutuhkan paket `evtest`.

### Instalasi
#### Debian/Ubuntu
```
sudo apt install evtest
```

#### Fedora
```
sudo dnf install evtest
```


Setelah kalian memasang paket tersebut kalian bisa menjalankan evtest dulu
```
sudo evtest
```

setelah itu kalian pilih device input keyboard kalian.

setelah itu kalian ketik tombol keyboard kalian dan nanti akan muncul event code dari karakter tersebut.

Kalian bisa menggunakan Virtual Keyboard jika keyboard kalian tidak bisa.

Sekarang untuk mengubah cukup mudah, Setelah kalian mendapatkan `Scan Code` dan `Key Code`, kalian bisa menjalankan seperti perintah berikut

```
sudo setkeycodes [scancode] [keycode] [scancode] [keycode] ...
```

Contoh: Perintah di bawah ini memetakan ulang tombol ctrl kanan (scancode — 9d) ke tombol Koma (keycode — 51) dan tombol alt kanan (scancode — b8) ke tombol titik (keycode — 52).

```
sudo setkeycodes 9d 51 b8 52
```


### Otomatis berjalan ketika boot

Untuk melakukan ini kalian butuh membuat service baru
```
sudo nano /etc/systemd/system/setkeycodes.service
```

Dan pastekan kode ini didalamnya

```
[Unit]
Description=Remap broken keys

[Service]
Type=oneshot
ExecStart=/usr/bin/setkeycodes [scancode] [keycode] [scancode] [keycode] ...

[Install]
WantedBy=multi-user.target
```

Dan gunakan perintah ini untuk menjalankan saat booting

```
sudo systemctl enable setkeycodes.service
```

Dan Selamat, Anda berhasil mengubah Keymap di linux.

Refrensi: [Medium](https://firelyfreeze.medium.com/remapping-keyboard-keys-in-linux-31d41b199f2b)
