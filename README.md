# 🚀 Olyx Project Hub & Launcher

> Central Developer Portal & Command Center for **olyxmintabansos-byte** (`olyx`).

Situs portal interaktif modern bergaya *Cyber-Minimalist Dark Mode* yang berfungsi sebagai gerbang utama untuk mengakses repositori dan web application karya **olyx**.

---

## ⚡ Fitur Utama

- **Dual-Action Project Showcase:**
  Setiap kartu proyek membuka modal detail beranimasi halus dengan **2 tombol utama**:
  - 🚀 **Buka Live Demo** (Akses langsung ke GitHub Pages atau hosted web app)
  - 💻 **Buka Source Code / Repo** (Menuju ke repository GitHub resmi)
- **One-Click Quick Clone:**
  Salin perintah `git clone https://github.com/...` dalam 1 kali klik langsung dari modal.
- **Spotlight Command Palette (`Ctrl + K`):**
  Pencarian cepat berbasis keyboard shortcut layaknya Raycast / MacOS Spotlight.
- **Multi-Category Filter:**
  Filter berdasarkan kategori (`Healthcare & Enterprise`, `Fintech & SaaS`, `Growtopia Tools`, `AI & Utilities`, `Gaming & Others`).
- **Live Demo Toggle:**
  Saring proyek yang memiliki live demo dalam satu kali klik.
- **Modern Responsive Design:**
  Tampilan responsif penuh di desktop, tablet, dan smartphone (modal menjadi bottom-sheet adaptif).
- **GitHub Pages Ready:**
  Build static ringan dan otomatis dideploy dengan GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Cyber Dark Theme + Glassmorphism)
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS Keyframes
- **Deployment:** GitHub Pages / Vercel

---

## 📦 Menjalankan Secara Lokal

```bash
# 1. Masuk ke direktori
cd olyx-project-hub

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173`.

---

## 🌐 Build Production

```bash
npm run build
```

Hasil build static akan berada di direktori `dist/` dan siap diunggah ke hosting static mana pun.
