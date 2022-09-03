function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // ele ta falando que se o tamanho da string que o num receber for = a 0, então ele faz o alert
    if(num.value.length == 0 ){
        alert('por favor digite um numero')
    } else{
        let n = Number(num.value)
        // se voce quiser limpar a tabela sempre que apertar o botao, coloque isso:
        tab.innerHTML = ''
        // pois toda vez que a função tabuada for chamada, ele vai deixar o select vazio por eu falei para ele receber a string vazio
        for(let c = 1; c <= 10;c++){
            // criar um elemento dentro do select, e a tag option cria esses elementos
          let item = document.createElement('option') 
        //   o .text é a parte de dentro do option
          item.text = ` ${n} x ${c} = ${n*c}  ` 
        //   e para adcionar um filho num elemento pai, usa-se o appendChild, ou seja, para inserir o option no select, devemos usar o appendchild

        tab.appendChild(item)
        }
    }
}