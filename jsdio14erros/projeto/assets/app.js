// função pra pegar os gatinhos

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat');
const catimg = document.getElementById('cat');

const getCats = async() => {
    try{
    const data = await fetch(BASE_URL);
    // a base url vai retornar outra promisse e a gente tem que converter isso pra json, e agente vai dar um await em data e depois disso e vai trasnformar em jason = json(); *função json*
    const json = await data.json();

    // resultado.webpurl; o resultado seria no caso o json que recebeu as informações
    return  json.webpurl;
    }catch(e){
        console.log(e.message);
    }
};

const loadimg = async () => {
    catimg.src = await getCats();
}

// eu coloquei que no evento clicar ele vai chamar a função loadimg, que vai esperar o getCat ficar pronto para dar certo
catBtn.addEventListener('click', loadimg);

// eu chamei a função para a pagina iniciar com uma imagem
loadimg();

