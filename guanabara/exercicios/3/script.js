
// testar de ta pegando
/*
function aparecer(){
    console.log(inicio.value, fim.value, passo.value)
}
*/
function contador(){
    var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');
var res = document.getElementById('res');


if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('ta faltando coisa(faltam dados)')
}else{
    res.innerHTML = 'contando.... '
    // eu tenho que converter os inputs para number
     let i = Number(inicio.value)
     let p = Number(passo.value)
     let f = Number(fim.value)
     if(p <= 0){
         p = 1;
     }
if(i < f){
   
// contagem crescente
     for( let c = i; c <= f; c += p){
         res.innerHTML += ` ${c} `
     }
    //  contagem decrescente
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} `
        }
    }
}
}