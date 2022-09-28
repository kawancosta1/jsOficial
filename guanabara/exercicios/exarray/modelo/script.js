let fnum = document.querySelector('#fnum')
let num = []

let res = document.querySelector('#res')
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
        //ele vai add no array o valor digitado
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
        let soma = 0
        let media = 0
        let maior = num[0]
        let menor = num[0]
        //da pra fazer aquele for por i++ mas esse é mais facil, que é um laço de percurso para percorrer o array inteiro
        for(let pos in num){
            // o pos é tipo o i ent va somar cada valor de cada indice
            soma += num[pos]
            if(num[pos] > maior){
                maior = pos
            }
            if(num.pos < menor){
                menor = pos
            }
        }
        let total = num.length
       media = soma / tot;
        res.inneforrHTML += `<p> ao todo temos ${total} cadastrados </p>`
        res.innerHTML += `o maior numero é ${maior}<br>`
        res.innerHTML += `o menor numero é ${menor}<br>`
        res.innerHTML += `<p> a soma dos dois é ${ maior + menor} </p>`
        res.innerHTML += `<p> a media entre todos eles é ${media} </p>`

    }
    
}