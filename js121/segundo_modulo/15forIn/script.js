const frutas = ['pera', 'maça', 'uva'];

//for in lê os indices ou chaves dos objetos
for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome:'kawan',
    idade:18,
    sobrenome:'costa'
};
for(let chave1 in pessoa){
    console.log(chave1, pessoa[chave]);
}

//podemos acessar nome assim:

const chave = 'nome'
console.log(pessoa[chave])