//caso b n seja enviado b é igual a 2 e caso o b seja enviado e o a não, o a assume o 2
function funcao(a,b = 2,d=4){
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

//nos parametros existe uma var chamada arguments. que é como um array
funcao('valor', 1 ,2,3,4,5,6,7,8,9)


//function usando atribuição por desestruturação como parâmetro
function desestru({nome,idade,cidade}){
    console.log(nome,cidade,idade)
}

let pess = {nome:'kawan', idade: 18, cidade:'são carlos'}

desestru(pess)

//pode ser por array
function desestru1([nome,idade,cidade]){
    console.log(nome,cidade,idade)
}

//o acumulador é o total r eu usei o rest pois, após o acumulador eu quero o resto nos numeros
function conta([operador,acumulador, ...numeros]){
    for(let numero of numeros){
        if(operador === '+')acumulador += numero;
        if(operador === '-')acumulador -= numero;
        if(operador === '/')(acumulador /= numero);
        if(operador === '*')acumulador *= numero;
       
    }
    console.log(Math.round(acumulador))
}

//é melhor deixar o acumulador = 1 pois não dá problema co m o zero
conta(['/',1,20,30,40,50]);


//nas arrows functions não existe arguments então fazemos assim para pegar todos que foram passados: usando o REST 
const conta2 = (...args) => {
    console.log(args)
}

conta2(pess)