let resultado = "";
let primerosNumeros = "";
let tipoOperacion;
let total = "";

document.getElementById("uno").addEventListener("click", unoValue);
document.getElementById("dos").addEventListener("click", dosValue);
document.getElementById("tres").addEventListener("click", tresValue);
document.getElementById("cuatro").addEventListener("click", cuatroValue);
document.getElementById("cinco").addEventListener("click", cincoValue);
document.getElementById("seis").addEventListener("click", seisValue);
document.getElementById("siete").addEventListener("click", sieteValue);
document.getElementById("ocho").addEventListener("click", ochoValue);
document.getElementById("nueve").addEventListener("click", nueveValue);
document.getElementById("cero").addEventListener("click", ceroValue);
document.getElementById("resta").addEventListener("click", restaValue);
document.getElementById("suma").addEventListener("click", sumaValue);
document.getElementById("multiplicacion").addEventListener("click", multiValue);
document.getElementById("division").addEventListener("click", diviValue);
document.getElementById("igual").addEventListener("click", igualValue);
document.getElementById("reset").addEventListener("click", resetValue);

function unoValue() {
  resultado += document.getElementById("uno").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function dosValue() {
  resultado += document.getElementById("dos").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function tresValue() {
  resultado += document.getElementById("tres").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function cuatroValue() {
  resultado += document.getElementById("cuatro").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function cincoValue() {
  resultado += document.getElementById("cinco").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function seisValue() {
  resultado += document.getElementById("seis").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function sieteValue() {
  resultado += document.getElementById("siete").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function ochoValue() {
  resultado += document.getElementById("ocho").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function nueveValue() {
  resultado += document.getElementById("nueve").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

function ceroValue() {
  resultado += document.getElementById("cero").textContent;
  checkLength();
  document.getElementById("resultado").innerHTML = resultado;
}

// al clicar en una operación se guarda en una variable el resultado que ibamos teniendo
// limpiamos el la variable resultado dejándola a 0
// y le asignamos el tipo de operación para enviarla al clicar =
function restaValue() {
  primerosNumeros = resultado;
  clearResultado();
  tipoOperacion = "-";
  document.getElementById("resultado").innerHTML = tipoOperacion;
}

function sumaValue() {
  primerosNumeros = resultado;
  clearResultado();
  tipoOperacion = "+";
  document.getElementById("resultado").innerHTML = tipoOperacion;
}

function multiValue() {
  primerosNumeros = resultado;
  clearResultado();
  tipoOperacion = "*";
  document.getElementById("resultado").innerHTML = tipoOperacion;
}

function diviValue() {
  primerosNumeros = resultado;
  clearResultado();
  tipoOperacion = "/";
  document.getElementById("resultado").innerHTML = tipoOperacion;
}

function resetValue() {
  clearPrimerosNumeros();
  clearResultado();
  document.getElementById("resultado").innerHTML = 0;
}

function igualValue() {
  switch (tipoOperacion) {
    case "-":
      total = Number(primerosNumeros) - Number(resultado);
      document.getElementById("resultado").innerHTML = total;
      clearResultado();
      clearPrimerosNumeros();
      break;
    case "+":
      total = Number(primerosNumeros) + Number(resultado);
      document.getElementById("resultado").innerHTML = total;
      clearResultado();
      clearPrimerosNumeros();
      break;
    case "*":
      total = Number(primerosNumeros) * Number(resultado);
      document.getElementById("resultado").innerHTML = total;
      clearResultado();
      clearPrimerosNumeros();
      break;
    case "/":
      total = Number(primerosNumeros) / Number(resultado);
      document.getElementById("resultado").innerHTML = total;
      clearResultado();
      clearPrimerosNumeros();
      break;
  }
}

function clearResultado() {
  resultado = "";
}
function clearPrimerosNumeros() {
  primerosNumeros = "";
}

function checkLength() {
  Number(resultado);
  if (resultado > 999999999) {
    alert("max 9 digits");
    clearResultado();
    clearPrimerosNumeros();
  } else {
  }
}
