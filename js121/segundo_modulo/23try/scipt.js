// try{console.log(naoExisro)} catch(err){
//     //o err vai pegar o errp, qualquer erro vai pro cacth sério
//     console.log(`${err} basicamente não existe`)
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        //há varias classes de erros como reference error ou o error mesmo 
        throw new Error('x e y precisam ser números');
    }
    return 'oi'
   
}

try{
    console.log(soma('s',2))
}catch(err){
    console.log('algo mias amigável')
}

