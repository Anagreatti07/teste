document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}

function exibenome ()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById9("mensagem").innerHTML = "meu nome é:" +usuario;
    document.getElementById("nome").value = "";
}