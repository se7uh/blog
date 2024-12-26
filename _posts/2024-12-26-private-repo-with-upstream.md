---
layout: post
title: Cara Mudah Membuat Repo Private dan Tetap Terhubung ke Repo Asli di GitHub
date: 2024-12-26 00:00:00 0500
categories: [Tutorial, Git]
tags: [Git, GitHub, Repository]
---

Assalamualaikum kawan! Kali ini saya mau berbagi cara membuat repository private di GitHub, tapi tetap bisa menarik perubahan dari repository original. Ini sangat berguna kalau kamu ingin menjaga privasi kode sambil tetap mengikuti perkembangan dari repository aslinya.

## Langkah-langkah

### 1. Clone Repository Original
Pertama, clone repository original yang ingin kamu jadikan sumber:

```bash
git clone https://github.com/username/original-repo.git
```
> Gantilah `https://github.com/username/original-repo.git` dengan URL repository aslinya.

### 2. Buat Repository Private
- Masuk ke GitHub dan buat repository baru.
- Pastikan repository ini diatur sebagai private.
- Jangan tambahkan file README, .gitignore, atau lisensi untuk saat ini agar tidak menimpa konfigurasi repository yang akan di-push.

### 3. Ubah Remote Repository
Setelah clone selesai, ubah remote repository agar mengarah ke repository private milikmu:

```bash
cd original-repo
git remote remove origin
git remote add origin https://github.com/your-username/your-private-repo.git
```
> Gantilah `https://github.com/your-username/your-private-repo.git` dengan URL repository private yang baru saja kamu buat.

### 4. Push ke Repository Private
Push semua perubahan ke repository private:

```bash
git push -u origin main
```
> Gantilah `main` dengan nama branch default jika berbeda.

### 5. Tambahkan Remote Upstream untuk Original Repository
Untuk tetap bisa pull perubahan dari original repository, tambahkan remote baru sebagai upstream:

```bash
git remote add upstream https://github.com/username/original-repo.git
```

Dengan begitu, kamu memiliki dua remote:
- `origin` untuk repository private milikmu.
- `upstream` untuk repository original.

### 6. Pull Update dari Original Repository
Setiap kali repository original diperbarui, kamu bisa menarik perubahan ke repository private dengan cara:

```bash
git fetch upstream
git merge upstream/main
```
> Gantilah `main` dengan branch yang sesuai di repository original.

### 7. Optional: Sinkronisasi dengan Branch
Jika ada branch tambahan di repository original yang ingin kamu sinkronkan, ulangi langkah-langkah di atas untuk branch tersebut.

Dengan cara ini, kamu bisa tetap menjaga repository private sambil menarik perubahan dari repository original kapan saja. Semoga bermanfaat dan selamat mencoba! :) 