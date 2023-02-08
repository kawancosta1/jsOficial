const numeros = [5,50,80,1,2,3,4,5,8,11,15,22,27];

//só de usar no filter ela vai receber: (na iteração) valor,indice,array(literal) function callbackF(valor,indice,array){return valor > 10(se for true ele vai se não...)}

//o filter não edita o array origial, por isso temos que criar outro array

//callback é quando uma função é passada como argumento para função
const numFiltrado = numeros.filter((valor) => valor > 10)

//o filter não precisa do return, ele só precisa do check para ver se é true, por isso não retornamos o valor, mas sim o booleano
console.log(numFiltrado)

//FILTER SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU A MESMA QUANTIDADE

// retorna as pessoas que tem o nome com 5 letras ou mais
//retorna as pessoas com mais de 50 anos 
//retorna as pessoas cujo o nome termina com letra a
const pessoas = [ 
    {nome:'luiz',idade:62},
    {nome:'maria',idade:23},
    {nome:'eduardo',idade: 55},
    {nome:'leticia',idade: 19},
    {nome:'rosana',idade: 32},
    {nome:'wallace',idade: 47}

]
const pessoasGrande = pessoas.filter((obj) => obj.nome.length >= 5
);
const pessoasComMais50 = pessoas.filter((obj) => obj.idade > 50)

//passar para minusculo e checar se termina com a
const pessoasA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith(a))

console.log(pessoasGrande)

