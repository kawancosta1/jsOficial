const numeros = [5,55,80,1,2,3,5,8,7,11,15,22,27]

const numerosPares = numeros.filter((valor1) => valor1 % 2 === 0).map((valor2) => valor2 * 2).reduce((acumulador,valor3) => { return acumulador + valor3},0)

//Então, o filter vai filtrar os numeros pares,o map vai modificar os valores sem afetar o tamanho e o reduce vai juntar tudo
console.log(numerosPares)
//primeiro resultado são os pares