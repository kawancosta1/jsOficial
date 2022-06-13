//o que são vetores ou arrays

let array= ['string', 1, true];
console.log(array)[1]

let array2 = ['string', 1, true, ['array3'],['array4'],['array5'],['array6']];

console.log(array2)[4];

//forEach
array.forEach(function(item, index){
    console.log(item,index)
    //ele vai falar todos os itens do array e o indice de cada um, é pra isso que serve o foreach
})

array.push('novo item');
//o push add um item no final do array
console.log(array);

//remove o ultimo item do array
// array.pop();
// console.log(array);

array.shift();
//vai tirar o item no inicio do array
console.log(array);

array.unshift(array);
//add o item no inicio do array
console.log(array);

array.splice(0, 3);
//vai apagar os indices do 0 ao 3
console.log(array);

let novoarray = array.slice(0,3);

//objetos

let object = {
    string:'string',number:1,boolean:true,array:["array"],objectinterno: {
        objectinterno:'objeto interno'
    }
}

console.log(object.string);

var string = object.number;
console.log(number);

var arraydentrodoobjeto = object.array;


var {string, boolean, objectinterno} = object;

console.log(string,boolean,objectinterno);