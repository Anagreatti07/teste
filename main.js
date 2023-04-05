document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);
document.getElementById("btn-soma").addEventListener("click" , exiberesultadosoma);
document.getElementById("btn-dividir").addEventListener("click" , exiberesultadodividir);
document.getElementById("btn-multiplicar").addEventListener("click" , exiberesultadomultiplicar);
document.getElementById("btn-subtrair").addEventListener("click" , exiberesultadosubtrair);


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


function exiberesultadosoma ()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultadosoma").innerHTML = parseFloat(num1) + parseFloat(num2);
}

function exiberesultadodividir ()
{
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    document.getElementById("resultadodividir").innerHTML = parseFloat(num3) / parseFloat(num4);
}

function exiberesultadomultiplicar ()
{
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    document.getElementById("resultadomultiplicar").innerHTML = parseFloat(num5) * parseFloat(num6);
}

function exiberesultadosubtrair ()
{
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    document.getElementById("resultadosubtrair").innerHTML = parseFloat(num7) - parseFloat(num8);
}
