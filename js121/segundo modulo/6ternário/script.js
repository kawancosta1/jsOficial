const pontuac = 999;


// if(pontuac >= 1000){
//     console.log('usuario VIP')
// } else{
//     console.log('usuario normal')
// }
//TERNARIO
//(CONDICAO) ? 'VALOR PARA VERDADEIRO' : 'VALOR PARA FALSO';

const nivelUsuario = pontuac >= 1000 ? 'usuario Vip' : 'usuario normal';
console.log(nivelUsuario)

const corUsuario = null;
//caso o corUsuario seja sla null, então o corPadrao é falso e a cor será preta
const corpadrao = corpadrao || 'preta'

console.log(nivelUsuario, corpadrao)