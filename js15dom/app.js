
// o objeto tem uma série de propiedades

//propiedade: valor....e essas propiedades podem ter tipo de dados diferentes

let pessoa = {
    nome:"jonatas",
    idade:35,
    feliz: true,
    pets: ["cachorro", "gato"],
        carro:{
            camaro:{
                placa:"12345",
                cor:"verde"
            },
            uno:{
                placa:"9876543",
                cor:"Branco"
            },
        },

    andar:function(km){
        alert(pessoa.nome+"andou"+km+"km")
    }


}
// aqui eu defini o quanto a pessoa andou 
pessoa.andar(20)
// o document ta dentro do window e o get é um metodo dentro do document
window.document.getElementById()

// renomeei a propiedade nome do objeto pessoa
pessoa.nome ="carlos"


// eu to acessando a propriedade especifica do objeto pessoa
console.log(pessoa.pets[1],nome)
// acessando a cor do camaro
console.log(pessoa.carro.camaro.cor)

// acessando a placa do uno
console.log(pessoa.carro.uno.placa)