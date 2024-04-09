function NestedObject() {
    var mahasiswa = {
        nama: "rhesa",
        
        ipk: {
            semester1 : 3.6,
            semester2 : 3.7,
            semester3 : 3.9
        }
            

    }
    console.log(mahasiswa.ipk.semester1); //pemanggilan utama, dari sini
}

NestedObject()