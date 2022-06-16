// function comparaNumeros(num1, num2){
//     // saoIguais é uma var boolean
//     const saoIguais = num1 === num2;
//     const soma = num1 + num2;
//     // if(saoIguais){
//     //     return "São iguais"
//     // }else{

//     // return "não sao iguais";
//     // }

//     // if ternario
//     return saoIguais ? "são iguais" : "Não são iguais";
// }

// basicamente é pra formar a frase final

comparaNumeros();

function comparaNumeros(num1 = Number, num2 = Number){
    num1 = Number(prompt("qual numero bb?"));
    num2 = Number(prompt("qual o 2º numero bb?"));
  
if(!num1 || !num2  ){
    alert("não deu certo")
}else{
    
    const primeiraFrase = criaPrimeirafrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    alert(`${primeiraFrase} ${segundaFrase}`);
}
}

function criaPrimeirafrase(num1, num2){
    let saoiguais = '';

    if(num1 !== num2){
        saoiguais = 'não'
    }

    return `Os números ${num1} e ${num2} ${saoiguais} são iguais.`

}


function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let Resultado10 = 'menor';
    let Resultado20 = 'menor';
    // essasconts são booleanos mas se n tivesse elas, ai teria que colocar no if, ai complicada um pouco mais
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        Resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${Resultado10} que 10 e ${Resultado20} que 20`;
}


