let nome = "Kawan"
let hora = new Date()
let hora1 = hora.getHours()
let tempo = ""
if(hora1 >17){
    tempo = "noite"
}else if(hora1 < 17 && hora1 > 10){
    tempo = "tarde"
}else if(hora1 = 0){
    tempo = 'meia noite'
}else{
    tempo = "manha"
}
console.log(`Meu nome é ${nome} estou aprendendendo js ás ${hora1} da ${tempo}`)