/*aritimeticos 
 *
*+ adição/concatenação
* - / *
*potenciação **



*/

const num1 = 5;
const num2 = 10;
console.log(num1 - num2);


//operador de incremento ++ -- 

//se ele ´e antes (++contador) ele já incrementa rapidamente, já no pós decremento ele retém o valor antigo
let contador = 1;
// for(contador < 10; contador++; console.log(contador));

while(contador < 10){
    contador++
    console.log(contador)
}

const passo = 2;
let contador1 = 0;
console.log(passo + contador1);
//ou 
contador1 += passo;
contador1 += passo;
contador1 += passo;
contador1 += passo;
//poderia ser contador1 *= passo; ou contador1 /+ passo sla
console.log(contado1)

//NaN = not a number

const numero1 = 10;
const numero2 = '5'
console.log(numero1 + numero2)
//nesse caso o js converteu o 5 pra num, agora se fosse letras ele iria dar NaN

const nuum1 = 1
const nuum2 = 'ola'
console.log(nuum1 + nuum2)
//vai dar o Nan pois tem uma string


//CONVERTENDO VAlORES

//sempre que tem parenteses, alguma ação vai ser executada

//vai retornar 5 como num
nuum2 = parseInt('5')
//se fosse decima

const num3 = parseFloat('6.2')
console.log(typeof nuum2) 
 
      