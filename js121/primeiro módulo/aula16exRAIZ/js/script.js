const num = Number(window.prompt('digite um numero: '))
const raiz = num ** 0.5;
//se você fizer com o <p> ai não porecisa dar o br!
document.body.innerHTML = `<p>seu numero é ${num} </p>`;
document.body.innerHTML += `a raiz quadrada de ${num} é ${raiz} <br />`
document.body.innerHTML += `o numero é inteiro? ${Number.isInteger(num)}<br />`
document.body.innerHTML += `não é um numero? ${Number.isNaN(num)} <br />`
document.body.innerHTML += `arredondado para cima : ${Math.ceil(num)} <br />`
document.body.innerHTML += `arredondado para baixo: ${Math.floor(num)}<br />`
document.body.innerHTML += `com duas casas decimais: ${num.toFixed(2)}<br />`
