// function substituiPares(array){
//     if(!array.lenght)  return "coloca um array ai";
// for(let i = 0; i < array.lenght; i++){
//     if(array[i] === 0){
//         console.log("você já é zero!!!" )
//     }else if (array[i] % 2 === 0){console.log(`substituindo ${array[i]} por 0....`)
//         // o array i vai receber o 0 caso o resto da divisao por 2 seja 0
//         array[i] = 0;
//     } 
// }
// return array;
// }

function substituindopares(array){
    if(!array)return "coloque um array por favor";
    for(let i = 0;i < array.lenght; i++){
        if(array === 0 ){
            console.log("você já é zero bro")}
else if(array[i] % 2 === 0){
    console.log(`substituindo ${array[i]} por 0....`)
    array[i] = 0
       }
    } 
}

let arr = [1,3,4,6,80,33,23,90];
substituiPares(arr)


