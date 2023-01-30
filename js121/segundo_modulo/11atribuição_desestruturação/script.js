//atribuição via desestruturação, ou seja, utilizar arrays para atribuir a uma var ou let

let a ="A"
let b ="B"
let c ="C"

// [a,b,c] = [b,c,a]

//metodo antigo
// const numeros = [1,2,3,4,5,6,7,8]
// const primeiro = numeros[0]

const numeros = [1,2,3,4,5,6,7,8]
//ai ó nem precisa colocar o indice é só colocar na ordem as variáveis que você quer declarar valores cujo o array possui
const [primeiroNumero,segundoNumero] = numeros;

//rest = ..., ele adiciona o resto num array
const numeros2 = [1000,2000,3000,4000,5000]

//ele atribui na ordem do array, iniciando do 0
const [um,dois,tres,...resto] = numeros2;
console.log(um,dois,tres,resto)

const numero3 = [
//      0       1      2
//   0 1 2   0 1 2  0 1 2
    [1,2,3] [4,5,6] [7,8,9]
]

//a virgula serve para pular um indice
const [dois1,tres1] = numero3

console.log(numero3[1][2])