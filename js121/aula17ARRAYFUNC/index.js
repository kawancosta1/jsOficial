const alunos = ['luiz', 'maria', 'joão']

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])

console.log(alunos.length)
//gambiarra para add no final do array!!

//alunos[0] = eduardo
//alunos[3] = 'luiza'

//pi

alunos[alunos.length] = 'luiza'
//jeito certo de adicionar no final do array!!

alunos.push('ashará')

//adicionar no começo

alunos.unshift('pedrão do grau')

//remover elemento final do array

const removido = alunos.pop();

//o legal do pop é que podemos salvar o elemento removido numa variável

//remover o primeiro elemento, alterando os indices dos outros elementos, diferente do pop
const primeiroRemovido = alunos.shift();

//quando um valor não existe o js escreve undefined

console.log(alunos[50])

//slice

//o negativo é o total menos 2 dando 1 ou seja do 0 ao 1
console.log(alunos.slice(0, -2))

//alunos é uma instancia de array
console.log(alunos instanceof Array)



