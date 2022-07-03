function validacaoerro(array, num){try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    if(typeof array !== 'object' ) throw new TypeError("O array precisa ser  tipo object");
    if(typeof num !== 'number' ) throw new TypeError("O array precisa ser  tipo object");
    if(array.lenght !== num) throw RangeError("A quantidade de caracteres é maior doq a do numero enviado")
    return array;
}
catch(e){
    // se o erro intaciado for o erro tal...
    if(e instanceof ReferenceError){
        console.log("esse erro é um Reference Error")
        console.log(e.message)
    }else if(e instanceof TypeError){
        console.log("esse erro é um TypeError")
        console.log(e.message)
}   else if(e instanceof RangeError){
    console.log("esse erro é um RangeError")
    console.log(e.message);
}else{console.log('tipo de erro não esperado: ' + e)}
}
}

console.log(validacaoerro());