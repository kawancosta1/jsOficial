// let i = 0;
// //a gente cria a variável fora da estrutura de repetição

// while(i <= 10){
// console.log(i);
// i++;
// }
//essa função está disponivel no mdm
function random(min,max){
    const r =Math.random().toFixed(0)* (max - min) + min;
    //o floor arredonda pra baixo e o round é pra cima ou pra baixo
    return Math.floor(r);
}
//criei var pois teria que repetir o código no while e isso não é correto
const min = 1;
const max = 50
let rand = random(min,max)
console.log(rand)

while(rand !== 10){
    rand = random(min,max)
    console.log(rand)
}