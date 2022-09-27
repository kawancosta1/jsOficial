let fnum = document.querySelector('#fnum')
let num = []
let tab = document.querySelector('#adicionar')
let menor = document.querySelector('#menor')
let maior = document.querySelector('#maior')
let media =  document.querySelector('#media')
let soma =  document.querySelector('#soma')
 function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
return true
    }else{
        return false
    }

 }

 function Inlista(n, array){
//o -1 indica que o valor não foi encontrado na lista
if(array.indexOf(Number(n)) != -1){
    return true
}else{
//agora se ele for encontrado 
return false
}

 }

// essa is numero e in lista eu vou criar essas funções ainda
function adicionas(){
    //o push é pra add valores
   
    //function isNumero()
    if(isNumero(fnum.value) && !Inlista(fnum.value, num )){
        num.push(Number(fnum.value))
item = document.createElement('option')
// aqui eu to add numeros digitados no array, por isso passei pra number

item.text = `você adicionou ${fnum.value}`


tab.appendChild(item)
    }else{ alert('valor invalido ou já encontrado na lista')
}
fnum.value = ''
fnum.focus()

// pra focar na text box lá


}


function finalizar(){
    if(num == '' || num.lengh == 0){
        alert('digite um numero')
    }else{
        menor.innerHTML = `o menor numero é ${Math.max(num)}`
    }
    
}