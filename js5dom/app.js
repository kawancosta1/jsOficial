var paragrafo = document.getElementById("p1")
//criei a variavel paragrafo e fiz ela receber o p cm o id p1

paragrafo.innerHTML = "novo conteudo"
// eu to atribuindo o novo conteudo dentro do paragrafo

paragrafo.style.color = "red"
// alterei o estilo do paragrafo pelo js
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "400px"

var imagem = document.getElementById("imagem")

imagem.src = "lorena.jpg"
imagem.alt ="teste de imagem"