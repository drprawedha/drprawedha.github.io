// Nilai tinggi badan siswa
var tinggiSiswa1 = 170;
var tinggiSiswa2 = 165;
var tinggiSiswa3 = 175;

// Menentukan siswa dengan tinggi tertinggi
var tinggiTertinggi = Math.max(tinggiSiswa1, tinggiSiswa2, tinggiSiswa3);

console.log("Siswa dengan tinggi badan tertinggi:");

if (tinggiTertinggi === tinggiSiswa1) {
    console.log("- Siswa 1 (" + tinggiSiswa1 + " cm)");
}
if (tinggiTertinggi === tinggiSiswa2) {
    console.log("- Siswa 2 (" + tinggiSiswa2 + " cm)");
}
if (tinggiTertinggi === tinggiSiswa3) {
    console.log("- Siswa 3 (" + tinggiSiswa3 + " cm)");
}

// Urutan tinggi badan siswa dari tertinggi ke terpendek
var tinggiSiswa = [tinggiSiswa1, tinggiSiswa2, tinggiSiswa3];
tinggiSiswa.sort(function(a, b){return b - a});
console.log("Urutan tinggi badan siswa dari yang tertinggi ke terpendek adalah: " + tinggiSiswa.join(", "));
