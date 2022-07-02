const pessoa = {
    firstname:"andré",
    lastname:"Soares",
    id:1,
    // o this pega o elemento do elemento pai, que no caso é pessoa
    fullname:function(){
        return this.fisrtname + ""+ this.lastname;
    },
    getid: function(){
        return this.id;
    }
};

pessoa.fullname();
pessoa.getid();

// metedo call

const pessoa1 = {
nome:'Miguel'
};
const animal = {
    nome:'tigre'
    };

function getSomething(){
    console.log(this.nome);
}
// eu especifiquei de qual objeto o this vai puxar a  propiedade 
getSomething.call(pessoa)

const myobjet = {
    num1:1,
    num2:2,
}

// se der um errozinho no a, n esquece de concatenar o this
function soma2(a,b){
    console.log( this.num1 + this.num2 +  a + b);
}

soma2.call(myobjet,1,3)//7