import { SGACrypt } from "/module/sgaCrypt.js";

const sgaCrypt = new SGACrypt();

// Encryption Logic
const formEnkripsi = document.getElementById("form-enkripsi");
formEnkripsi.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    const metode = e.target.metode.value;
    const shift = e.target.shift.value;
    const result = document.getElementById("result-enkripsi");
    result.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = sgaCrypt.encrypt(input, { method: metode, shift: shift });
    result.appendChild(p);
});

// Decryption Logic
const formDekripsi = document.getElementById("form-dekripsi");
formDekripsi.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    const metode = e.target.metode.value;
    const shift = e.target.shift.value;
 
    const result = document.getElementById("result-dekripsi");
    result.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = sgaCrypt.decrypt(input, { method: metode, shift: shift });
    result.appendChild(p);
});