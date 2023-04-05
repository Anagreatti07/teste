document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);
document.getElementById("botao").addEventListener("click" , exiberesultado1);


function showcolor()
{
    document.body.style.backgroundColor = "pink";
}

function exibenome ()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "meu nome é:" +usuario;
    document.getElementById("nome").value = "";
}


function exiberesultado1 ()
{
    let usuario = document.getElementById("num1").value;
    let usuario = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = "num1" + "num2";
}
