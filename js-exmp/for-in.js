function PanggilObject() {
    var mahasiswa = {
        nama : "Rhesa",
        umur : 23,
        jurusan : "Sistem Komputer", 
        semester : 6
    }
    for (var x in mahasiswa) { //digunakan untuk perulangan kegiatan pengambilan data di mahasiswa
        console.log(mahasiswa[x]);
    }
}

PanggilObject();