const nomes = ['maria','joao','eduardo','ganriel','jlia']

const numeros = Number([1,2,2,22,222,222234,557575575])

//slice e splice são diferente pois o splice faz mais coisa

//ordem: indice que começa, quantos elementos remover do array, adicionar elementos
//nomes.splice(indice, delete,elem1,elem2,elem3,elem4)

const removidos = nomes.splice(4, 1)//quero remover o indice quatro e 1 elemento, mas eu posso fazer no negativo (-1,1) tirar um.  e o splice retorna o elemento removido, igual ao pop, mas neste caso ele retorana um array
console.log(nomes, removidos)

//tirar o valor maximo

//adicionar 

nomes.splice(3,0,'luiz')

//substituir

nomes.splice(3,1,'junior')

//simular o shift(tirar o primeiro elemento)

nomes.splice(0,1)

//simular o push

nomes.splice(nomes.length,1,'luiz')