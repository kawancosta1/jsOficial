function getDiaSemana(diaSemana)
{



let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'domingo';
        break;
        case 1: diaSemanaTexto = 'segunda';
        break;
        case 2: diaSemanaTexto = 'terça';
        break;
        case 3: diaSemanaTexto = 'quarta';
        break;
        case 4: diaSemanaTexto = 'quinta';
        break;
        case 5: diaSemanaTexto = 'sexta';
        break;
        case 6: diaSemanaTexto = 'sabado';
        break;
        default:
            diaSemanaTexto = '';
        
}
return diaSemanaTexto;
}


//utilizamos o switch quando vamos checar uma varável específica, igual acima

const data = new Date();
const diaSemana = data.getDay();

console.log(getDiaSemana(diaSemana))