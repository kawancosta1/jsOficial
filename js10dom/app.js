var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer ai")

titulo.appendChild(texto)

// coloquei o texto dentro do h1 e o textcontent faz a msm coisa sóq mais rapida

titulo.textContent = "um novo texto"

var lista = document.getElementsByTagName("ul")

var item = document.createElement("li")

item.textContent = "oláaa"

lista = item

console.log(item, lista)



// o textcontent serve até pra inserir em "li" dentro da ul ou ol