function AmbilObject() {
    var mobil = {
        type: "Sedan", //type merupakan PROPERTY: NILAI PROPERTY
        harga: 0,
        warna: "merah",
        tahun: [2001,2004,2008,2012] //penambahan terletak disini
    }
    console.log(mobil);
    mobil.type = "jeep",
    mobil.harga = 20000
    mobil.tahun = 2020, //menambah object property
    mobil.warna = "biru", //perubahan pada object property
    console.log("===== data setelah diubah =======");
    console.log(mobil);
    console.log(mobil.tahun);
}   

AmbilObject();