document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);
document.getElementById("btn-soma").addEventListener("click" , exiberesultado1);
document.getElementById("btn-dividir").addEventListener("click" , exiberesultado2);
document.getElementById("btn-multiplicar").addEventListener("click" , exiberesultado3);
document.getElementById("btn-subtrair").addEventListener("click" , exiberesultado4);


function showcolor()
{
    document.body.style.backgroundColor = "pink";
}

function exibenome ()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}


function exiberesultado1 ()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = parseFloat(num1) + parseFloat(num2);
}

function exiberesultado2 ()
{
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML = parseFloat(num3) / parseFloat(num4);
}

function exiberesultado3 ()
{
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    document.getElementById("resultado3").innerHTML = parseFloat(num5) * parseFloat(num6);
}

function exiberesultado4 ()
{
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    document.getElementById("resultado4").innerHTML = parseFloat(num7) - parseFloat(num8);
}
