//const numbers = [1,2,3,4,5,6,8]

// o map vai percorrer todo o array multiplicando cada valor, ele vai percorrer o array inteiro e em cada valor ele vai fazer uma função
//const doublenumber = numbers.map(function(elem){
   // return elem * 2
//})

//ou

//const doublenumber2 = numbers.map(num => num *2)

// PASSAR DE FIRESEUQ PARA CELCIUS

const fahrenheit = [0,32,45,50,75,80,120]
//o round é pra rredondar
const celcius = fahrenheit.map(elem => Math.round((elem - 32) * 5/9));
console.log(celcius)