//protejer a prorpiedade
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado;

    Object.defineProperty(this, 'estoque',{
        //enumerable é para aparecer ou não a chave
        enumerable: false,
        //pode ter funções dentro pois é um objeto 
        //get é um método q serve para trabalhar com valores
        get: function(){
        return estoque
        },
        //set é para definir valores = 
        set:function(valor){
            if(typeof valor !== 'number'){
                console.log('bad value')
                return;
            }
            estoquePrivado = valor
        },
        //valor
        /*posso alterar o valor?*/ 
        configurable: true //pode apagar,reconfigurar a chave? 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque)
vb 
