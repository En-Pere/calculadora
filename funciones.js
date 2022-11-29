var operandoa;
var operandob;
var operacion;

function init() {
  //variables
  var resultado = document.getElementById("resultado");
  var nueve = document.getElementById("nueve");
  var ocho = document.getElementById("ocho");
  var siete = document.getElementById("siete");
  var seis = document.getElementById("seis");
  var cinco = document.getElementById("cinco");
  var cuatro = document.getElementById("cuatro");
  var tres = document.getElementById("tres");
  var dos = document.getElementById("dos");
  var uno = document.getElementById("uno");
  var cero = document.getElementById("cero");
  var resta = document.getElementById("resta");
  var suma = document.getElementById("suma");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var igual = document.getElementById("igual");
  var reset = document.getElementById("reset");

  //eventos
  uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = function(e) {
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function(e) {
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick = function(e) {
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick = function(e) {
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick = function(e) {
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function(e) {
    resultado.textContent = resultado.textContent + "9";
  }
  cero.onclick = function(e) {
    resultado.textContent = resultado.textContent + "0";
  }

  reset.onclick = function(e) {
    resetear()
  }
  
  resta.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "-"
    limpiar();
  }
  suma.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "+"
    limpiar();
  }
  division.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "/"
    limpiar();
  }
  multiplicacion.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "*"
    limpiar();
  }

  igual.onclick = function(e) {
    operandob =resultado.textContent;
    resolver();
  }
};

function limpiar() {
  resultado.textContent = "";
};

function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
};

function resolver() {
  var res = 0;
  switch(operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;      
  }
  resetear();
  resultado.textContent = res;
};


  
//   reset.onclick = function(e) {
//     resetear();
//   }
//   suma.onlick = function(e) {
//     operandoa = resultado.textContent;
//     operacion = "+";
//     resetear();
//   }
//   resta.onlick = function(e) {
//     operandoa = resultado.textContent;
//     operacion = "-";
//     resetear();
//   }
//   division.onlick = function(e) {
//     operandoa = resultado.textContent;
//     operacion = "/";
//     resetear();
//   }
//   multiplicacion.onlick = function(e) {
//     resetear()
//   };

//   igual.onclick = function(e) {
//     operandob = resultado.textContent;
//     resolver();
//   }
// }


// function limpiarPantalla() {
//   resultado.textContent = "";
// }

// function resetear() {
//   resultado.textContent = "";
//   operandoa = 0;
//   operandob = 0;
//   operacion = "";
// };








