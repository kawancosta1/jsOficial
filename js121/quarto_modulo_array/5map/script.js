const numeros = [5,50,80,1,2,3,5,6,7,11,15,22,27]
//map altera o valor do array, usando o valor do arrayu original(duplicar por exemplo)

//esses metodos filter,reduce e map usam callback e o map não diminui o array original, diferente do filter, ele pega os valores e os reutiliza para chegar aonde ele quer 
const numEmdobro = numeros.map((valor) => valor * 2)

console.log(numEmdobro)

const pessoas = [ 
    {nome:'luiz',idade:62},
    {nome:'maria',idade:23},
    {nome:'eduardo',idade: 55},
    {nome:'leticia',idade: 19},
    {nome:'rosana',idade: 32},
    {nome:'wallace',idade: 47}

]

const nomes = pessoas.map(obj =>  obj.nome)

const idades = pessoas.map(obj => obj.idade)

//adicionando um id em cada objeto, é só colocar objeto.addPropriedade = valor
const comIds = pessoas.map((obj,indice) => {//se fizermos isso obj.id = indice, vai afetar o array original, então devemos copiar esse array para uma var assim:

const novoObj = {...obj}
novoObj.id = indice
})

console.log(nomes.concat(idades))

//assim que você pega pelo indice, cada valor do array é um obj, então é array[indice].propriedade
console.log(pessoas[2].nome)