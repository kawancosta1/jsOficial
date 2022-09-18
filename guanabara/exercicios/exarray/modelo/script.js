let fnum = document.querySelector('#fnum')
let num = []
let tab = document.querySelector('#adicionar')
let menor = document.querySelector('#menor')
let maior = document.querySelector('#maior')
let media =  document.querySelector('#media')
let soma =  document.querySelector('#soma')


// essa is numero e in lista eu vou criar essas funções ainda
function adicionaSelect(){
    if(isNumero(fnum.value) && !Inlista(num.value)){
item = document.createElement('option')
// aqui eu to add numeros digitados no array, por isso passei pra number
num = Number(fnum.value)
item.text = `você adicionou ${fnum.value}`


tab.appendChild(item)
    } alert('valor invalido ou já encontrado na lista')

}

function finalizar(){
    if(num == '' || num.lengh == 0){
        alert('digite um numero')
    }else{
        menor.innerHTML = `o menor numero é ${Math.max(num)}`
    }
    
}