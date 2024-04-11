
// Mendefinisikan N, jumlah angka yang ingin Anda cetak
var N = 11;

// Inisialisasi variabel angka_sebelumnya dengan 0
var angka_sebelumnya = 0;

// Loop untuk menghasilkan urutan angka
for (var i = 1; i <= N; i++) {
    // Tambahkan nilai (i - 1) ke angka_sebelumnya
    angka_sebelumnya += i - 1;

    // Cetak angka_sebelumnya
    console.log(angka_sebelumnya);
}