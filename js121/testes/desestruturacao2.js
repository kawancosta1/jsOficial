const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade:30,
    endereco:{
        rua:'av brasil',
        numero:320
    }
};

//atribuição via desestruturação
// o = é um valor padão se não existir nome

const { nome: teste  = ' ', sobrenome } = pessoa
//eu coloquei o nome: teste para que eu coloque op nome que eu quiser na var que vai receber a prorpiedade

//propriedade: nomeQueEuQuero

//extrair o edereço

//a desestruturação de objetos tem várias opções
const {
    endereco: { rua: r = 'ernesto chiari', numero: num}, endereco} = pessoa


    //rest

    const {nombre, ...resto/*restro do objeto*/ } = pessoa