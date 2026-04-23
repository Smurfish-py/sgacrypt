import { SGACrypt } from './module/sgaCrypt.js';

const sgaCrypt = new SGACrypt();

sgaCrypt.encrypt("contoh enkripsi menggunakan caesar cipher", { method: "caesar", shift: 2 });
sgaCrypt.decrypt("ᒷᑑ!¡⍊ᑑ⋮ ⎓⊣ᒲℸꖌ∷⚍ꖌ 𝙹⊣!¡╎╎∴!¡ᓵᒲᓵ!¡ ᒷᓵ⊣⚍ᓵℸ ᒷꖌ∷⋮⊣ℸ", { method: "caesar", shift: 2 });