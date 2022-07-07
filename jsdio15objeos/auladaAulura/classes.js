
// antes das classes
/*const livro = function(nome,editora,paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome
    }
    this.getEditora = function(){
        return gEditora
    }
    this.getPaginas = function(){
        return gPaginas
    }
}

const GraphQl = new livro("Graphql",  "harry potter",178)
console.log(Graphql.getNome())
console.log(Graphql.getEditora())
console.log(Graphql.getPaginas())
*/

// o exemplo em classes

class livro1 {
    // vai passar as propiedades/parametros no construtor
    constructor(nome, editora, paginas){
        this.nome = nomethist.editora = editorathis.paginas = paginas
    }
    //não são "functions", mas sim metodos para interagirmos/para dar compartamento  para o objeto
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descrevertitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas`)
    }
}

// classes também são funções, usa um typeof
//e as classes não fazem hoisting
const nodeJs = new livro1("Graphql",  "harry potter",178)
nodeJs.anunciarTitulo()
nodeJsJs.descrevertitulo()