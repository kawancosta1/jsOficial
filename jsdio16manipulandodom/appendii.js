// criando o elemento
var el = document.createElement("div");
el.classList = "div-criada"
// inserindo na pagina
var container = document.querySelector('#container');
container.appendChild(el)
// elemento 2

var el2 = document.createElement("div");
el2.classList = "div-before";

var el3 = document.querySelector('#container .div-criada')
// assim eu vou colocar o el2 antes do contariner e a .div-criada
container.insertBefore(el2, el3);