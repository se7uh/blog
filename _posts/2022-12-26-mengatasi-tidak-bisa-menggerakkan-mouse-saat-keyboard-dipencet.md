---
layout: post
title: Mengatasi Mouse Tidak Gerak saat keyboard dipencet
date: 2022-12-27 15:46:25 0500
categories: [Tutorial, Linux]
tags: [Linux, X11]
---

>**Khusus Pengguna X11. Untuk Wayland saya belum tahu.**
{: .prompt-danger }

- Kalian ke terminal dan ketik `xinput`

setelah itu akan keluar seperti ini :
```
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ SynPS/2 Synaptics TouchPad              	id=11	[slave  pointer  (2)]
```

disini kalian cari nama Touchpad kalian, di kasus saya nama nya ada di baris ke-3 dengan **id=11**

- kemudian kalian ketik `xinput list-props 11`

nanti akan keluar banyak teks, nah di sana kalian cari teks ini :
```
	libinput Disable While Typing Enabled (310):	1
	libinput Disable While Typing Enabled Default (311):	1
```
- kalian lihat disana nomer 310. kita set value nomer 310 ke 0, begini perintah full nya :


```terminal
xinput set-prop 11 310 0
```

dan selesai.

Credit : [ScottishTapWater](https://unix.stackexchange.com/a/697672/518631) 
