
// é sempre bom usar o console pra testar as coisas
// function changeMode(){
//     console.log('cliquei')
// }

function changeMode(){
changeClasses()
changeText()

}
function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

}

function changeText(){
    if(body.classList.contains('dark-mode')){
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
        
    }
    button.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
        return;

}


const button = document.getElementById('mode-selector');
console.log(button);
const h1 = document.getElementById('page-title');
// vai retornar um array, então a gente tem que fazer ele retornar só o primeiro item, que tem o indice 0, mesma coisa com o footer
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)