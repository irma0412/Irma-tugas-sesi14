# 🚀 Tugas Sesi 14 - Mobile Automation Testing (Appium)
Repo ini berisi tugas sesi 14 dari program pelatihan Digital Skola Batch 10, dengan fokus pada pengujian otomatisasi aplikasi mobile Android menggunakan Appium dan WebdriverIO (WDIO).
# Deskripsi Skenario Pengujian
**Skenario yang diuji:**
- Akses screen:
  -App > Alert Dialogs > Text Entry dialog
- Input:
-Field Name (diisi bebas)
-Field Password (diisi bebas)
- Validasi elemen tampil (isDisplayed)
- Klik tombol OK setelah input selesai

**Output yang dibutuhkan:**
- Screenshot hasil CMD (terminal) saat test selesai
- Screenshot Allure report dari browser

# ⚙️ Tools yang Digunakan
- Appium
- WebdriverIO (WDIO)
- Mocha
- Chai (expect assertion)
- Allure Reporter (untuk laporan hasil uji)

# ▶️ Cara Menjalankan Test

1. Install dependencies
- npm install
2. Jalankan Appium server
- (bisa via Appium Inspector atau CLI)
3. Jalankan test
- npx wdio run wdio.conf.js
4. Generate & buka laporan Allure
- npx allure generate allure-results -o allure-report
- npx allure open allure-report

# Catatan Penting
- File test/appdemo.test.js hanya file latihan dan tidak termasuk tugas
- Folder allure-results/ dan allure-report/ sudah di-.gitignore
- Branch yang digunakan: master
- Project ini hanya memuat 1 skenario test, sesuai instruksi tugas LMS
  
# Dibuat oleh:
- Irma Suryani — Fresh Graduate & QA Enthusiast
- Tugas Sesi 14 — Digital Skola Batch 10
