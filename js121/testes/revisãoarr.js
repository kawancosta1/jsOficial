const pessoas = ['kawan','yago','isabely','joão','eduardo','gabriel']

//ele apaga o conteúdo dos arrays
delete pessoas[2]

//indice que começa,o indice que apaga, elementoAdd,elemento,Add
//nomes.splice(0,-1)

//o elemento removido pode ser recebido por uma var

//simulando o pop tirando o ultimo elemento
const removidos = pessoas.splice(-1,1)

//add no indice 2
//const adicionados = pessoas.splice(2,0,'zabureta')
console.log(pessoas)

//simulando o push
pessoas.splice(pessoas.length,0,'juliasdsad')
//simulando o unshift
pessoas.splice(0,0,'copodevidro2')

//CONCATENANDO ARRAYS

const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1.concat(a2, [7,8,9], 'kawan');
console.log(a3)

//podemos usar o rest também

const a4 = [...a1, ...a2, ...'kawan',...[1,2,3]]