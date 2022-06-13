document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", "red")
})

//quando eu clicar no botão, ele vai setar a class red no title = quando eu clicar no botao vai aplicar a class que eu criei no botão

document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

//aqui vai tirar a class que eu apliquei no "set"

document.getElementById("btn-get").addEventListener("click", function(){
    var valor = document.getElementById("title").getAttribute("class") 
    document.getElementById("para").innerHTML = valor
})

//aqui nós iremos pegar a class que está sendo utilizada no title e jogar ela para o parágrafo com o id class