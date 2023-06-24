// Array
let coba = ['satu','dua','tiga']
let [a, b, c] = coba

console.log(a)  //'satu'
console.log(b)  // 'dua'
console.log(c)  // 'tiga'

// object
let mhs = {
    nama: 'alfius',
    umur: 22,
    email: 'alfius@gmail.com'
}

let {nama, umur, email} = mhs
console.log(nama)   // 'alfius'
console.log(umur)   // 22
console.log(email)   // 'alfius@gmail.com'

// object tanpa deklarasi
// ({nama, umur, email} =  { 
//     nama: 'alfius',
//     umur: 22,
//     email: 'alfius@gmail.com'
// });
// console.log(nama)   // 'alfius'
// console.log(umur)   // 22
// console.log(email)   // 'alfius@gmail.com'

// object ke variable baru
let mhs2 = {
    nama: 'junaidi',
    umur: 44,
    email: 'junaidi@gmail.com'
}

let {nama: n, umur: u, email: e} = mhs2
console.log(n)   // 'junaidi'
console.log(u)   // 44
console.log(e)   // 'junaidi@gmail.com'

// mengambil field object , setelah dikirim sebagai parameter untuk function
let mhs3 = {
    id: 123,
    nama: 'alfius',
    umur: 22,
    email: 'alfius@gmail.com'
}

function getIdmhs({id}){ //mhs dipecah menjadi id saja
    return id
}
console.log(getIdmhs(mhs3)) //output 123


//swab items
// let a1 = 1
// let a2 = 2
// [a1,a2] = [a2,a1] //swaping





// function
function coba2(){
    return [1,2]
}
let [y,z] = coba2()
console.log(y) // output = 1

//banyak params
let [p,...values] = [1,2,4,5,6,6,8]
console.log(p) // output = 1
//sisanya ditampung di array values[]
console.log(values) // output = [2,4,5,6,6,8]

// return array urutan berpengaruh
function calculator(a, b){{ 
    return [a + b, a - b , a * b , a / b]
}}

let [tambah, kurang, kali, bagi = 'tidak ada'] = calculator(5,2)
console.log(tambah)
console.log(kurang)
console.log(kali)
console.log(bagi)


// return array urutan tidak berpengaruh
function calculator2(a, b){{ 
    return{
        tambahh: a+b,
        kurangg: a-b,
        kalii: a*b,
        bagii: a/b
    }
}}

let [kurangg, tambahh, bagii, kalii = 'tidak ada'] = calculator(5,2)
console.log(tambahh)
console.log(kurangg)
console.log(kalii)
console.log(bagii)


// function argument

let mhs4 = {
    nama: 'junaidi',
    umur: 44,
    nilai:{
        tugas:80,
        uts:90,
        uas:98
    },
    email: 'junaidi@gmail.com'
}
function cetakMhs ({nama,umur,nilai:{tugas,uts,uas}}){
    return `Halo nama saya ${nama} dan umur ${umur} tahun dan nilai uas saya ${uas}`
}

console.log(cetakMhs(mhs4))

// array destructuring with rest parameter
const kelompok = ['alfius','tumpal','ramdhan','julianto','junaidi']
const [ketua, wakil, ...anggota] = kelompok
console.log(ketua) //alfius
console.log(wakil)  //tumpal
console.log(anggota) //['ramdhan','julianto','junaidi']
//cara diatas juga bisa di object, nanti ...anggota nya berupa object juga output nya
