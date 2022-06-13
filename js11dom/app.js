var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children
// a var intens vai receber os "li" = elementos filhos da ul

var novoitem = document.createElement("li")
novoitem.textContent = "Suco de laranja"

lista.insertBefore(novoitem, itens[0]) 
//  ele inseriu o suco de laranja antes do café
console.log(lista)

var lista2 = getElementsByTagName("ul")[1]
var itens2 = lista2.children
var novoitem2 = document.createElement("li")
novoitem2.textContent = "margarina"


lista2.replaceChild(novoitem2,itens2[2])

console.log(lista2)