
//While: Executa o loop enquanto a condição for verdadeira. Do While: Executa o loop primeiro e depois verifica a condição. For: Executa o loop enquanto a condição for verdadeira, porém você pode instanciar as variaveis contadoras dentro da estrutura do loop

let array = ['valor2','valor3','valor4','valor5'];
let object = {propiedade1:'valor1', propiedade1:'valor2', propiedade1:'valor3'}

//for - executa até que ela seja falsa

// array.length é o tamanho do array
for(let indice = 0; indice < array.length;indice++){
    console.log(indice)
}

// for in

for(let i in array){
    console.log(i)

}

// com object, ele vai imprimir cada propiedade
for(i in object){
    console.log(i)

}

// for of, ele vai imprimir os valores do array ou os valores do objeto ao invés das propiedades

for(i of array){
    console.log(i)

}

// n da pra usar o for of em objetos
for(i of object.propiedade1){
    console.log(i)

}
// enquanto a for menor que 10 ele vai imprimir
var a = 0;

while(a < 10){
    a++;
    console.log(a)
}

do{
    a++;
    console.log(a)
}while(a < a);