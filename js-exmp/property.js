function AmbilObject() {
    var mobil = {
        type: "Sedan", //type merupakan PROPERTY: NILAI PROPERTY
        harga: 0,
        warna: "merah",
        tahun: [2001,2004,2008,2012] //penambahan terletak disini
    }
    // console.log(mobil);
    mobil.warna = "biru", //perubahan pada object property
    console.log(mobil.warna);
}   

AmbilObject();