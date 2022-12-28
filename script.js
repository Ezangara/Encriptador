var mensajeOriginal = document.getElementById("input-texto").value;
var respuesta = document.querySelector("#respuesta");
var mensajeEncriptado;
var mensajeDesencriptado;
var mensaje;

function encriptar() {
  var mensajeOriginal = document.getElementById("input-texto").value;
  console.log(mensajeOriginal);
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
  } else {
    mensaje = document.getElementById("input-texto").value;
    mensaje = mensaje.replace(/a/gi, "letra A");
    mensaje = mensaje.replace(/e/gi, "letra E");
    mensaje = mensaje.replace(/i/gi, "letra I");
    mensaje = mensaje.replace(/o/gi, "letra O");
    mensaje = mensaje.replace(/u/gi, "letra U");
  }
  // document.getElementById("respuesta").innerText=mensaje;
  respuesta.textContent = mensaje;
  return mensaje;
}

function desencriptar(mensaje) {
  mensaje = mensaje.replace("letra E", "e");
  mensaje = mensaje.replace("letra I", "i");
  mensaje = mensaje.replace("letra O", "o");
  mensaje = mensaje.replace("letra U", "u");
  mensaje = mensaje.replace("letra A", "a");
  return mensaje;
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
