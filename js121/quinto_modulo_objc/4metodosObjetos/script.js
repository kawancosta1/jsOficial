const produto = {
    nome:'caneca', preco: 1.8,
}



//ambos apontando pro mesmo endereço na memória
//JEITO ERRADO
// const outraCoisa = produto;
// outraCoisa.nome = 'kaka'
// outraCoisa.preco = 2.5;

//spread operator

const outraCoisa = {...produto,material:'porcelana'}

console.log(outraCoisa)

//ctravar o objeto
Object.freeze(produto)


//outra maneira de copiar objetos 
const caneca = Object.assign({},produto, {material:'porcelana'})

//propriedades
Object.defineProperty(caneca,'nome', {
    //não da pra mudar
    writable: false,
    //não da pra apagar ou reconfigurar a propriedade
    configurable: false,
    value:'caneca de porcelana'
})
//mostrar as chaves do objeto[array]
console.log(Object.keys(caneca))

//VER A SITUAÇÃO DAS PROPRIEDADES DO DEFINEPROPRIETY
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

console.log(Object.values(produto))

//pega a propriedades e seus valores
Object.entries(produto)

//se aplicarmos ao entries uma estrutura de repetição, aí amigos vamos poder fazer destructuring
for([valor,valor2] of Object.entries(produto)){
console.log(valor,valor2)
}