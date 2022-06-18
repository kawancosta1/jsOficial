//var e let
/*-escopos diferentes
-hoisting
-redeclaração
-camel case
*/

var a =1;
let b = 2;

if(a===1){
    var a =11; //o escopo global
    let b = 22; //o escopo de bloco dento o bloco if

    console.log(a); //11
    console.log(b);

}

console.log(a); //11
console.log(b); //2

//hoisting
numberOne = 1;
console.log(numberOne + 2);
var numberOne; //o javascript leva pra cima na compilção, ent vc pode declarar tudo depois e vai dar certo(só com a var)

var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João'){
    var firstName = 'pedro';
    let lastName = 'silva';
    console.log(lastName)
}

console.log(firstName, lastName); //vai sair pedro souza

//CONSTANES
/* const FIRST_NAME;
FIRST_NAME = "Stephany";
!!!não pode fazer isso!!!
criar a const e depois atribuir valor pra ela, não dá certo


*/

const FIRST_NAME = "Stephany";

LAST_NAME = "costa"

console.log(LAST_NAME);
// leia o erro
const LAST_NAME;


// string
// tipagem dinamica, eu consigo modificar o tipo de dado que uma varável recebe
let um = "um";
typeof um
um = 1

