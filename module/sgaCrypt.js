const sga = {
    A:"ᔑ", B:"ʖ", C:"ᓵ", D:"↸", E:"ᒷ",
    F:"⎓", G:"⊣", H:"⍑", I:"╎", J:"⋮",
    K:"ꖌ", L:"ꖎ", M:"ᒲ", N:"リ", O:"𝙹",
    P:"!¡", Q:"ᑑ", R:"∷", S:"ᓭ", T:"ℸ",
    U:"⚍", V:"⍊", W:"∴", X:" ̇/", Y:"||", Z:"⨅"
};

const sgaDecrypt = {
    "ᔑ": "A", "ʖ": "B", "ᓵ": "C", "↸": "D", "ᒷ": "E",
    "⎓": "F", "⊣": "G", "⍑": "H", "╎": "I", "⋮": "J",
    "ꖌ": "K", "ꖎ": "L", "ᒲ": "M", "リ": "N", "𝙹": "O",
    "!¡": "P", "ᑑ": "Q", "∷": "R", "ᓭ": "S", "ℸ": "T",
    "⚍": "U", "⍊": "V", "∴": "W", " ̇/": "X", "||": "Y", "⨅": "Z"
};

export class SGACrypt {
    encrypt(text, {method = "normal", shift = 0} = {}) {
        if (!text) return;
        let result = "";
        method = method.toLowerCase();

        for (let i = 0; i < text.length; i ++) {
            let char = text[i];
            
            if (char.match(/[a-z]/i)) {
                if (method == "normal") {
                    result += sga[char.toUpperCase()]
                } else if (method == "caesar") {
                    let code = text.charCodeAt(i);

                    if (code >= 65 && code <=90 ) {
                        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                    } else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                    }

                    result += sga[char.toUpperCase()];
                }
            } else if (char.match(/\s/)) {
                result += " ";
            }
        }

        console.log("Hasil enkripsi: ", result);
        return result;
    }

    decrypt(text, { method = "normal", shift = 0 } = {}) {
        if (!text) return;

        let result = "";
        method = method.toLowerCase();

        for (let i = 0; i < text.length; i++) {

            if (text[i] === " ") {
                result += " ";
                continue;
            }

            let decrypted;

            let three = text.slice(i, i + 3);

            if (sgaDecrypt[three]) {
                decrypted = sgaDecrypt[three];
                i += 2;
            } else {
                let two = text.slice(i, i + 2);
                if (sgaDecrypt[two]) {
                    decrypted = sgaDecrypt[two];
                    i += 1;
                }
            }

            if (!decrypted) {
                decrypted = sgaDecrypt[text[i]];
            }

            if (!decrypted) continue;

            if (method === "normal") {
                result += decrypted;
                
            } else if (method === "caesar") {
                let code = decrypted.charCodeAt(0);
                result += String.fromCharCode(
                    ((code - 65 - shift + 26) % 26) + 65
                );
            }
        }

        console.log("Hasil dekripsi:", result);
        return result;
    }
}