//funcões que retornam objetos

//factory mode é isso, criar objetos suas propiedades e seus methodos que são né isso ai
//constructure function
function criaPessoa(nome, sobrenome,a,p) {
  return  {
            nome,
            sobrenome,
            nomeCompleto(){
//getter
                return `${nome} ${sobrenome}`

            },
            //set
            set nomeCompleto(valor){
                valor = valor.split(' ')
                //tirar o primeiro nome usando o shift, lembrando que o valor que recebe tudo, então os metodos são aplicados a ele e usanmos o set para fazer isso objeto.metodoComoAtributoPeloGet = ' setar um valor1'
                this.nome = valor.shit()
                //vai juntar o resto, e assim
                this.sobrenome = valor.join(' ')
                //para fazermos sertinho seria ${nome} $sobrenome
            },
            get fala(assunto){
                //this é o p1 ou p2,p3,p4....é o objeto que estiver tlg:
            return `${this.nome} está ${assunto}`
        }

        //usando por esemplo get imc(), ao invés de falormos p1.imc() falamos p1.imc, pois ele vira um atributo, e usamos o get quando o metodo só retorna valores e não define eles, mas e se quisessemos fazer isto: p1.nomeCompleto = 'kawan silva costa' e o objeto iria indentificar cada parte

            

    }

}

const p1 = criaPessoa('kawan', 'costa')
console.log(p1.fala('está falando sobre js e seu metodos '))