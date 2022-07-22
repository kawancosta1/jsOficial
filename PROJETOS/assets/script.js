const turnOn = document.querySelector('button#turnOn');
const turnOf = document.querySelector('button#turnOf');
const lamp = document.getElementById('lamp');

function verficalamp(){
    return lump.src.indexof('quebrada') > -1
}

function lampOn(){
   
lamp.src = '/assets/img/ligada.jpg';
    
}
function lampOf(){
    
    lamp.src = '/assets/img/desligada.jpg'
    
}
function lampbroken(){
    
    lamp.src = '/assets/img/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn)
turnOf.addEventListener('click', lampOf)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)

lamp.addEventListener('dblclick', lampbroken);