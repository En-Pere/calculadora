// let operandoa;
// let operandob;
// let operacion;

// function init() {
//   //variables
//   let resultado = document.getElementById("resultado");
//   let nueve = document.getElementById("nueve");
//   let ocho = document.getElementById("ocho");
//   let siete = document.getElementById("siete");
//   let seis = document.getElementById("seis");
//   let cinco = document.getElementById("cinco");
//   let cuatro = document.getElementById("cuatro");
//   let tres = document.getElementById("tres");
//   let dos = document.getElementById("dos");
//   let uno = document.getElementById("uno");
//   let cero = document.getElementById("cero");
//   let resta = document.getElementById("resta");
//   let suma = document.getElementById("suma");
//   let division = document.getElementById("division");
//   let multiplicacion = document.getElementById("multiplicacion");
//   let igual = document.getElementById("igual");
//   let reset = document.getElementById("reset");

//   //eventos
//   uno.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "1";
//   };
//   dos.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "2";
//   };
//   tres.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "3";
//   };
//   cuatro.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "4";
//   };
//   cinco.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "5";
//   };
//   seis.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "6";
//   };
//   siete.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "7";
//   };
//   ocho.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "8";
//   };
//   nueve.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "9";
//   };
//   cero.onclick = function (e) {
//     resultado.textContent = resultado.textContent + "0";
//   };

//   reset.onclick = function (e) {
//     resetear();
//   };

//   resta.onclick = function (e) {
//     operandoa = resultado.textContent;
//     operacion = "-";
//     limpiar();
//   };
//   suma.onclick = function (e) {
//     operandoa = resultado.textContent;
//     operacion = "+";
//     limpiar();
//   };
//   division.onclick = function (e) {
//     operandoa = resultado.textContent;
//     operacion = "/";
//     limpiar();
//   };
//   multiplicacion.onclick = function (e) {
//     operandoa = resultado.textContent;
//     operacion = "*";
//     limpiar();
//   };

//   igual.onclick = function (e) {
//     operandob = resultado.textContent;
//     resolver();
//   };
// }

// function limpiar() {
//   resultado.textContent = "";
// }

// function resetear() {
//   resultado.textContent = "";
//   operandoa = 0;
//   operandob = 0;
//   operacion = "";
// }

// function resolver() {
//   let res = 0;
//   switch (operacion) {
//     case "+":
//       res = parseFloat(operandoa) + parseFloat(operandob);
//       break;
//     case "-":
//       res = parseFloat(operandoa) - parseFloat(operandob);
//       break;
//     case "/":
//       res = parseFloat(operandoa) / parseFloat(operandob);
//       break;
//     case "*":
//       res = parseFloat(operandoa) * parseFloat(operandob);
//       break;
//   }
//   resetear();
//   resultado.textContent = res;
// }

// let resultado = document.getElementById("resultado");
// let nueve = document.getElementById("nueve");
// let ocho = document.getElementById("ocho");
// let siete = document.getElementById("siete");
// let seis = document.getElementById("seis");
// let cinco = document.getElementById("cinco");
// let cuatro = document.getElementById("cuatro");
// let tres = document.getElementById("tres");
// let dos = document.getElementById("dos");
// let uno = document.getElementById("uno");
// let cero = document.getElementById("cero");
// let resta = document.getElementById("resta");
// let suma = document.getElementById("suma");
// let division = document.getElementById("division");
// let multiplicacion = document.getElementById("multiplicacion");
// let igual = document.getElementById("igual");
// let reset = document.getElementById("reset");
// let numEscrito = [];

let resultado = 0;
let primerosNumeros = 0;
let segundosNumeros = 0;
let tipoOperacion;

document.getElementById("uno").addEventListener("click", unoValue);
document.getElementById("dos").addEventListener("click", dosValue);
document.getElementById("resta").addEventListener("click", restaValue);
document.getElementById("igual").addEventListener("click", igualValue);

function unoValue() {
  resultado += document.getElementById("uno").textContent;
  console.log(resultado);
}

function dosValue() {
  resultado += document.getElementById("dos").textContent;
  console.log(resultado);
}

function restaValue() {
  primerosNumeros = resultado;
  console.log("los primeros num: " + primerosNumeros);
  clearResultado();
  console.log("ahora el resultado es: " + resultado);
  tipoOperacion = "-";
}

function igualValue() {
  let total = Number(primerosNumeros) + tipoOperacion + Number(resultado);
  console.log(total);
  console.log(tipoOperacion);
  clearResultado();
}

function clearResultado() {
  resultado = 0;
}
