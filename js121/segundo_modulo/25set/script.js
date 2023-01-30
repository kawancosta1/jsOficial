function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        //faz a hora ficar em 24 horas 
        hour12: false
    });
}


const hora = mostraHora()
// console.log(hora)

function funcaoDoInterval(){
    console.log(mostraHora())
}

//só estou passando a refencia, ou seja, sem os parenteses para não executar ela e também 1000 é milesimos, ou seja, um segundo, a cada 1 segundo ele executa

const timer = setInterval(funcaoDoInterval, 1000);

// setTimeOut ele para a função tlg? em 10000 = 10 segundos, ele vai parar
setTimeout(function(){
    clearInterval(timer);
}, 10000)

//em 5 segundos ele vai mandar um ola 
setTimeout(function(){
    console.log('ola')
}, 5000)