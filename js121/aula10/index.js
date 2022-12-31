
//string, number, undefined, null, boolean, symbol

//o null não aponta pra nenhum lugar na memória
const nome = 'luiz';//string
const nome1 ="luiz";//string
const nome2 = `luiiz`;//string
const num1 = 10;//number
const num2 = 10.52//number
let nomeAluno //undefined = não aponta pra local nenhuma na memória
let sobreAluno = null; //nulo -> não aponta pra local nenhuma na memória

//null e undefined sçao diferentes 

//quando eu quero que a variável 

const boolean = true; //or false
//if e else usa isso 
//sempre que você utilizar alguma coisa no sistema para mudar a plicação, é lógico ex = notaAluno

//tipos da variavel
console.log(typeof nome, nome); //string luiz
console.log(typeof sobreAluno, sobreAluno)//object null 

let a = [1,2];

const b = a;

console.log(a, b)

b.push(3)

console.log(a, b)

//tipo de dado referencia = a e b, o valor de b aponta pro mesmo lugar na memória, o seja, valor passado por referência, TOP! 