

// SUA ANTA, LEMBRA DE DECLARAR A VARIÁVEL FORA DO BLOCO

// function calculadora(){
//      operacao;
const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));8

if(!operacao || operacao >= 7){
    alert('erro operação invalida')
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
}else{
    
// }
let n1 = Number(prompt('insira o primeiro valor'));
let n2 = Number(prompt ('insira o segundo valor'));
let resultado;

if (!n1 || !n2){
    alert('erro - parametro invalido')






}

function soma(){
    resultado = n1 + n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} + ${n2} = ${resultado}`);
    novaoperacao()
}
function subtracao(){
    resultado = n1 - n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} - ${n2} = ${resultado}`);
    novaoperacao()
}
function multiplicacao(){
    resultado = n1 * n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} x ${n2} = ${resultado}`);
    novaoperacao()
}
function divisaoreal(){
    resultado = n1 / n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} / ${n2} = ${resultado}`);
    novaoperacao()
}
function divisaointeira(){
    resultado = n1 % n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} % ${n2} = ${resultado}`);
    novaoperacao()
}
function potenciacao(){
    resultado = n1** n2;
    // usando crase ao invés de aspas duplas, podemos usar strings junto com variáveis
    alert(`${n1} elevado ${n2} = ${resultado}`);
    novaoperacao()
}

function novaoperacao(){
    let opcao = prompt('deseja fazer outra operação?\n 1 - sim \n 2 - não');
    if (opcao == 1){
        const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    }else if(opcao = 2){
        alert('até mains');;
    }else{
        alert('digite um numero valido');1

    }
}






if(operacao == 1) {
    soma();
   
} else if(operacao == 2){
    subtracao();
}
else if(operacao == 3){
multiplicacao();
}else if(operacao == 4){
divisaoreal();

}else if(operacao == 5){
divisaoInteira();

}else if(operacao == 6){
potenciacao();

}

}
