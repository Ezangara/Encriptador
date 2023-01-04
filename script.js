var mensajeOriginal = document.getElementById("input-texto").value;
var respuesta = document.querySelector("#respuesta");
var mensajeEncriptado;
var mensajeDesencriptado;
var mensaje;
var estado = document.querySelector("#mensajes-estado");
var cuadro = document.getElementById("cuadro-resultado").innerHTML;
var munieco = document.getElementById("munieco");
let contador = 0
//***************************************************** */
function encriptar() {
  var mensajeOriginal = document.getElementById("input-texto").value;
  
  if (mensajeOriginal == "") {
    mensaje = "Ningún mensaje fue encontrado";
    if (window.screen.width>1000){
      munieco.style.display = "flex";
    }
    
  } else {

    mensaje = document.getElementById("input-texto").value;
    mensaje = mensaje.replace("a", "ai");
    mensaje = mensaje.replace("e", "enter");
    mensaje = mensaje.replace("i", "imes");
    mensaje = mensaje.replace("o", "ober");
    mensaje = mensaje.replace("u", "ufat");
    //*************************************** */


    munieco.style.display = "none";
    document.getElementById("mensajes-estado").innerText =
      "Mensaje encriptado con éxito";
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
    if (window.screen.width>1000){
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
      "Mensaje desencriptado con éxito";
    document.getElementById("btn-copiar").style.display = "flex";
    document.getElementById("btn-copiar").onclick = function () {
      copiar(mensaje);
    };
  }
  document.getElementById("respuesta").innerText = mensaje;
}

//************************************************************************* */
// frase = encriptar(mensajeOriginal);
// console.log(mensajeEncriptado);
// mensajeDesencriptado = desencriptar(mensajeEncriptado);
// console.log(mensajeDesencriptado);

// function imprimir(frase) {
//   let mensajeOriginal = document.getElementById("input-texto").value;
//   frase = encriptar(mensajeOriginal);
//   document.write("<big>" + frase + "</big>");
// }

function copiar(textoCopiado) {
  console.log(textoCopiado);
  textoPegado = document.getElementById("input-texto");
  textoPegado.value = textoCopiado;
  if (window.screen.width>1000){
    munieco.style.display = "flex";
  }
  document.getElementById("btn-copiar").style.display = "none";
  // ****************VERSIÓN CON API---FALTA AFINAR EL PEGADO****************//
  // let text = document.getElementById('respuesta').innerHTML;
  // const copyContent = navigator.clipboard.writeText(text);
  //     console.log('Content copied to clipboard');

  // console.log(copyContent)
  // textoCopiado=navigator.clipboard.readText(copyContent);
  // console.log(textoCopiado);
  // document.getElementById("input-texto").value=textoCopiado;
}
