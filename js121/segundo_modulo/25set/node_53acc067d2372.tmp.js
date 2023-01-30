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
    console.log(hora)
}

//só estou passando a refencia, ou seja, sem os parenteses para não executar ela
setInterval(funcaoDoInterval, 1000);