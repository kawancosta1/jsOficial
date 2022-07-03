fetch('https://api.github.com/users/omariosouto')
// quando vc tiver esse conteudo, rode a função:
.then(function(respostaDoServidor){
    return respostaDoServidor.json()
})
// eles vem em pedacinhos então a gente precisa juntar eles com o then:
.then(function(respostaconvertida){
    console.log(respostaconvertida)
})
// outro tbm!!

async function pegadados(){
    const resultado = await fetch('https://api.github.com/users/omariosouto')
    .then()
    const resultadoConvertido = await resultado.json();
    console.log(resultadoConvertido)
}