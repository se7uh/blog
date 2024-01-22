---
layout: post
title: Mengatasi Cloudflare Warp error DNS lookup failure di Linux
date: 2024-01-23 01:32:25 0500
categories: [Tutorial, Linux]
tags: [Wifi]
---

Jadi saat saya menggunakan Fedora 39 dan memasang Cloudflare Warp,
saya dapat error **DNS lookup failure** di status Zero Trust Client.

Untuk cara mengatasinya kalian tambahkan kode dibawah ini ke `/etc/systemd/resolved.conf` :
```sh
ResolveUnicastSingleLabel=yes
```

setelah itu kalian restart service nya:
```sh
sudo systemctl restart systemd-resolved.service
```

sc : [Reddit](https://www.reddit.com/r/CloudFlare/comments/12yrbkz/comment/joy2dx0/?utm_source=share&utm_medium=web2x&context=3)¹, [GitHub](https://github.com/cloudflare/cloudflare-docs/blob/production/content/cloudflare-one/faq/teams-troubleshooting.md#warp-on-linux-shows-dns-connectivity-check-failed-with-reason-dnslookupfailed)²