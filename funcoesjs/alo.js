// vou criar o array pessaos que terá pessoas como objetos


const pessoas = [
    {id:3, nome:"luiz"},
    {id:2,nome:"maria"},
    {id:1,nome:"helena"},

];

// agora e quero transformar esse id em umm identificador pra  cada pessoa

// laço de repetição para desconstruir o array e reconstruir  ele do jeito que eu quero
//const novasPessoas = {};
//for(const pessoa of pessoas){
    //const {id} = pessoa;
    //Os três pontos indica que vc não deseja criar uma nova posição  e inserir o array , mas por pegar todos os dados da  empilhar os dados, ou seja, adicionando mais dados sem mudar as posiçôes dos objetos
    //novasPessoas[id] = { ...pessoa };
//}

/* '1': { id: 1, nome: 'helena' },
'2': { id: 2, nome: 'maria' },
 '3': { id: 3, nome: 'luiz' }*/
// console.log(novasPessoas);
//mas não vai ser o que eu quero pois mudou a ordem dos id e está em string ''
//com o map a ordem se mantém e o identificar é um number não uma string
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
  
    novasPessoas.set(id, { ...pessoa });
}

//se eu quiser pegar uma pessoa específica
