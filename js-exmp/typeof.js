function checkTypeDataNumber() {
    var data = 45
    console.log(typeof(data));
 }

function checkTypeDataString() {
    var data = "mahasiswa"    
    console.log(typeof(data));
}

function checkTypeDataArray() {
    var data = [1,2,3,4,5]   
    console.log(typeof(data));
}

function checkTypeDataObject() {
    var data = {
        nama: "rhesa",
        noabsen: 7
    }    
    console.log(typeof(data));
}

checkTypeDataNumber();
checkTypeDataString();
checkTypeDataArray(); //dicetak sebagai obeject
checkTypeDataObject();