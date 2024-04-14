function panggilSplice() {
    var kota = ['jakarta','bandung','semarang','jogja','surabaya','denpasar']
    console.log(kota);
    // kota.splice(3,0,'solo')
    // kota.splice(3,1,'solo')
    // kota.splice(3,2,'solo')
    kota.splice(2,4)            //untuk menghapus (nomor data , berapa data setelahnya yang dihapus)
    // kota.splice(3,1)
    return kota;
}

console.log(panggilSplice());
