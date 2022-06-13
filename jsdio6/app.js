// tipos primitivos

//bolean
var vOuF = false;
console.log(typeof("vOuf"));

//number
var numeroQualquer = 2;
console.log(typeof(numeroQualquer));

//string

var nome = "kawan";
console.log(typeof(nome));

//como declarar
// var escoo global e local

//escopo global é quando a variavél e declarada fora de algum bloco, podendo ser usada em qualquer parte do codigo e a escopo local só pode ser usada em um determinado bloco
var variavel;
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'kawan';

const caderno = 'tilibra';


var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal(){
    let escopolocalinterno = 'local';
    //para poder ver o valor dessa variável, o console.log tem q estar dentro da function sen ele não funciona, pois o let só permite que o codigo veja a variável dentro de um determinado bloco, no caso a function
    console.log(escopolocalinterno);
}

escopolocal();

//usar o camalCase ou _

//atribuição

var atribuição = "kawan";

//comparação
var comparação = '0' = 0;

//comparação identica, compara o valor e tipo de dado

var comparacaoIdentica = '0' === 0;

//adicao

var adicao = 1 + 1;

var subtracao = 2 - 1;

var multiplicar = 2*3;

var dividir = 6/2;

// o resto da divisao
var divisaointeira = 5 % 2;

// operadores relacionais
var maiorque = 5 > 2;

//menor

var maiorOuigualA = 5 >= 7;

//operadores logicos

var e = true && false;

// ou = ||
var ou = true || false;

var nao = !true;
