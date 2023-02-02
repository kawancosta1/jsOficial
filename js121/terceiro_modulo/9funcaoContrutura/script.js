//função contrutora retorna objetos e funcao fabrica retorna objetos tbm
//contrutora -> Pessoa (new) precisa começar com maiuculo
function Pessoa(nome,sobrenome){
    //atributos ou métodos privados
    const ID = 12345;

    const metodoInterno = () =>{
//serve pra sla validar cpf, algo do tipo 
    };

    //quando eu uso o this é publico, ou seja, posso acessar objeto.nome, agora quando é criado sem o this, é para metodos internos ou intancias internas para o cliente n ver, tipo isso 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo' + this)
    }
}
//funções contrutoras precisam do new 
const p1 = new Pessoa('luiz','otavio')
const p2 = new Pessoa('kawan','costa')

console.log(p1.nome)

//o new cria um novo objeto fazio e faz o this apontar pro objeto(p1 ou p2) e retorna pro objeto recém criado(p1,p2), não precisando do return

p1.metodo();