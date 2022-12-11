// filter = remover elemntos indesejáveis

const arrayopa = [2,3,4,5,4,12,19,7,2,5]

// testando se o indice do elemento condiz com elemento ele tira do filter
const uniquearray = arrayopa.filter((elem,index,arr) => arr.indexOf(elem) === index)
console.log(uniquearray)

// ele filtra ent vc pode ter só oq tu quer do array

/*const meuArray = [
    {nome:'matheus'},
    {nome:'henrrique'},
    {nome:'castiglione'}
];

const novoarray = meuArray.filter(valoratual => console.log('chamei',valoratual))
*/

/*const meuArray = [
    {nome:'matheus'},
    {nome:'henrrique'},
    {nome:'castiglione'}
];

const novoarray = meuArray.filter((valoratual, indice )=> console.log('chamei',valoratual,indice))*/
/*  resultado
chamei { nome: 'matheus' } 0
chamei { nome: 'henrrique' } 1
chamei { nome: 'castiglione' } 2
*/

const meuArray = [
    {nome:'matheus'},
    {nome:'henrrique'},
    {nome:'castiglione'}
];

//vendo se existe nomes com 'a' mas poderia ser qualquer letra ou palavra sabe? e se tiver o array vai receber
const novoarray = meuArray.filter((valoratual, indice )=>{ return valoratual.nome.includes('a')} )

//pra cada chamada que for true ela retorna pro array e os falso ela n retorna,por exemplo só tem 2 nomes no array pois só duas callbacks foram true para os valores que possuiam o a


 