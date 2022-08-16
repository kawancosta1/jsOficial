function carregar(){
var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem')
 var data = new Date()
 var hora = data.getHours()
 msg.innerHTML = `agora são ${hora} horas`
 if(hora >= 0 && hora < 12){
     //bom dia
     document.body.style.background = 'violet'
     imagem.src = 'img/manha.jpg'
 } else if(hora > 12 && hora < 18){
    document.body.style.background = 'orange'
     //boa tarde
     imagem.src = 'img/tarde.jpg'
 }else if(hora > 18 && hora < 24){
    document.body.style.background = 'black'
    imagem.src = 'img/noite.jpg'
//boa noite
 }
}