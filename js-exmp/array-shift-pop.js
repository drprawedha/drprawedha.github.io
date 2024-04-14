function panggilShiftPop() {
    var kota = ["jakarta", "bandung", "semarang", "surabaya"];
    console.log(kota);
console.log("===========");   
    kota2=kota.shift() //hapus depan
    kota3=kota.pop() //hapus belakang
    console.log("hasil shift :", kota2);
    console.log("hasil pop : ",kota3);
    return kota;
}

console.log(panggilShiftPop()); // output
