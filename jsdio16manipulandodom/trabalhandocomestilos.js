// <div id="meu-elemento" class="classe"></div>

const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
// adiciona a classe meu estilo

meuElemento.classList.remove("classe")
// n preciso falar nd

meuElemento.classList.toggle("dark-mode")
/*adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela..ou seja, caso ela exista ele tira, caso não ele add*/

// resultado

/*
<div id="meu-elemento" class="novo-estilo dark-mode"></div>

*/
// vai pegar todos
document.getElementsByTagName("p").style.color = "blue";
// vai pegar o primeiro
document.getElementsByTagName("p")[0].style.color = "blue";