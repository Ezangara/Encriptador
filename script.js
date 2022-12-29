var mensajeOriginal = document.getElementById("input-texto").value;
var respuesta = document.querySelector("#respuesta");
var mensajeEncriptado;
var mensajeDesencriptado;
var mensaje;
var estado = document.querySelector("#mensajes-estado");
var cuadro = document.getElementById("cuadro-resultado").innerHTML;
var munieco = document.getElementById("munieco");

function encriptar() {
  var mensajeOriginal = document.getElementById("input-texto").value;
  console.log(mensaje);
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
  } else {
    mensaje = document.getElementById("input-texto").value;
    mensaje = mensaje.replace(/a/gi, "ai");
    mensaje = mensaje.replace(/e/gi, "enter");
    mensaje = mensaje.replace(/i/gi, "imes");
    mensaje = mensaje.replace(/o/gi, "ober");
    mensaje = mensaje.replace(/u/gi, "ufat");
    munieco.parentNode.removeChild(munieco);
    document.getElementById("respuesta").innerText = mensaje;
    document.getElementById("mensajes-estado").innerText =
      "Mensaje encriptado con éxito";

    var botonCopiar = document.createElement("button");
    botonCopiar.id = "btn-copiar";
    botonCopiar.value = "Copiar";
    
    botonCopiar.textContent = "Copiar";
    var currentDiv = document.getElementById("cuadro-resultado");
    currentDiv.append(botonCopiar);
    document.getElementById("btn-copiar").onclick=function(){copiar()};
  }

  // respuesta.textContent = mensaje;
  // return mensaje;
}

function desencriptar(mensaje) {
  var mensajeOriginal = document.getElementById("input-texto").value;
  console.log(mensaje);
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
  } else {
    mensaje = mensaje.replace("letra E", "e");
    mensaje = mensaje.replace("letra I", "i");
    mensaje = mensaje.replace("letra O", "o");
    mensaje = mensaje.replace("letra U", "u");
    mensaje = mensaje.replace("letra A", "a");
    respuesta.textContent = mensaje;

    return mensaje;
  }
}

frase = encriptar(mensajeOriginal);
console.log(mensajeEncriptado);
mensajeDesencriptado = desencriptar(mensajeEncriptado);
console.log(mensajeDesencriptado);

function imprimir(frase) {
  let mensajeOriginal = document.getElementById("input-texto").value;
  frase = encriptar(mensajeOriginal);
  document.write("<big>" + frase + "</big>");
}

function copiar() {
  let text = document.getElementById('respuesta').innerHTML;
  const copyContent = navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
     
  console.log(copyContent)
  var texto=document.getElementById("input-texto").innerText
  texto.writeText(copyContent);
}