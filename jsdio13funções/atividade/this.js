



function calcularidade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade +anos} anos de idade. `;
};

const pessoa1 = {
    nome:"maria",
    idade: 30
};

const pessoa2 = {
    nome:"Carla",
    idade: 26
};

const animal = {
    nome:"Fiona",
    idade: 6,
    raca:'pug',
};
console.log(calcularidade.call(pessoa2,7));
console.log(calcularidade.apply(pessoa2,[4]));

