/*
primitivos (imutáveis) - strings, number, boolean, undefined, null(bigint, symbol)


strings são indexadas, cada caractere tem um indice

8*/
let nome = 'kawan'
nome[0] = 'o'
//não pode fazer isto pois não é um dado passsado por  referência

//let a = 'A';
//let b = a;//o nome doisso (sério mesmo) é cópia quando esse dado for primitivo

//referência (mutável) - array, object, function

let a = [1, 2, 3];
let b = a;
//os dois apontam pro mesmo valor na memória

a.push(4)

console.log(a, b)

//a e b foram afetados
b.pop();

//O QUE EU FAÇO PARA UM AFETA OS OUTROS 
console.log(b)

//maneira de copiar os valores de a

let a1 = [1,2,3]
let b1 = [...a1 ]

b1.push(4)
console.log(b1)

//OS VALOREES PRIMITIVOS SÃO VALORES COPIADOS SE UTILIZADO O =, EXEMPLO: LET A = B

//JÁ OS DE REFERÊNCIA NÃO SÃO COPIADOS, SÃO PASSADOS POR REFERÊNCIA
const pessoa = {
    nome:'kawan',
    sobrenome:'costa'
};

//esses ... se chamam spreed e eles se espalham pela pessoa2
let pessoa2 = {...pessoa}

pessoa2.nome = 'luiz'

console.log(pessoa2.nome)

//qualquer valor primitivo vai ser copiado ao você usar "="

