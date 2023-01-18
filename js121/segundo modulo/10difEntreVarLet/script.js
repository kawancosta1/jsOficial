var verd = true;
let nome = 'luiz';
//a let tem escopo de bloco { dentro disso ela n sai}
var nome2 = 'luiz '

// não posso redeclarar a let, let nome = 'luiz'

if(verdadeira = true){
    let nome = 'kaka' //criada
    console.log('ok')
    var nome2 = 'chsa'//redeclarada e não criada, essa é a diferença entre os dois
}
    //ela foi criada nesse bloco e não sai dele

    if(verdadeira){
        let nome ='otavio' //criada
        console.log(nome)
       var nome2 ='otaviso' //redeclarada
        
    }

    //a maior diferença entre eles é o escopo


    //o var só não sai da função, de resto... ele é acessado por qualquer bloco
    function falaoi(){
        var nome = 'luiz'
        
    }
    


    //já nesse caso:
    var sobrenome = 'luiz'
    function falaoi2(){
        if(verd){
        console.log(sobrenome)
        }
    }

    falaoi2()

    //essa função funciona pois o js não encontrou a variável dentro da função então ele busca nos seus "vizinhos"

    //mas se a var tivesse dentro da função ela não seria acessivel