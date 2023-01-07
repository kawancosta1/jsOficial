//escopo global
//const seuq = seuq
//isso polui o seu código então é melhor criar uma função para  seu próprio escopo



 //automaticamente, dentro dos paranteses vai receber um eventom, por devemos usar o parametro evento
//  form.onsubmit = function (evento){
//     // o preventDefault vai evitar que a página recarregue
function meuEscopo(){
 const form = document.querySelector('.form');

 const resultado = document.querySelector('.resultado')

 const pessoas = [];

function recebeEvento(evento){
    evento.preventDefault();

    const nome = form.querySelector('#inome');
    const sobrenome = form.querySelector('#isobrenome');
    const peso = form.querySelector('#ipeso');
     const altura = form.querySelector('#ialtura');

     function criaPessoa(nome1, sobrenome1, peso1, altura1){
   
       return pessoas.push({
            nome:nome1,
            sobrenome:sobrenome1,
            altura:altura1,
            peso:peso1
        }
        
        )
        
    }

    criaPessoa(nome.value,sobrenome.value,peso.value,altura.value);

resultado.innerHTML += `seu nome é ${nome.value} ${sobrenome.value} e seu peso é ${peso.value} e altura é ${altura.value}<br>`

console.log(pessoas)
   

}

// pegar evento
form.addEventListener('submit', recebeEvento);

}

//a unica coisa que sai da função é o return
meuEscopo()