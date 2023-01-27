//por exemplo, se der erro vai aparecer no catch mas e se eu quiser fechar o arquivo ou mostrar algo sempre? ai é com o finaly
try{
    //é executada quando não há erros
    console.log('abri um arquivo')
    console.log('manipulei o arquivo')
    console.log('fechei o arquivo')
    try{
console.log(b)
    }catch(e){
console.log('deu erro')
    }
}catch(e){
    //executada quando há erros
    console.log('tratando o erro')
} finally{
    //sempre
    console.log('eu sou sempre sou executado')
}



// #####################################################################


//se o valor passado não for um new Date() ele da erro
function retornaHora(data){
    if(data && !(data instanceof Date)){
        //se não for um date ou colocar alguma coisa como só 2 digitos e etc... ele da esse erro
       throw new TypeError('esperando instancia de Date')
    }
if(!data){
data = new Date()
}

return data.toLocaleTimeString('pt-BR', {
    //para ter dois digitos certinho, formatar da maneira correta
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

}

try{
const data = new DataTransfer('01-01-1970 12:58:12');
const hora = retornaHora(2)
console.log(hora)
}catch(e){
//tratar erro
console.log('houve um erro desconhecido')
}finally{
    console.log('tenha um bom dia')
}