function criaOutra() {
    const nome = 'luiz';
    return function(){
        //o nome dessa utilziação do nome se chama closure, pois ela lembra do seu escopo léxico 
        return nome
    }
}
const funcao = criaOutra()
console.log(funcao())



//closure usando o parametro de outra funcao
function retorna(nome){
    return function(){
        return nome;
    }

}

//podem ter vários closures, sempre que eu chamar elas, sempre serão kawan e costa, elas carregam valores individuais
const funcao1 = retorna('kawan')
const funcao2 = retorna('costa')