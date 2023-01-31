//escopo léxico é quando uma função sabe onde ela foi criada e conhece os seus "vizinhos " como o nome, pois foi criado logo acima da função
const nome = 'luiz';
function falaNome(){
    const nome = 'otavio'
    console.log(nome)
}

falaNome();

function usaFalaNome(){
    falaNome();
}

usaFalaNome();