//o query selector pega o primeiro elemento com a tal classe ou id que ele achar
const paragrafos = document.querySelector('.paragrafos')
//pegar todos os p
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const back = estilosBody.backgroundColor


for(let p of ps){
    p.style.backgroundColor = back
    p.style.color = '#fff'
}
