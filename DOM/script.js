// // dom selection
// const judul = document.getElementById('judul')
// const p2 = document.querySelector('.p2')

// // dom manipulation

// // manipulasi elemen 
// // Element.innerHTML
// judul.innerHTML = '<em>Alfius Stevanus</em>'
// // Element.style.<property>
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'
// // Element.setAtribut()
// judul.setAttribute('name','judul')
// // Element.getAtribut()
// judul.getAttribute('name')
// // Element.removeAtribut()
// judul.removeAttribute('name')
// // Element.classList -> add,remove,toggle,item,contains,replace
// p2.classList.add('label')
// p2.classList.remove('label')
// p2.classList.toggle('biru-muda')
// p2.classList.item(1) //mencari urutan class ke n, mulai dari 0
// p2.classList.contains('biru-muda')
// p2.classList.replace('p2','biru-muda') // ganti class p2 menjadi biru-muda

// //membuat elemen baru
// const pBaru = document.createElement('p')
// const textPBaru = document.createTextNode('Paragraf baru broo')
// // simpan tulisan ke pBaru
// pBaru.appendChild(textPBaru)
// //simpan pBaru ke akhir sectionA
// const sectionA = document.getElementById('a')
// sectionA.appendChild(pBaru)

// // membuat elemen baru dan taroknya mau ditengah jgn diakhir
// const liBaru = document.createElement('li')
// const teksLiBaru = document.createTextNode('Item baru')
// liBaru.appendChild(teksLiBaru)
// // parent tempat akan disisipkan
// const ul = document.querySelector('section#b ul')
// //item dimana akan disisipkan sebelumnya
// const liAfter = ul.querySelector('li:nth-child(2)')
// ul.insertBefore(liBaru,liAfter)

// // remove elemen
// sectionA.removeChild(pBaru)

// // replace elemen
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')

// // elemen yg mau nge-replace
// const h2Baru = document.createElement('h2')
// const teksH2Baru = document.createTextNode('Judul baru bro')
// h2Baru.appendChild(teksH2Baru)
// sectionB.replaceChild(h2Baru,p4) // h2Baru akan mereplace p4


//event
const p3 = document.querySelector('.p3')
const p2 = document.querySelector('.p2')
const p4 = document.querySelector('.p4')
//cara1 event handler 
function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue'
}
function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue'
}
p2.onclick = ubahWarnaP2

//cara2 eventlistener ---mending pake ini
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul')
    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('Item baru')
    liBaru.appendChild(teksLiBaru)
    ul.appendChild(liBaru)
})
