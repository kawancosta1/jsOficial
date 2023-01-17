//o new da indicios a uma função construtora e também o Date é com letra maiúscula
// const tresHoras = 60 * 60 * 3 * 1000
// const data = new Date(0);//01/01/1970 timestamp ou época unix

//ano, mês(no caso é abril), dia, hora, minuto, segundo

// se você só colocar o ano ele vai considerar milisegundos, então para ser o ano precisa de ao menos 2 parametros
// const data = new Date(2019, 3, 20,15,14,27);
const data = new Date();
console.log(data.to)
console.log(data.toString())
console.log('dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('minutos', data.getMinutes());
console.log('segundos', data.getSeconds());
console.log('milisegundos', data.getMilliseconds());
console.log('dia da semana', data.getDay());

//ou

console.log(Date.now());

//o new Date reconhece datas em milisegundos, em muitos bancos de dados são assim que funcionam
function convertedata(){
    const mili = Date.now()
    const resultado = new Date(mili)
    return resultado
}
console.log(convertedata())

function zero(num){
    //o zero ali é para ficar tipo 07/02/2017
    return num >= 10 ? num : `0${num}`
}

function mostraNum(){

    const data = new Date();
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth()+ 1);
    const ano = zero(data.getFullYear());

    return `${dia}/${mes}/${ano}`

}
console.log(mostraNum())