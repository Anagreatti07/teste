document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);

document.getElementById("btn-soma").addEventListener("click" , resultado1)

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