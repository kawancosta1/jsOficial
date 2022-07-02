function veSeOnumeroEpositivo(num){
    if(num < 0){
        return  false; 
    }else{
        return  true;
    }
    // n importa se vc ta num if, o return vai sair da função, ou seja, parar a função 
  
}

function numerosgal(num){
    const ehNegativo = num < 0;
    const Maiorquedez = num > 10;

    if(ehNegativo){
        return "esse numero é negativo"
    }else if(!ehNegativo && Maiorquedez){
        return "esse número é positivo e maior que dez"
    }
    return "é positivo"
}

// o case é usado quando precisa comparar muitos valores e equivale a uma comparação de tipo e valor
function getAnimal(id){
switch(id){
    case 1:
    return "cão";
    case 2 :
        return "gato";
        case 3:
            return "girafa";
            case 4:
                return "kawan";
              default:
                  "puts";
                    
}

}
// FOR

function multiplicapor2(arr){
    let multiplicados = [];
    for(let i = 0; i < arr.lenght; i++){
        // o push vai add os numeros multiplicados no array *multiplicados*
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}

const meuNumeros = [2,33,44,55,66,78];
multiplicapor2(meusNumeros)

// for in pode ser usado em objetos

function forinexemple(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuobjeto = {
    nome:"joao",
    idade:"20",
    cidade:"salvador"
}

forinexemple(meuObjeto);

function forinexemple(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuobjeto1 = {
    nome:"joao",
    idade:"20",
    cidade:"salvador"
}

forinexemple(meuObjeto);

//nome
//idade
//cidade

function logletras(palavra){
    for(letra of palavra){
        console.log(palavra)
    }
}

const palavrinha = "abacaxi";

console.log(logletras(palavrinha));
//a
// b
// a
// c 
// a 
// x 
// i 


function exemplohwile(){
    let num  = 0
    while(num <= 5){
        console.log(num);
        num++;
    }
}