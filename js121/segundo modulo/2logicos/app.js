/*
&& -> and
|| -> or
! -> not

*/

//se uma ta errada todas estão erradas pois todas as expressÔes precisam ser verdadeiras para retornar true 
console.log(true &&true && true)

const oi = function(name){
    console.log(`oi ${name}`)
}

console.log(oi('kawan'))

const expressaoOr = false || true

let usuario = 'luiz'
let senha = '123'

const vaiLogar = usuario === 'luiz' && senha === '123'
console.log(vaiLogar) 

console.log(!true)//false