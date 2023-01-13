/*
&& -> false && true

falsy é diferente de false
*/

console.log('luiz' && 0 && 'maria');//ele vai retornar 0 pq é o valor mesmo

console.log('joao' && 'maria' && 'roberto')//ele exibe o ultimo valor true checado

function falaoi(){
    return 'oi'
}
let vaiExecutar = false;
console.log(vaiExecutar &&falaoi())

//esse foi sobre o and e agora vai ser o or = ||, que irá retornar o primeiro valor  verdadeiro

console.log(0 || false || null || 'luiz otavio' || true )//luiz otavio é verdadeiro 
