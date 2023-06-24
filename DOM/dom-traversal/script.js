// dom traversal
//parentNode, parentElement, nextSibling, nextElementSibling, previousSibling, previousElementSibling
// kakek = class1.parentElement.parentElement
// const close = document.querySelectorAll('.close')
// gunakan for
// for(let i=0; i<close.length; i++){
//     close[i].addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none'
//     })
// }
// gunakan forEach
// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()
//         e.stopPropagation()
//     })
// })

// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })

const container = document.querySelector('.container')
container.addEventListener('click',function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
        e.stopPropagation()
    }
})