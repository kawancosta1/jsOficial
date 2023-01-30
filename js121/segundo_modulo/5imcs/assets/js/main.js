let form = document.querySelector('.formulario')

//para o formulário não ser enviado devemos fazer essa função
form.addEventListener('submit',function (evento){
    evento.preventDefault();
    //eu consigo pegar os inputs assim se eu tiver alguma variável que está recebendo o forms
    const peso = Number(evento.target.querySelector('#peso').value);
    const altura = Number(evento.target.querySelector('#altura').value)
   

    // ou poderia ser: peso = Number(inputPeso.value) e peso = Number(inputPeso.value)
    if(peso == ''){
        setarResultado('digite no campo peso', false)
        //para encerrar a função use o return
        return;
    }else if(!peso){
        setarResultado('apenas numeros no campo peso  por favor', false)
        return;
    }
    if(altura == ''){
        setarResultado('digite no campo altura por favor', false)
        return;
    }else if(!altura){
        setarResultado('apenas numeros por favor', false)
        return;
    }
    const imc = getImc(peso, altura)
    const NivelImc = getNivel(imc)
    const msg = `seu imc é ${imc}  ${NivelImc}`
    setarResultado(NivelImc)
  
    
});

/* Menos do que 18,5
Entre 18,5 e 24,9
Entre 25,5 e 29,9
Entre 30 e 34,9
Entre 35 e 39,9
Mais do que 40*/

function getNivel(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    if(imc > 39.9) return nivel[5];
    if(imc > 34.9)return nivel[4];
    if(imc > 29.9)return nivel[3];
    if(imc > 24.9)return nivel[2];
    if(imc > 18.5)return nivel[1];
    if(imc <18.5)return nivel[0];
}

function getImc(p,a){

   const imc = p/a ** 2
   return imc.toFixed(2)
}



const butao = document.querySelector('#btn');
btn.addEventListener('click', setarResultado)


function criap(){
    const p = document.createElement('p')
  
   return p
}

function setarResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '' 
     const p = criap()
    if(isValid){ 
        p.classList.add('p-resultado')}else{
            p.classList.add('p-falso')
        }
  
    p.innerHTML = msg
    resultado.appendChild(p)

resultado.appendChild(p)
   
}
