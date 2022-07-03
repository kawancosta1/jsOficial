/*function verificapalindromo(string){
    // o return só vai retornar que a string é invalida, não q é um erro
    if(!string) return "string invalida"

    return string === string.split("").reverse().join("");
}*/

// console.log(verificapalindromo(232));



function verificapalindromo(string){
    // já o throw vai tratar como uma mensagem de erro
    if(!string) throw "string invalida"

    return string === string.split("").reverse().join("");
}


// o try realiza o metodo e o catch trata o erro

function tryCatchExemeplo(string){
    try {
        verificapalindromo(string)
    }
    catch(Meuerro){
        
        console.log(Meuerro)
    }
    // o finally vai falar algo depois da realização do try catch
    finally{
        console.log('a string enviada foi: ' + string);
    }
}

console.log(tryCatchExemeplo(''));


new Error(message, filename, linenumber)

// todos os parametros são opcionais

const Meuerro = new Error('mensagem invalida');

// eu modifiquei o nome do mu erro
Meuerro.name = 'InvalidMessage';
throw Meuerro;