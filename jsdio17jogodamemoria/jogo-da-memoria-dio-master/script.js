// o all é pra selecionar TODAS as cartas, assim formando um array
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipcard(){
    // qapós clicar nas duas cartas o usuário tem que esperar até poder clicar em outras
    if(lockBoard) return;
    // aassim o usuário não consegue clicar na mesma carta, já que o this é a carta clicada
    if(this === firstCard) return;
    // coloquei o add ao invés do toggle pq o toggle tira e coloca, ou seja, vc pode virar e desvirar a carta,já o addvc pode virar uma vez só, já que ele add a classe só uma vez
    this.classList.add('flip');
    // quando chamar a função, obviamente o hasFlippedCard vai ser true pq ele só seria ativado quando clicasse a primeira vez na carta na rodada
    if(!hasFlippedCard){
        hasFlippedCard = true;
        // o this é o card flicado, ou seja, vai retornar a primeira carta clicada pra assim o secondCard retornar a próxima carta clicada
        firstCard = this;
        return;
    }
    secondCard = this;
    // o has tem que zerar a cada rodada
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
// caso elas não sejam iguais essa function vai desviralas
    unflipCards();
}
// essa aqui vai desabilitar as cartas quando clicadas
function disableCards(){
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click',flipcard);
    resetboard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip')
       resetboard();
    }, 1500);
}

function resetboard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
// cada div no flex recebe um numero, com esses numeros nós iremos embaralhar

// embaralhar
// function shuffle(){
//     // o floor arredonda o numero
//     cards.forEach((card) =>{
//         let ramdomPosition = Math.floor(Math.random() * 12);
//         card.style.order = ramdomPosition;
//     })
// }
// AGORA EU VOU FAZER ELA NUMA FUNÇÃO SEMPRE QUE INICIAR O JOGO = IMEDIATLY FUNCTION
(function shuffle(){
    //    o floor arredonda o numero
        cards.forEach((card) =>{
             let ramdomPosition = Math.floor(Math.random() * 12);
             card.style.order = ramdomPosition;
         })
     })();

// o for each é pra percorrer todas as cartas, ou seja, se eu clicar em qualquer carta ele vai ativar a class em qualquer carta, mais de uma vez, se não tivesse o for eche, e eu clicasse em uma carta e depois na outra, a segunda ia tirar a classe, pro js não seria uma carta diferente
cards.forEach((card) => {
    card.addEventListener('click', flipcard)
})