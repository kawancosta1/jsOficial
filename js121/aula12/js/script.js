//sempre que tem parenteses é uma função
alert('Com a nossa mensagem hehe')
//o window é o objeto pai do alert,prompt,document... pai de todos

console.log('isso ai é o console')

//booleano, então eu posso usar para fazer algum sistema logico pois posso capturar o false ou o true, fazendo isso:
const confirmar = window.confirm('deseja realmente apagar?');
// o nome já diz o que o confirm faz, e o confirma vai receber a resposta

console.log(confirmar)

const nome = window.prompt('digite o seu nome:')//da pra guardar numa variável
console.log(nome)
//quando uma função está dentro de um objeto a gentye chama de método, se tiver fora é função 

//entao o prompt,alert são metodos do window

const num1 = Number(window.prompt('digite um número '))

const num2 = Number(window.prompt('digite um número '))

const resultado = num1 + num2;
alert(`o resultado é ${resultado} ${nome}`) 

//tem que converter para number pois se não ele vai concatenar string + string


//O TEMPLATE STRING É A CRAAASEEE!!!!!!!!!! 
