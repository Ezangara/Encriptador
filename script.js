
var mensajeOriginal;
var mensaje;
var munieco = document.getElementById("munieco");

//***************************************************** */
function encriptar() {
  mensajeOriginal = document.getElementById("input-texto").value;
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
    if (window.screen.width > 1000) {
      munieco.style.display = "flex";
    }
  } else {
    mensaje = document.getElementById("input-texto").value;
    mensaje = mensaje.replace("a", "ai");
    mensaje = mensaje.replace("e", "enter");
    mensaje = mensaje.replace("i", "imes");
    mensaje = mensaje.replace("o", "ober");
    mensaje = mensaje.replace("u", "ufat");
    munieco.style.display = "none";
    document.getElementById("mensajes-estado").innerText =
      "Mensaje ENCRIPTADO con éxito";
    document.getElementById("btn-copiar").style.display = "flex";
    document.getElementById("btn-copiar").onclick = function () {
      copiar(mensaje);
    };
  }
  document.getElementById("respuesta").innerText = mensaje;
}

//*********************************************************************** */
function desencriptar(mensaje) {
  var mensajeOriginal = document.getElementById("input-texto").value;
  console.log(mensaje);
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
    if (window.screen.width > 1000) {
      munieco.style.display = "flex";
    }
  } else {
    mensaje = document.getElementById("input-texto").value;
    mensaje = mensaje.replace("imes", "i");
    mensaje = mensaje.replace("ai", "a");
    mensaje = mensaje.replace("enter", "e");
    mensaje = mensaje.replace("ober", "o");
    mensaje = mensaje.replace("ufat", "u");
    munieco.style.display = "none";
    document.getElementById("mensajes-estado").innerText =
      "Mensaje DESENCRIPTADO con éxito";
    document.getElementById("btn-copiar").style.display = "flex";
    document.getElementById("btn-copiar").onclick = function () {
      copiar(mensaje);
    };
  }
  document.getElementById("respuesta").innerText = mensaje;
}

//************************************************************************* *//
function copiar(textoCopiado) {
  textoPegado = document.getElementById("input-texto");
  textoPegado.value = textoCopiado;
  document.getElementById("mensajes-estado").innerText =
    "Mensaje COPIADO con éxito";
  document.getElementById("respuesta").innerText = "";
  if (window.screen.width > 1000) {
    munieco.style.display = "flex";
  }
  document.getElementById("btn-copiar").style.display = "none";
}
