//hoisting
falaOi()



function falaOi(){
    return 'oi'
}

//funcões são objetos de primeira classe 

//first-class objects, ou seja, a função pode ser um dado ou ser passada para outra funcao
//function expression
const souUmDado = function (){
console.log('sou um dado')
};

souUmDado();

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado)

/*arow function
nome funcao = (parame) =>{
bloco funcao
}*/
const funcaoArrow = () => {
'sou uma arrow function'
}

setInterval(function(){
    console.log('otario', 1000)
})
