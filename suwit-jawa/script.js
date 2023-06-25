function getPilihanComputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah'
    if( comp >= 0.34 && comp < 0.67 ) return 'orang'
    return 'semut'
}

function getHasil(comp,player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}
const pGajah = document.querySelector('.gajah')
const pSemut = document.querySelector('.semut')
const pOrang = document.querySelector('.orang')

//cara lebih efektif
let skorKomp=0, skorPlayer=0;
const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = pil.className
    const imgComputer = document.querySelector('.img-komputer')
    
    putar()    
    setTimeout(function(){
    hasil = getHasil(pilihanComputer, pilihanPlayer)
    imgComputer.setAttribute('src', pilihanComputer + '.png')
    const info = document.querySelector('.info')
    info.innerHTML = hasil
    if(hasil === 'MENANG!' ){
        skorPlayer++
    } else if(hasil === 'KALAH!'){
        skorKomp++
    }
    const skorKompElement = document.querySelector('.skorKomp')
    const skorPlayerElement = document.querySelector('.skorPlayer')
    skorKompElement.innerHTML = skorKomp
    skorPlayerElement.innerHTML = skorPlayer
},2500)
    })
})

function putar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah','semut','orang']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai >2500){
            clearInterval
            return
        }
        imgComputer.setAttribute('src', gambar[i++] + '.png')
        if(i==gambar.length) i = 0
    }, 100)
}

