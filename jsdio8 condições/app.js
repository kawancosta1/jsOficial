var jogador1 = 0;
var jogador2 = 0;
var placar;

if(jogador1 > 0 && jogador2 == 0){
    console.log("jogador1 marcou mais pontos que o jogador2")
}
else if(jogador2 > 0 && jogador1 == 0){
    console.log("jogodor2 marcou pontos que o jogador1")
}
else{
    console.log("ninguem marcou ponto")
}

//if ternário: condição?instrução1:instrução2

jogador1 != -1 && jogador2 != -1 ? console.log("os jogadores são validos"): console.log("os jogadores são invalidos");

switch(placar){
    case placar = jogador1 >jogador2:
        console.log("jogador 1 ganhou");
        break;
        case placar = jogador2
        >jogador1:
            console.log("jogador 2 ganhou");
            break;
            default:
                console.log("ninguém ganhou");
}