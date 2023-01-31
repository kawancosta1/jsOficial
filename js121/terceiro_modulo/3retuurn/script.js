// //return
// //retorna um valor
// //termina a função

// const soma = function(a,b){
//     return a + b
// }

// console.log(soma(2,7))

// function criaPessoa(nome,sobrenome){
//     return {nome, sobrenome}


// }

// let p1 = criaPessoa('kawan','costa')
// console.log(p1)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + '' + resto
//     }

//     return falaResto;
// }
// const fala = falaFrase('olá');
// const resto = fala('mundo')
// console.log(resto)

function criaMultiplicador(multiplicador){
   //multiplicador

   function multiplicador(n){
    return n * multiplicador;
   };
    
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(43));
console.log(quadriplica(2324));
