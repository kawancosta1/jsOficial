
//eu posso ter vário elses ifs
const hora1 = new Date()
const hora = hora1.getHours();

if(hora > 0 && hora <= 11){
console.log(`bom dia, agora são ${hora} da manhâ`);}
else if(hora > 11  && hora <= 17){
    console.log(`bom dia, agora é ${hora} da tarde`)
}else if(hora > 17 && hora < 0){
    console.log(`bom dia,agora são ${hora} horas`)
}