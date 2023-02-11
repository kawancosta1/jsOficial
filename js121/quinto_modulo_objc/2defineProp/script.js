//defineProperty

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque',{
        //enumerable é para aparecer ou não a chave
        enumerable: false,
        //pode ter funções dentro pois é um objeto 
        value: function(){return estoque},//valor
        writable:/*posso alterar o valor?*/ true,
        configurable: true //pode apagar,reconfigurar a chave
    });


    //definir as propriedades em geral
    Object.defineProperties(this, {
        nome: {     
        enumerable: true,
        value:nome,
        configurable: true
        }, 
        preco:{   
        enumerable: false,
        value: function(){return preco},
        writable:true,
        configurable: true 
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque())


//se o enumerable for false, nao vai aparecer a rporpiedade

for(let chave in p1){
    console.log(chave)
}