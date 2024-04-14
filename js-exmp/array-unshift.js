function panggilUnshift() {
    var kota = ['jakarta','bandung']
    console.log(kota);
    kota.unshift('semarang'); // perhatikan penggunaan unshift disini
    return kota;
}

console.log(panggilUnshift());