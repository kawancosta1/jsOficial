//O CONTINUE VAI PRA PROXIMA INTERAÇÃO E O BREAK PARA A FUNÇÃO


const num = [1,2,3,4,5,6,7,8,9];

//for of pega os valores
for(let numeros in num){

    if(numeros == 2){
        console.log('pulei o numero dois')
        //o continue faz que ele pule o muro, antes iria aparecer pulei... e depois iria aparecer 2, graças ao continue isso não vai acontecer
        continue;
    }

    //se numeros chegar ao 7 ele para a função, é tipo o return só que ele só para mesmo
    if(numeros ==7){
        console.log('7 encontrado, saindo...')
        break;
    }

    console.log(numeros)
    
}