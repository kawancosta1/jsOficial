//strings são geralmente textos

let nome = "Jao";
let sobrenome = "pedrin";

nome.concat(sobrenome);

// n preciso dizer nd
let concatenado = nome.concat(sobrenome);

// o tanto de caracteres que tem na string
concatenado.length;

// transformou o exemplo em um objeto, mas ngm usa isso
let exemplo = new String("paçoca")

console.log(exemplo);

let vazio = "";

console.clear;

// INDICE E TAMANHO SÃO DIFERENTES, O LENGTH COMÇA DO 1 E O INDICE DO 0
// cada letra é um indice, ent o indice 1 vai pegar a 2º letra
console.log(nome[1])

// essas aspas vazia é o espaço, assim eu concateno com espaço
concatenado = nome + "" +sobrenome;

// quebra de linha \n, parecido com o  o br 
concatenado = nome + "\n\n" +sobrenome;

//  use isso ao invés do de cima
concatenado = `${nome}
 ${sobrenome}`;

 let frase = "olá, tudo bem?"

//  separa os caracteres;
 frase.split("");

//  existe a palavra tudo na frase? isso vai verificar:
frase.includes("tudo")

// vai trocar a virgula pela !
let stringmodificada = frase.replace(",","!")

// metedos = como vc trata os objetos,variáveis etc..

// NUMBEEERSSS

let num = 100;


if((num % 2) = 0){
    console.log("par");
}

// math é um objeto e dps que eu oloco o ponto, eu acesso as propiedades dele
Math.PI;

let fiveByThree = 5 / 3;

// o floor arredonda pra baixo
Math.floor(fiveByThree);

// esse arredonda pra cima
Math.ceil(fiveByThree)

let percent = "10%";

percent = 10;

percent + "%";

// convertendo pra strings
percent.toString();

// BOOLEANS

// sempre que eu faço comparação, ele me retorna boleano
let validation = 3 == 0; //false
 let validation1 = 3 == 1;//true
//  vai retornar o valor booleano contrario, que no caso é true
 !validation;
 let validation2;
//  assim eu consigo colocar o true ou false no texto
  validation2.toString();


//   arrays ÃO LISTAS LITERÁEIS DE ELEMENTOS

let array = [];

// add um item no final do array
array.push(3);
array.push(2);
console.log(array);

// vai tirar um item do final do array 
array.pop();

// tira o primeiro elemento
array.shift()
// add um item no começo do array 
array.unshift()

for(let i = 0; i < array.length; i++) {

}

// vê se tem o 3 no array
array.includes(3)

// vê se todos os itens do array são 5
array.every(item => item === 5)

// 1 dos itens do array é 5
array.some(item => item === 5);

// vai reverter os arrays
array.reverse()

// objetos

// estrtura chave e valor

let obj = {};

obj.name = "julia";

obj.age = 20;

// os valores do obj
Object.values(obj)
// chaves ou propiedades do obj
Object.keys(obj)

let person = {
    name: "julia",
    adress:"rua 20",
    age: 20

}

// person.name ou person[name]

let mom = "nameOfMom";
//  n faça isso name.mom
// faça isso:
person[mom] = "maria";
// quando coloca em colchetes, quer dizer que  a gente quer colocar uma variável ali dentro

// empty,null e undefined

// empty
let abacaxi = ""
// nulo
let abacaxi1 = null
// undefined
console.log(you)

// vai ser falso, vc tem que usar  o falsy pra ver se ela é nula ou não
// let abacaxi 



