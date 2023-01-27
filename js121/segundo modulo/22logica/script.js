function  numero(y){
    //poderia ser typeOff numero !== 'number' também
if(Number.isInteger(y) && y > 0 && y < 100){

    if(y % 3 === 0 && y % 5 === 0) return `o ${y} é divisivel por 5 e 3`;
    if(y % 3 === 0) return `o ${y} é divisivel por 3`;
    if(y % 5 === 0) return `o ${y} é divisivel por 5`;
   
   

}
return 'ola'


}

for(let i = 0 ; i<=100 ; i++){

console.log(i, numero(i))

}