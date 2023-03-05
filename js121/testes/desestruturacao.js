// let a = 'A'
// let b = 'B'
// let c = 'C'
 

// var numeros = [1,2,3]

// //atribuição via desestruturação
// [a,b,c] = numeros

const numeros = [12,244,35343,144,55,65,70]
//operador rest
const num = [primeiro,segundo,terceiro,...resto] = numeros
console.log(primeiro,segundo,terceiro)

//posso pular os numeros
const num2 = [um, , , , ,seis] = numeros

const numeros2 = [[1,2,3], [4,5,6]]
console.log(numeros2[1][2])//to pegando o seis, que o segundo agrupamento de numeros é o indice 1 e o seis é o indice 2
