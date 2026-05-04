import { SGACrypt } from './module/sgaCrypt.js';

const sgaCrypt = new SGACrypt();

sgaCrypt.encrypt("contoh enkripsi", {method: "caesar", shift: "2"});
sgaCrypt.decrypt("ᓵ𝙹リℸ𝙹⍑ ᒷリꖌ∷╎!¡ᓭ╎");