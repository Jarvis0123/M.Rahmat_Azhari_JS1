//contoh nested if
let nilai = 95;

if (nilai >= 90) {
    console.log("Nilai Anda A");
    console.log("Anda Lulus");
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
    console.log("Anda Lulus");
} else if (nilai >= 70) {
    console.log("Nilai Anda C");
    console.log("Anda Lulus");
} else if (nilai >= 60) {
    console.log("Nilai Anda D");
    console.log("Anda Lulus");
} else {
    console.log("Anda Tidak Lulus");
}

//contoh switch case
let jurusan = "Teknik Informatika";

switch (jurusan) {
    case "Teknik Informatika":
        console.log("Saya adalah mahasiswa jurusan Teknik Informatika.");
        break;
    case "Teknik Elektro":
        console.log("Saya adalah mahasiswa jurusan Teknik Elektro.");
        break;
    case "Teknik Sipil":
        console.log("Sayaadalah mahasiswa jurusan Teknik Sipil.");
        break;
    case "Teknik Mesin":
        console.log("Sayaadalah mahasiswa jurusan Teknik Mesin.");
        break;
    case "Arsitektur":
        console.log("Saya adalah mahasiswa jurusan Arsitektur.");
        break;
    default:
        console.log("Jurusan tidak dikenali.");
}

//contoh for staatetment
let buah = ["Alpukat", "Jeruk", "Pisang", "Mangga", "Pear"];

for (let i = 0; i < buah.length; i++) {
    console.log("Buah di rak-" + (i + 1) + ": " + buah[i]);
}

//contoh while do while
let counterWhile = 1;
while (counterWhile <= 5) {
    console.log("Urutan ke-" + counterWhile + " menggunakan while");
    counterWhile++;
}

let counterDoWhile = 1;
do {
    console.log("Urutan ke-" + counterDoWhile + " menggunakan do-while");
    counterDoWhile++;
} while (counterDoWhile <= 5);

//contoh function
function hitungBiayaSewa(waktuSewa, tarifPerJam) {
    let biayaSewa = waktuSewa * tarifPerJam;
    return biayaSewa;
}

let waktuSewa = 5; 
let tarifPerJam = 10000;

let biayaTotal = hitungBiayaSewa(waktuSewa, tarifPerJam);
console.log("Biaya sewa untuk " + waktuSewa + " jam adalah: " + biayaTotal + " " + "Rupiah");
