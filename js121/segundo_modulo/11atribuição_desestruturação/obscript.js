const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco:{
        rua:'av brasil',
        numero:320
    }
};

//atribuição através da desestruturação, ou seja, ele vai procurar o nome dentro de pessoa e já vai atribuir
//const {nome1} = pessoa;

//caso não tenha o nome ele vai mostrar esse 'não existe'
//const {nome = 'não existe',sobrenome} = pessoa;

//utilizamos muito essa desestruturação
// console.log(nome,sobrenome)

//para capturar o endereço que está entro do objeto pessoa
//o r vai receber rua, então para "renomear", faça isso
const {endereco: {rua: r, numero}} = pessoa;

const {nome,...resto} = pessoa

console.log(nome,resto)

const ola = [
    [1, 2, 3], [4,5,6]
]


const [um,dois] = ola

console.log(um,dois)
