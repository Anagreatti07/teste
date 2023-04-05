document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);
document.getElementById("btn-soma").addEventListener("click" , exiberesult);


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

function exiberesult ()
{
    let usuario = document.getElementById("num1").value;
    let usuario = document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML = "num1" +num2;
    document.getElementById("nome").value = "";
}