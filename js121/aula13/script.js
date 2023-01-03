//strings são indexadas = indice[0], cada caracter de uma string é indexado
let umaString = 'um texto qualquer '

console.log(umaString[1]);


//esse charAt é para pegar um caracter pelo inidice
console.log(umaString.charAt(3));

//pesquisar por  UM INDICE

console.log(umaString.indexOf('texto'));
//QUando ele não encontra nada, aparece -1

console.log(umaString.indexOf('t'), 3);

//o numero depois do t serve para , " o indice antes do indice 3, não após o 3"


//o lastindex pega do final pro começo
// console.log(umaString.LastIndexOf('m', 3));

//EXPRESSÕES REGULARES, tem q fazer cursokkk, mas está entro duas barras /valor/

console.log(umaString.match())

//ele vai procurar o x na string
console.log(umaString.search(/x/));


//se eu quiser substituir alguma palavra

console.log(umaString.replace('um', 'outro'))


//expressão regular, o g é para repitir em todos os r da frase
let frase = 'o rato roeu a roupa do rei de roma.'
console.log(frase.replace(/r/g, 'otario'))

console.log(umaString.length);//18

//se eu quiser pegar uma palavra especifica
//num1 = start
//num2 = até onde você quer pegar
console.log(frase.slice(2,6))//rato

console.log(frase.slice(-3))//ma.

//aliás o -3 seria a mesma coisa que o indice 32, basicamente isso:

console.log(frase.length - 3)
//sacou?

// se você usar negativo no sgtart ele vai fazer esse valor menos o total e vai dar um indice ai

console.log(frase.length - 5)
console.log(frase.slice(-6, -1))//o -1 tirou o ponto

//enfim o slice é pra pegar algo especifico determinando o inicio por indice e o final também por indice, de tal "indice até tal indice"

//se você quiser dividir as palavras
let separa = frase.replace(/\s/g, '')

console.log(separa)



//nesse caso é por espaço mas poderia ser -

console.log(frase.split("r", 2))//o 2 é o limite de palavras em indice(0,1,2) e também ele vai tirar todos os r da frase e seprar as palavras

//se eu quiser maiuscula

console.log(frase.toUpperCase())
//ou em minuscula

console.log(frase.toLowerCase)

var stringExemplo = "Exemplo com o método trim()" ;
 var stringResultante = stringExemplo.trim();


