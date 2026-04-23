# Standard Galactic Alphabet Cryptography
<div align="center">

![HTML](https://img.shields.io/badge/HTML-orange)
![TailwindCSS](https://img.shields.io/badge/CSS-TailwindCSS-blue)
![DaisyUI](https://img.shields.io/badge/CSS-DaisyUI-blue)
![DOM](https://img.shields.io/badge/JavaScript-DOM-yellow)
![ExpressJS](https://img.shields.io/badge/JavaScript-ExpressJS-yellow)

</div>

Sebuah program kriptografi sederhana dengan kombinasi algoritma Caesar Cipher dan huruf Standard Galactic Alphabet.

## Daftar Isi
- [Overview](#standard-galactic-alphabet-cryptography)
- [Contoh Penggunaan](#contoh-penggunaan)
    - [Sebagai modul](#sebagai-modul)
    - [Sebagai web app](#sebagai-web-app)
- [Cara Instalasi](#cara-instalasi)
- [Kekurangan yang diketahui](#masalah-yang-diketahui)

## Contoh Penggunaan
### Sebagai Modul
```js
// Impor modul
import { SGACrypt } from './module/sgaCrypt.js';

// Buat instance baru
const sgaCrypt = new SGACrypt();

// Contoh enkripsi
sgaCrypt.encrypt("contoh enkripsi",);

// Contoh dekripsi
sgaCrypt.decrypt("ᓵ𝙹リℸ𝙹⍑ ᒷリꖌ∷╎!¡ᓭ╎");
```
```bash
Hasil enkripsi:  ᓵ𝙹リℸ𝙹⍑ ᒷリꖌ∷╎!¡ᓭ╎
Hasil dekripsi: CONTOH ENKRIPSI
```


Enkripsi Caesar Cipher
```js
// Contoh enkripsi
sgaCrypt.encrypt(
    "contoh enkripsi menggunakan caesar cipher",
     { method: "caesar", shift: 2 }
);

// Contoh dekripsi
sgaCrypt.decrypt(
    "ᒷᑑ!¡⍊ᑑ⋮ ⎓⊣ᒲℸꖌ∷⚍ꖌ 𝙹⊣!¡╎╎∴!¡ᓵᒲᓵ!¡ ᒷᓵ⊣⚍ᓵℸ ᒷꖌ∷⋮⊣ℸ", 
    { method: "caesar", shift: 2 }
);
```

```bash
Hasil enkripsi:  ᒷᑑ!¡⍊ᑑ⋮ ⊣!¡ᒲℸꖌ∷⚍ꖌ 𝙹⊣!¡╎╎∴!¡ᓵᒲᓵ!¡ ᒷᓵ⊣⚍ᓵℸ ᒷꖌ∷⋮⊣ℸ
Hasil dekripsi: CONTOH DEKRIPSI MENGGUNAKAN CAESAR CIPHER
```

### Sebagai Web App
<div align="center">
    Enkripsi
    <img src="/public/images/encryption.png" width="50%">
    <br />
    Dekripsi
    <img src="/public/images/decryption.png" width="50%">
</div>

## Cara Instalasi
Clone repositori
```bash
git clone https://github.com/smurfish-py/sgacrypt
```

Install dependensi
```bash
npm install
```

Jalankan program
```bash
# Eksekusi file app.js 
npm run start 

# Menjalankan web-app
npm run start/web-app
```

## Masalah yang Diketahui
- Belum bisa men-decode huruf X dalam Standard Galactic Alphabet