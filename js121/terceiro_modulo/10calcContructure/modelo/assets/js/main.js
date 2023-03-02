function Calculadora(){
    //pode ter outras funções fora do objeto ou var sla
    
        //acessar com this.display
        this.display = document.querySelector('.display'),
        this.btnClear = document.querySelector('.btn-clear'),
        
        this.inicia = () => {
            this.clickBotoes();
            this.pressionaEnter()
        },


        this.pressionaEnter =() => {
            //usei a arrow function para não perder o this 
            //coloquei no display, mas poderia ser document, pois se o focus do cursor tivesse em qualquer lugar da página iria funcionar
            this.display.addEventListener("keyup", e => {
                if(e.keycode === 13){
                    this.realizaConta()
                }
            })
        }

        this.realizaConta = () => {
        let conta = this.display.value;

      
        try{
            conta = eval(conta);
            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta)
        }catch(e){
alert(`${e} é conta invalida`)
return;
        }
        },
    this.clearDisplay = () => this.display.value = ''
    

    //quando é apenas uma linha não precisa de chaves nas arrows functions 
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

        //no slice é 0 tamanho da string e -1 elemento, ou seja, apagar o primeiro

    



      //metodos vem para baixo  
      //o btnparadisplay vai mandar o valor do elemento clicado para o input, que ai no addEventListner, usaremos o el.innerHTML como parametro
    this.btnParaDisplay = (v) => this.display.value += v;
    
    this.clickBotoes = () => {
        //no clickBotoes é a calculadora que é o this mas no addEventListner não é a calculadora, e devemos apontar o this para a calculadaora não o document, onde o addEvent pertence, a n ser pelas arrows functions ai não precisa 
      document.addEventListener('click',(event) => {

    const el = event.target
console.log(this)
//o el fui usado como parametro no btn para display
    if(el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText);
    if(el.classList.contains('btn-clear'))this.clearDisplay();
    if(el.classList.contains('btn-del'))this.apagaUm();
    if(el.classList.contains('btn-eq')) this.realizaConta();
        //parametro para pegar o conteudo do botao
        
    
        
      }) ; 
    }
    
};

//"olha js use o meu molde pra criar um novo objeto calculadora"
const calculadora = new Calculadora();

calculadora.inicia()
