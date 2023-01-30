const nome = ['luiz',' Otavio','kawan'];

for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

console.log('#####')
//ou

//serve para percorrer strings ou arrays pelo indice, ou seja, não precisa incrementar o i é o indice mesmo diferente do for of que pega o valor direto
for(let i in nome){
    console.log(nome[i])
}

console.log('#####')
for(let valor of nome){
    //ao invés de retornar o indice ele retorna o valor diretamenbte
    console.log(valor);
}
console.log('#####')


//independente dos parâmentros ele vai pegar nessa ordem ai
nome.forEach(function(valor, indice, array){console.log(valor,indice,array)})
console.log('#####')

//for in functiona com objetos

const pessoa = {
    nome:'luiz',
    sobrenome:'otavio'
};

for(let chave2 in pessoa){
    console.log(chave2,pessoa[chave2])
}