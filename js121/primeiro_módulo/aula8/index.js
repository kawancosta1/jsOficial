const nome = "kawan";
const sobrenome = "Miranda";
const idade = 21
const peso = 84;
const alturaEmCm = 1.8;
let ano = new Date(); 
//se vc deixar vazio ele pega a data atual do seu pc
let anoNascimento = ano.getFullYear() - idade;

let imc = peso / (alturaEmCm * alturaEmCm);

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmCm} e seu imc é de ${imc} e luiz otavio nasceu no ano de ${anoNascimento}`
);
