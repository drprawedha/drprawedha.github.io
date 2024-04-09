function NestedObject() {
    var mahasiswa = {
        nama: "rhesa",
        
        ipk: {
            semester1 : 3.6,
            semester2 : 3.7,
            semester3 : 3.9,
            semester4 : 3.4,
            semester4 : 3.5,
            semester6 : 3.26,
        }
            

    }
    console.log(mahasiswa.ipk.semester6); //pemanggilan utama, dari sini
}

NestedObject()