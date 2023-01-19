/*
//iniciar a variavel/ condição/
for(let i = 0; i<=5; i++){
    console.log(i)

}

//ou poderia ser
for(let i2 = 0; i2<=5; i2 + 10){
    console.log(i)

}

//subtraindo
for(let i2 = 0; i2<=5; i2 - 10){
    console.log(i)

}
*/

//é par 
//usando o operador ternário

for(let i = 0; i<=10 ; i++){
    let par = i % 2 === 0 ? 'par' : 'impar'
console.log(`${i} é ${par}`)
}

const frutas = ['maçã','pera','uva']

//tem que ser menor
for(let i = 0;i< frutas.length; i++ ){
    console.log(frutas[i])
}