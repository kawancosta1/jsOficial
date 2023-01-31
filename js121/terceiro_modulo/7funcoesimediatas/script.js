//IIFE funções auto-invocadas

(function(){
    const sobrenome = 'costa'
function crianome(nome){
    return nome + ' ' + sobrenome
}

function falanome(){
    console.log(crianome('kawan'))
}
})();

const nome = 'qualquer coisa'