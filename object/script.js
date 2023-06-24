// 1 objek literal
// let mahasiswa = {
//     nama: 'alfius',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// 2 function declaration
// function Mahasiswa(nama,energi){
//     let mahasiswa={}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi
//     mahasiswa.makan = function(porsi){
//                 this.energi += porsi
//                 console.log(`Halo ${this.nama}, selamat makan`)
//             }
//     return mahasiswa
// }

// let alfius = Mahasiswa('alfius',10)
// let junaidi = Mahasiswa('junaidi',15)

// 3 constructor (pake ini aja)
function Mahasiswa(nama,energi){
    // dibelakang layar dibuatkan method prototype
    this.nama = nama
    this.energi = energi
}
Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi
    return `Halo ${this.nama}, selamat makan`
}

let alfius = new Mahasiswa('alfius',10)

// versi konsep class
class Mahasiswa2{
    constructor(nama,energi){
        this.nama = nama
        this.energi = energi
    }

    makan(porsi){
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan`
    }
}
let junaidi = new Mahasiswa2('junaidi',10)
// dibelakang layar tetap menggunakan konsep no 3
