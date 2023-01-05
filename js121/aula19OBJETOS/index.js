
/*const array = [1,2,3]
array.push(4);
array[0] = 'luiz';
//isso não pode
array = 'outra';
*/

//OBJETOS possuem atributos e metodos
const pessoa1 = {
nome: 'kawan',
sobrenome: 'costa',
idade:18
};

console.log(pessoa1.idade)


const pessoa2 = {
    nome:'luiz',
    sobrenome:'miranda',
    idade:55
}

//funnção cria pessoa

function cria (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

//aqui eu coloquei no console mas eu poderia atribuir a uma variável
console.log(cria('isabely','silveira', 16))

const pessoa01 = cria('junior','francisco',28)

console.log(pessoa01)
//posso mudar os atributos 

console.log(pessoa01.idade)

//posso criar funções dentro de objetos, usando o this para referenciar o objeto
const pessoa7 = {
    nome:'denis',
    sobrenome:'souza',
    idade:18,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando um "ola mundo!", e a minha idade atual é ${this.idade}`)
    },
    incrementaIdade() {
    this.idade++
    }
}

pessoa7.fala();