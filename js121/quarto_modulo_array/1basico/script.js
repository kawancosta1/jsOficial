//arrays são valores por referências
const nomes = ['joao', 'eduarda','maria']
//sem o spread(3pontinhos), o que eu fzer em novo reflete em nome(rest)
const novo = [...nomes]

nomes[2] = 'kawan'
//o delete só apaga o valor, não o indice!!!

//para apagar do array é pop(o ultimo elemento) e para receber esse removido
const removido = nomes.pop()

console.log(removido)//kawan
delete nomes[2]

//adiciona no final do array e o unshit no começo
nomes.push('walace')
nomes.push('isabely')
nomes.unshift('denilson')
nomes.unshift('ronaldo')

//fatiar elemento

//do indice 1 ao 2
const novo1 = nomes.slice(1,3);

//para fazer o backspace é assim: 
const apaga = nomes.slice(0,-1)
//tamanho do array menos um

//convertendo string num arrayzin

const nome = 'kawan da silva costa';

//separei cada palavra que tem espaço entre elas. para elas ficarem cada uma como um valor dentro do array



//transformando num array
const nomes2 = nome.split(' ')
























































