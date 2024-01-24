
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
  return;
}

function asignarTextMensaje(elemento, texto) {
  let parrafo = document.querySelector(elemento);
  parrafo.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextMensaje(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {

    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextMensaje("p", "El numero secreto es menor");
    } else {
      asignarTextMensaje("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";

}

function reiniciarJuego(){
   numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  intentos = 1;
  asignarTextMensaje("p", "indica un numero del 1 al 10");
  limpiarCaja();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si el numero generado esta incluido esta en la lista 

  //si ya sorteamos todos los numeros
  if(listaNumerosSorteados == numeroMaximo){
    asignarTextMensaje("h1", "Ya se han sorteado todos los numeros posibles");
  }else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado
    }
  }

  
}


asignarTextoElemento("h1", "juego del numero secreto");
asignarTextMensaje("p", `indica un numero del 1 al ${numeroMaximo} `);
