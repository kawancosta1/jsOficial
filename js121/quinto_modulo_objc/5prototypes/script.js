//O ELEMENTO PAI DE TODOS OS ELEMENTOS DO JS É O PROTOTYPE, ENTÃO PRIMEIRO O JS VERIFICA O OBJETOCRIADO E DEPOIS O OBJETO.PROTOTYPE E DEPOIS OBJECT.PROTOTYPE

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + "" + this.sobrenome
}

//prototype é uma propriedade que todas as funções contrutoras possuem, OU SEJA, TODOS OS OBJETOS QUE EU CRIAR POSSUIRÃO ESTE MÉTODO
//Pessoa.prototype.estouAqqui ='hahahaha' 
//todas as pessoas que ele criar vai vior com esse prototype, pois o js liga automáticamente

//a função construtora é um molde para intsanciar novas pessoas

//esse prototype que eu criei não se sobressai sobre métodos criado dentro da função que não seja um prototype
Pessoa.prototype.nomeCompleto = function(){
    return 'original'+this.nome + "" + this.sobrenome
}
//se usar os new date e declarar uma var pra recceber ele, isso seria um proto, ou seja, não teria nada no data mas sim no new date

const p1 = new Pessoa('kawan','costa')

const p2 = new Pessoa('isabely',"silveira")

//os prototypes ajudam na performance

