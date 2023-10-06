function hitungBiayaSewa(waktuSewa, tarifPerJam) {
    let biayaSewa = waktuSewa * tarifPerJam;
    return biayaSewa;
}

let waktuSewa = 5; 
let tarifPerJam = 10000;

let biayaTotal = hitungBiayaSewa(waktuSewa, tarifPerJam);
console.log("Biaya sewa untuk " + waktuSewa + " jam adalah: " + biayaTotal + " " + "Rupiah");
