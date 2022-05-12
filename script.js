// ===Luas-Keliling Persegi===

function luasPersegi() {
    var panjangPersegi = parseInt (document.getElementById('panjangPersegi').value);
    var lebarPersegi = parseInt (document.getElementById('lebarPersegi').value);
    
    var luasPersegi = panjangPersegi * lebarPersegi;

    console.log(luasPersegi);
    alert('Luas Persegi = ' + luasPersegi);
}

function kelilingPersegi() {
    var panjangPersegi = parseInt (document.getElementById('panjangPersegi').value);
    var lebarPersegi = parseInt (document.getElementById('lebarPersegi').value);

    var kelilingPersegi = 2 * (panjangPersegi + lebarPersegi);

    console.log(kelilingPersegi);
    alert('Keliling Persegi = ' + kelilingPersegi);
}

// ===Luas-Keliling Segitiga===

function luasSegitiga() {
    var alasSegitiga = parseInt (document.getElementById('alasSegitiga').value);
    var tinggiSegitiga = parseInt (document.getElementById('tinggiSegitiga').value);
    
    var luasSegitiga = alasSegitiga * tinggiSegitiga / 2;
    
    console.log(luasSegitiga);
    alert('Luas Segitiga = ' + luasSegitiga);
}

function kelilingSegitiga() {
    var sisiSegitigaA = parseInt (document.getElementById('sisiSegitigaA').value);
    var sisiSegitigaB = parseInt (document.getElementById('sisiSegitigaB').value);
    var sisiSegitigaC = parseInt (document.getElementById('sisiSegitigaC').value);
    
    var kelilingSegitiga = sisiSegitigaA + sisiSegitigaB + sisiSegitigaC;
    
    console.log(kelilingSegitiga);
    alert('Keliling Segitiga = ' + kelilingSegitiga);
}

// ===Luas-Keliling Lingkaran===

function luasLingkaran() {
    var jariJari = parseInt (document.getElementById('jariJari').value);

    var luasLingkaran = 22 / 7 * jariJari * jariJari;

    console.log(luasLingkaran);
    alert('Luas Lingkaran = ' + luasLingkaran);
}

function kelilingLingkaran() {
    var jariJari = parseInt (document.getElementById('jariJari').value);
    
    var kelilingLingkaran = 22 / 7 * 2 * jariJari;

    console.log(kelilingLingkaran);
    alert('Keliling Lingkaran = ' + kelilingLingkaran);
}

// ===Konversi Suhu===

var celcius = 10;

var celciusKelvin = celcius + 273;

console.log(celciusKelvin);
