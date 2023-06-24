//callback
// synchronus callback

// function tampilkanPesan(callback){
//     const nama = prompt('Masukan nama: ')
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`))



// Promise, async & await
const coba = new Promise((resolve, reject) => {
    const waktu = 5000
    if(waktu < 5000){
        setTimeout(() => {
            resolve('selesai')            
        }, waktu);
    } else{
        reject('kelamaan')
    }
})
// coba
//     .then((coba) => console.log(coba))
//     .catch((coba) => console.log(coba))

function cobaPromise(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai')
        },2000)
    })
}

// async & await
async function cobaAsync(){
    try {
        const coba = await cobaPromise()
        console.log(coba)        
    } catch (error) {
        console.log(error)
    }
}
cobaAsync()