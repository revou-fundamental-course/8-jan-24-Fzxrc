function calculate() {
    // Mendapatkan nilai panjang sisi dari input
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    // Memastikan nilai yang dimasukkan adalah angka positif
    if (sideLength <= 0 || isNaN(sideLength)) {
        alert("Masukkan nilai panjang sisi yang valid.");
        return;
    }

    // Menghitung luas persegi
    var area = sideLength * sideLength;

    // Menghitung keliling persegi
    var perimeter = 4 * sideLength;

    // Menghitung Volume kubus
    var volume = sideLength * sideLength * sideLength

    // Menampilkan hasil di elemen dengan id "result"
    document.getElementById("areaResult").innerHTML = area;
    document.getElementById("perimeterResult").innerHTML = perimeter;
    document.getElementById("volumeResult").innerHTML = volume;
}

function reset() {
    // Mengosongkan nilai input dan hasil
    document.getElementById("sideLength").value = "";
    document.getElementById("areaResult").innerHTML = "";
    document.getElementById("perimeterResult").innerHTML = "";
}