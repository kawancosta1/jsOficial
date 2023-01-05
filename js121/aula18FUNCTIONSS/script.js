

saudacap('kawan');
saudacap('maria');

//eu quero salvar o que essa função retorna


// function saudacap(nome){
//     console.log('bom dia', nome)
// }
//const variavel = saudacap('kaka');//undefined pois tem que colocar o return na função
//correto
function saudacap(nome){
    return`Bom dia ${nome}`
 }

 //a variável retornou um valor
 const variavel = saudacap('kaka');

 console.log(variavel)

 //a partir que o interpretador achar o return ele encerra a função

 //eu posso colocar um valor padrão para que se eu não mandar nada ele calcular alguma coisa e não der undefined
 function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
 }
 //não conseguimos acessar as variáveis criadas dentro das funções

 //eu estou exibindo o RETURN no console
 console.log(soma(2, 2));
 console.log(soma(3, 1));
 console.log(soma(4, 6));

 //criano função anonima, neste caso preciso de ";"

 const raiz = function(n){
    return n **0.5;
 };

 console.log(raiz(9))

 //arrow function usar quando temos uma linha só ou uma função curta
 //simplificando a outra função raiz:

 const raiz2 = numero => numero ** 0.5;

 console.log(raiz2(9));






