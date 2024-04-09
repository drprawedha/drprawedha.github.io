function detailMahasiswa() {
    var mahasiswa = {
        nama : "RHESA",
        namalengkap : "Dhantel Rhesa Prawedha",
        jurusan : "teknik komputer",
        tahunmasuk : 2011,
        tingkat : "DIPLOMA-3"
    }
    for (var x in mahasiswa) {
        console.log(mahasiswa[x]);
    }
}
detailMahasiswa()