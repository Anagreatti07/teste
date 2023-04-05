document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);
document.getElementById("btn-soma").addEventListener("click" , exiberesultado);


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

function exiberesultado ()
{
    let usuario = document.getElementById("num1").value;
    let usuario = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = parseInt(num1) + parseInt(num2)
}