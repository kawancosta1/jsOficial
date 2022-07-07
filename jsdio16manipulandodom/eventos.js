const botao = document.getElementById("meuBotao");

// quando clicar o botao:...a função vai ficar olhando o botao e quando ele for ativado, addEventListener vai ativar o botao
botao.addEventListener("click", outraFuncao);

// ou da pra fazer no html msm, com o onclick
/*
<!DOCTYPE html>
<html>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

</body>
</html> 
*/