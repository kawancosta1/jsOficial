let nome = document.querySelector('#inome').value
let sobrenome = document.querySelector('#isobrenome')
.value
let peso = document.querySelector('#ipeso').value
let altura = document.querySelector('#ialtura').value

const array = []

function criaPessoa(nome1, sobrenome1, peso1, altura1){
   
    array.push({
        nome:nome1,
        sobrenome:sobrenome1,
        altura:altura1,
        peso:peso1
    })
    
}

function aparecer(){
criaPessoa(nome,sobrenome,altura,peso)

nome = ''
sobrenome = ''
altura = 0
peso = 0


console.log(array)
}