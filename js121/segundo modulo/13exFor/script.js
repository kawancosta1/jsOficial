const elementos = [
{tag:'p', texto:' Frase1'},
{tag:'div', texto:' Frase2'},
{tag:'footer', texto:' Frase3'},
{tag:'selection', texto:' Frase4'}

]






for(let i = 0; i< elementos.length; i++)
//temos que desestrutar o objeto para pegar oq queremos
{
    let {tag,texto} = elementos[i]
    let div = document.querySelector('.container')
let ele = document.createElement(tag)
ele.innerHTML = texto
div.appendChild(ele)
}