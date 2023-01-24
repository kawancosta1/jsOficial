// let i = 0;
// //a gente cria a variável fora da estrutura de repetição

// while(i <= 10){
// console.log(i);
// i++;
// }
//essa função está disponivel no mdm
function random(min,max){
    const r =Math.random()* (max - min) + min;
    //o floor arredonda pra baixo e o round é pra cima ou pra baixo
    return Math.floor(r);
}
//criei var pois teria que repetir o código no while e isso não é correto
const min = 1;
const max = 50
let rand = random(min,max)
console.log(rand)

//enquanto rand não for igual a dez, faça e usamos o while quando não sabemos com a quantidade que estamos trabalhando, como por exemplos números aleatórios, como fizemos
while(rand !== 10){
    rand = random(min,max)
    console.log(rand)
}

console.log('PREFIRO O DO WHILE!!')

//O DO WHILE FAZ O CÓDIGO E EDEPOIS VERIFICA, O WHILE NÃO
do{
    rand = random(min,max)
    console.log(rand)
}while(rand!==10)