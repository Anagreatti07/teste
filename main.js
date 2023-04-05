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

const $form = document.querySelector("form");
const $a = document.querySelector("#a");
const $b = document.querySelector("#b");
const $c = document.querySelector("#c");
const $x1 = document.querySelector("#x1");
const $x2 = document.querySelector("#x2");

function bhaskara() {
  const a = $a.value;
  const b = $b.value;
  const c = $c.value;

  const delta = b * b - 4 * a * c;

  if (!a || !b || !c) {
    createAlert("Insira os valores de a, b e c");
  } else if (a == 0) {
    createAlert("O valor de <strong>a</strong>, deve ser diferente de 0");
  } else if (delta < 0) {
    createAlert("Sem raízes reais");
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    $x1.value = x1;
    $x2.value = x2;
  }
}

function createAlert(msg) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);

  setTimeout(function () {
    deleteAlert();
  }, 3000);
}

function deleteAlert() {
  const list = document.querySelectorAll(".alert");
  for (const item of list) {
    item.remove();
  }
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  bhaskara();
});