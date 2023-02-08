//o reduce reduzi o valor do array a um avlor unico, ou seja se eu quiser somar ou juntar de alguma forma o tamanho do array, usarei o reduce e a diferença do reduce pros outros é que o reduce tem o acumulador 


const numeros = [5,55,80,1,2,3,5,8,7,11,15,22,27]

const total = numeros.reduce((acumulador,valor)=> {
    acumulador += valor
console.log(acumulador,valor)
})
//temps que colocar o 0 pois é o primeiro valor enviado ao acumlador, pois antes ele tava considerando o 5 e ignorando o fato dele ser impar
//o reduce tem o acumulador



//reduce pares, ou seja, vai reduzir os valores do array aos pares, ou seja o novo array só vai pegar os numeros parees 
// const total2 = numeros.reduce((acumulador,valor) => {
// //o acumulador é um array então precisamos adicionar valores nele 
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador;
// },0)

// console.log(total)

const pessoas = [ 
    {nome:'luiz',idade:62},//esse é o mais velho
    {nome:'maria',idade:23},
    {nome:'eduardo',idade: 55},
    {nome:'leticia',idade: 19},
    {nome:'rosana',idade: 32},
    {nome:'wallace',idade: 47}

]

const maisVelha = pessoas.reduce((acumulador,valor) => {
    //o acumulador é o primeiro elemento e o valor é o 2º
    if(acumulador.idade > valor.idade) return acumulador;
   
})

console.log(maisVelha)