// Mendefinisikan nilai tinggi badan siswa
var tinggiSiswa1 = 170;
var tinggiSiswa2 = 185;
var tinggiSiswa3 = 175;

// Menggunakan if else untuk mengetahui siswa dengan tinggi badan tertinggi
if (tinggiSiswa1 > tinggiSiswa2 && tinggiSiswa1 > tinggiSiswa3) {
    console.log("Siswa 1 memiliki tinggi badan tertinggi.");
} else if (tinggiSiswa2 > tinggiSiswa1 && tinggiSiswa2 > tinggiSiswa3) {
    console.log("Siswa 2 memiliki tinggi badan tertinggi.");
} else if (tinggiSiswa3 > tinggiSiswa1 && tinggiSiswa3 > tinggiSiswa2) {
    console.log("Siswa 3 memiliki tinggi badan tertinggi.");
} else {
    console.log("Ada beberapa siswa yang memiliki tinggi badan yang sama tertinggi.");
}

// Menampilkan hasil urutan tinggi badan dari tertinggi ke terpendek
var tinggiSiswa = [tinggiSiswa1, tinggiSiswa2, tinggiSiswa3];
tinggiSiswa.sort(function(a, b){return b - a});
console.log("Urutan tinggi badan siswa dari yang tertinggi ke terpendek adalah: " + tinggiSiswa.join(", "));

// penggunaan return masih belum dipahami