function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res');
    if(fano.value == 0 || Number(fano.value) > ano){
        alert('erro galera')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.querySelector('#imgpes')
    //    criando a imagem dinamicamente
       //var img = document.createElement('img')
    //    colocando id, no caso o id é um atributo disponivel no img, como o src ou class, no caso do input tem o name... e por assim em diante
    //img.setAttribute('id','foto')
       if(fsex[0].checked){
           genero = 'masculino'
           if(idade >= 0 && idade < 10){
            //    fazer isso pro resto
               img.src = 'bebe.jpg'
           }else if(idade >= 10 && idade < 21){
               //jovem
           }else if(idade >= 21 && idade < 50){
               //adulto
           }else if(idade >= 50){
               //velho
           }
       }else if(fsex[1].cheked){
           genero = 'feminino'
           if(idade >= 0 && idade < 10){
            //criança
        }else if(idade >= 10 && idade < 21){
            //jovem
        }else if(idade >= 21 && idade < 50){
            //adulto
        }else if(idade >= 50){
            //velho
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `individuo ${genero} com ${idade} anos`
    } 
    
}