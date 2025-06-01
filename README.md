# 🌱 Hijaukan Negeri - Platform Volunteer Penanaman Pohon

Sebuah platform berbasis web yang dirancang untuk mendukung dan mengelola kegiatan volunteer penanaman pohon dan konservasi lingkungan. Aplikasi ini memungkinkan pengguna untuk berpartisipasi dalam kegiatan penanaman pohon, bergabung dengan komunitas, dan mengakses informasi tentang tempat konservasi.

## 🚀 Fitur Utama

- 🌿 **Halaman Utama** — Landing page informatif dengan statistik dan timeline kegiatan
- 👥 **Manajemen Pengguna** — Sistem autentikasi lengkap (login/register)
- 📋 **Artikel & Kegiatan** — Posting dan berbagi kegiatan penanaman pohon
- 🌳 **Tempat Konservasi** — Informasi lengkap lokasi konservasi dengan fitur pencarian dan filter
- 👥 **Komunitas** — Platform untuk bergabung dan berinteraksi dengan komunitas peduli lingkungan
- 📊 **Profil Pengguna** — Halaman profil dengan riwayat kontribusi

## 🧩 Tech Stack

### Frontend
- ⚛️ **React.js** — Library JavaScript untuk UI
- 🎨 **Tailwind CSS** — Framework CSS untuk styling
- 🧭 **React Router** — Manajemen routing
- 🖼️ **React Icons** — Koleksi ikon
- 📡 **Axios** — HTTP client untuk API requests

### Backend
- 🚀 **Node.js & Express** — Runtime JavaScript dan framework backend
- 🗄️ **MongoDB** — Database NoSQL
- 🔐 **JWT** — Autentikasi berbasis token
- 📁 **Multer** — Upload file dan gambar
- 🔒 **Bcrypt** — Enkripsi password

## 📁 Struktur Proyek

```
📦 tree-planting-volunteer
 ┣ 📂client
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets        # Gambar dan media
 ┃ ┃ ┣ 📂components    # Komponen React reusable
 ┃ ┃ ┣ 📂pages         # Halaman utama aplikasi
 ┃ ┃ ┣ 📂api          # Konfigurasi dan service API
 ┃ ┃ ┗ 📜App.jsx      # Entry point aplikasi
 ┃ ┣ 📜package.json
 ┃ ┗ 📜tailwind.config.js
 ┣ 📂server
 ┃ ┣ 📂models         # Schema MongoDB
 ┃ ┣ 📂routes         # API endpoints
 ┃ ┣ 📂controllers    # Logic bisnis
 ┃ ┣ 📂middleware     # Custom middleware
 ┃ ┣ 📂uploads        # File upload storage
 ┃ ┗ 📜server.js      # Entry point server
 ┗ 📜README.md
```

## 🛠️ Instalasi dan Penggunaan

### Persyaratan
- Node.js (v18+)
- MongoDB
- npm atau yarn

### Langkah Instalasi

1. Clone repositori
```bash
git clone https://github.com/yourusername/tree-planting-volunteer.git
cd tree-planting-volunteer
```

2. Install dependencies frontend
```bash
cd client
npm install
```

3. Install dependencies backend
```bash
cd ../server
npm install
```

4. Setup environment variables
- Buat file `.env` di folder server
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Jalankan aplikasi

Terminal 1 (Backend):
```bash
cd server
npm start
```

Terminal 2 (Frontend):
```bash
cd client
npm run dev
```

## 🌟 Fitur yang Akan Datang

- 📱 Aplikasi mobile
- 🗺️ Integrasi peta interaktif untuk lokasi konservasi
- 📊 Dashboard analytics untuk impact tracking
- 🤝 Sistem donasi dan crowdfunding
- 🎯 Gamifikasi untuk meningkatkan engagement

## 👥 Kontribusi

Kami sangat menghargai kontribusi dari komunitas. Jika Anda ingin berkontribusi:

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Kontak

Email: info@hijaukannegeri.id
Website: https://hijaukannegeri.id

---

Made with 💚 for a greener future
