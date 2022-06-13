console.log(
    // screen.width
    //navigator // ele(o navigator) traz informações sobre o navegador
    //screen.height    
    //se vc quiser acessar o app name ou app version ou a linguagem
    // navigator.language
    // navigator.appVersion
    // navigator.appName
   //o location.href vai mostrar o caminho, agora, se você colocar location.href = "http://www.google.com" ele vai redirecionar automaticamente assim que vc entrar na pagina
   //o history é usado para voltar ou adiantar paginas, geralmente, igual eu fiz aqui em baixo


   )

   function voltar(){
       history.back()
   }
   function adiantar() {
       history.forward()
   }

   alert(screen.width)
   document.getElementById("largura").innerText = screen.width

//    no document.getelement... eu declarei que aquela div "largura" iria receber a largura da tela