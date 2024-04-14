function panggilSplice() {
    var kota = ['jakarta','bandung','semarang','jogja','surabaya','denpasar']
    console.log(kota);
    // kota.splice(3,0,'solo')
    // kota.splice(3,1,'solo')
    kota.splice(3,2,'solo')
    return kota;
}

console.log(panggilSplice());
