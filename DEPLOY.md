# 🚀 Panduan Deploy ke GitHub Pages

Ada 2 cara mudah untuk mempublikasikan **Olyx Project Hub** ke akun GitHub `olyxmintabansos-byte`.

---

## Opsi 1: Otomatis via GitHub Actions (Sangat Direkomendasikan)

1. **Inisialisasi Git dan Push ke Repository Baru:**
   ```bash
   cd C:\Users\L480\.gemini\antigravity\scratch\olyx-project-hub
   git init
   git add .
   git commit -m "feat: initial commit for Olyx Project Hub & Launcher"
   git branch -M main
   ```

2. **Buat Repository di GitHub via GitHub CLI atau Web:**
   ```bash
   gh repo create olyx-project-hub --public --source=. --remote=origin --push
   ```
   *(Atau buat repo manual di web GitHub bernama `olyx-project-hub`, lalu jalankan:)*
   ```bash
   git remote add origin https://github.com/olyxmintabansos-byte/olyx-project-hub.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages di Pengaturan Repository:**
   - Masuk ke repository GitHub: `https://github.com/olyxmintabansos-byte/olyx-project-hub`
   - Buka menu **Settings** -> **Pages**
   - Di bagian **Build and deployment > Source**, pilih **GitHub Actions**.
   - Setiap kali melakukan `git push`, GitHub Actions otomatis melakukan build dan deploy!

4. **Situs Anda akan aktif di:**
   👉 `https://olyxmintabansos-byte.github.io/olyx-project-hub/`

---

## Opsi 2: Manual Deploy / Subdomain Portfolio Utama

Jika Anda ingin website ini menjadi root GitHub Pages Anda (`https://olyxmintabansos-byte.github.io`):
1. Buat repository dengan nama khusus: `olyxmintabansos-byte.github.io`
2. Push kode sumber atau hasil folder `dist/` ke repo tersebut.
3. Website akan langsung aktif di URL utama tanpa subfolder!
