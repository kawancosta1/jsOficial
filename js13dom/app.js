//variaveis
//escopo globol


const nome  ="kawan";
// fora do if é o escopo global e dentro do if é o escopo local
if(true){
    let nome ="daniel"
    console.log(nome)
}


//se você quiser declara uma variável local use o let ao invés do var

//o const é uma variavel que não pode ser alterada, it's so weird