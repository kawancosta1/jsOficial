
let valores = [0, 1, 2, 3, 4, 5, 6]
// para colocar em ordem
valores.sort()
/*

for( let pos = 0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem valor ${valores[pos]}  ` )
}
*/
// !!OU PODEMOS USAR O FOR IN!!

// o for in é usados em vetores ou objetos

// "para cada posição dentro de num(o in é dentro)"
for( let pos in valores ){
    console.log(`a posição ${pos} tem valor ${valores[pos]}  ` )
}

// buscar valores dentro de um vetor

// se tiver ele vai falar o indice que está o 7 no vetor valores
let numero = 7;
let posicao = valores.indexOf(numero)

if(numero == -1){
    console.log("o valor não foi encontrado")
}else{
    console.log(`foi encontrada na posição: ${posicao}`)
}

console.log(`a posição do ${numero} no vetor valores é ${posicao }`)