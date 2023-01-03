//IEEE 754-2008
let num = 1;//number
 let num2 =  2.5;//number
 let num3 = 'ola';

/*
 //se eu colocar o 2 ele vai me dar a versão binária
console.log(num.toString(2) + num2);
*/

//para arredondar, o 2 é quantas casas decimais
let num1 = 10.6436436377
console.log(num1.toFixed(2));//10.64

//verificar se é inteiro
console.log(Number.isInteger(num1))//true

console.log(Number.isNaN(num3))

let num4 = 0.7
let num5 = 0.1

num4 += num5;//0.8
num4 += num5;//0.9
num4 += num5;//vai dar 0.9999999999...
//para corrigir isso faça:

num4 = parseFloat(num4.toFixed(2))

console.log(Number.isSafeInteger(num4))

//essa imprecisão é por causa desse padão IEEE 754-2008

//ou poderia fazer assim:

num4 = ((num4 * 100) + (num5 * 100)) / 100;

//fazendo a conta na unha mesmo, que é mais complexo