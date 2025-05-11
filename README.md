# Brilliance-Bot 🚀

Script ini digunakan untuk mengotomatiskan tugas di Brilliance Global Airdrop, termasuk bergabung dengan airdrop, mengklaim hadiah, dan mining menggunakan token dari `tokens.txt`.

![photo_2025-05-12_01-22-36](https://github.com/user-attachments/assets/b255c839-fe0b-4269-aa3d-bbe138574550)

---

## 📌 Fitur
- ✅ **Auto Join Airdrop + Claim**: Bergabung otomatis ke airdrop dan klaim hadiah dengan token JWT.
- ⛏️ **Mining**: Jalankan tugas mining dengan jeda 12 jam, menampilkan jumlah token sebelum mulai.
- 🔌 **Dukungan Proxy**: Gunakan proxy HTTP atau SOCKS5 dari `proxy.txt` untuk koneksi aman.
- 📊 **Manajemen Token**: Muat banyak token dari `tokens.txt` untuk pemrosesan massal.
- 🔑 **Info Token**: Tampilkan jumlah token yang dimuat sebelum mining dimulai.

---

## 🚀 Cara Penggunaan

### 1. **Clone Repository Ini**
```sh
git clone https://github.com/airdrop-888/Brilliance-Bot.git
cd Brilliance-Bot
```

---

### 2. **Install Dependensi**
Pastikan `package.json` memiliki `"type": "module"`. Jalankan:
```sh
npm install axios chalk@4 cfonts http-proxy-agent socks-proxy-agent readline-sync
```

Contoh `package.json`:
```json
{
  "name": "brilliance-bot",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.mjs"
  },
  "dependencies": {
    "axios": "^1.7.7",
    "chalk": "^4.1.2",
    "cfonts": "^3.3.0",
    "http-proxy-agent": "^7.0.2",
    "socks-proxy-agent": "^8.0.4",
    "readline-sync": "^1.4.10"
  }
}
```

---

### 3. **Siapkan File Token**
- Buat file `tokens.txt` di direktori proyek dan isi dengan token JWT, satu per baris. Contoh:
```sh
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

- (Opsional) Buat `proxy.txt` jika ingin menggunakan proxy. Contoh:
```sh
http://username:password@host:port
socks5://username:password@host:port
```

---

### 4. **Jalankan Script**
```sh
node index.mjs
```
Atau, jika `package.json` memiliki skrip `start`:
```sh
npm start
```

---

### 5. **Ikuti Instruksi**
- **Penggunaan Proxy**: Masukkan `y` untuk menggunakan proxy (memerlukan `proxy.txt`) atau `n` untuk lewati.
- **Pilih Aksi**:
  - `1`: Auto Join Airdrop + Claim 📋
  - `2`: Mining (menampilkan jumlah token sebelum mulai) ⛏️
- Script akan berjalan otomatis sesuai pilihan Anda.

**Contoh Output**:
```
Script coded by - @balveerxyz | Channel Tele: t.me/airdroplocked | Brilliance Task Management ✨
Mau menggunakan proxy? (y/n): n
Loaded 0 proxies
Loaded 3 tokens from tokens.txt 🔑
Pilih penggunaan bot:
1. Auto Join Airdrop + Claim
2. Mining
Pilihan (1/2): 2
Starting mining with 3 tokens 🔑
✅ Mining successful with token eyJhbGciOi...! ⛏️
Details: BINC: 60.0, USD: 0.0
⏲️ Waiting for 12 hours before next mining...
```

---

## ⚠️ Disclaimer
Gunakan script ini dengan bijak dan sesuai aturan Brilliance Global Airdrop. Developer tidak bertanggung jawab atas penyalahgunaan atau banned akun.

---

## 🤝 Kontribusi
Ingin berkontribusi? Silakan fork repo ini dan ajukan pull request! Kami terbuka untuk ide baru dan perbaikan.

---

## 📞 Kontak
Jika ada pertanyaan, hubungi: [@balveerxyz](https://t.me/balveerxyz)

Join channel Telegram gratis: [t.me/airdroplocked](https://t.me/airdroplocked)
