function getDayWeek(diaSemana){

    let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
        case 1:
        diaSemanaTexto = 'segunda';
        return diaSemanaTexto;
        case 2:
        diaSemanaTexto = 'terça';
        return diaSemanaTexto;
        case 3:
        diaSemanaTexto = 'quarta';
        return diaSemanaTexto;
        case 4:
        diaSemanaTexto = 'quinta';
        return diaSemanaTexto;
        case 5:
        diaSemanaTexto = 'sexta';
        return diaSemanaTexto;
        case 6:
        diaSemanaTexto = 'sabado';
        return diaSemanaTexto;
}



}

function zero(num){
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
const diaSemana = data.getDay();
function mostraNum(){

    const data = new Date();
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth()+ 1);
    const ano = zero(data.getFullYear());

    return `${dia}/${mes}/${ano}`

}

console.log(mostraNum())


let div = document.querySelector('.menu')
let h1 = document.createElement('h1')
h1.innerHTML = `hoje é ${getDayWeek(diaSemana)} de ${mostraNum()}`
div.appendChild(h1)
console.log(div)