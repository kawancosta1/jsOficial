//'' "" `` string literal
//[] array literal

const pessoa = {
    nome: 'luiz',
    sobrenome:'otávio'
};

const chave = 'nome'
// acessando com conotação de colchetes
console.log(pessoa[chave])

//há construtores de array = new array

const pessoa1 = new Object();
pessoa1.nome = 'kawan'
pessoa1.sobrenome = 'costa'
pessoa1.idade = 30;

//se eu quiser apagar a pessoa

// delete pessoa1.nome;

pessoa1.falanome = function(){
    return `${this.nome} está falando o seu nome`
};
pessoa1.getDataNascimento = function() {
    const dataAtual =  new Date();
return dataAtual.getFullYear() - this.idade;
}


console.log(pessoa1.falanome(), pessoa1.getDataNascimento())

// para ver as propriedades
for(let chave in pessoa1){
    console.log(pessoa1[chave])
}

//Pessoa é o construtor de objetos, ou seja, no console aparece o contrututor idependente da var atrelada
function Pessoa(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.falaTudo = () => `${this.nome, this.sobrenome} tem ${this.idade}`
}


//o new cria um objeto vazio e ela vai pegar o this e vai fazer ele atrelar o this a função e também, por isso não precisamos usar o return, pois já retorna this

//constantes apontam pra um endereço fixo, não deixando vc reatribuir outra coisa
const p1 = new Pessoa('kawan','costa',18)
//travando o objeto ou o construtor/molde
Object.freeze(p1)
//se for freezar o construtor use {
//Object.freeze(p1)
//}
console.log(p1.falaTudo())
