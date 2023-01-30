let num1 = 9.54567;
let num2 = Math.floor(num1);//9
///ele arredonda para baixo o floor
console.log(num2)

let num3 = Math.ceil(num1);
//arredonda para cima
console.log(num3)
//ele arredonda para o numero mais proximo se é 9.49 ele vai para 9 se é 9.50 ele vai apra 10
let num4 = Math.round(num1)

//ele vai pegar o maior numero
console.log(Math.max(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))

//ele vai pegar o menor numero  
console.log(Math.min(1,2,3,4,5,6,7,8,9,10))

// ele gera um numero aleatorio
//console.log(Math.ramdom());

//entre 10 e cinco, o vezes dez é pq vem em decimal e o menos e mais cinco é para representar entre 10 e cinco
const aleatorio = Math.round(Math.random() *(10 - 5) + 5)
console.log(aleatorio)

//eu coloquei para ele arredondar e não ter decimais mas poderia ser entre 20 e 10
const aleatorio2 = Math.round(Math.random() *(20 - 10) + 10)
console.log(aleatorio2)

//você faz a raiz quadrada assim:
let numRaiz = 9 ** 0.5;

