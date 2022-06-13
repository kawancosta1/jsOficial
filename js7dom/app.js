var p = document.createElement("p")

p.innerHTML = "olá suas putas"

var img = document.createElement("img")

//como fazemos para inserir o p na div conteudo?

document.getElementById("conteudo").appendChild(p)

//pegamos a div com o getelementbyid e inserimos a var p com o appendshild

img.src = "lorena.jpg"

document.getElementById("conteudo").appendChild
(img)

img.style.width = "400px"

document.getElementById("conteudo").removeChild(img)
//o removechild tira o elemento filho do pai = tira o img da div