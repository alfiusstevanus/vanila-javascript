// ===================
function init(){
    let nama = 'alfius'
    function tampilNama(){
        console.log(nama)
    }
    tampilNama()
}
init()


// ==================
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatMalam = ucapkanSalam('Malam')
selamatPagi('alfius')
selamatMalam('sandhika')