/*const myHeading = document.querySelector("h1");
myHeading.textContent = "¡Hola mundo!";*/

const imagen = document.querySelector('img');

imagen.onclick = () => {
  const fuente = imagen.getAttribute('src');

  if (fuente === 'images/singing.jpg') {
    imagen.setAttribute('src', 'images/ilus1.jpg')
  } else {
    imagen.setAttribute('src', 'images/singing.jpg')
  }
}

let boton = document.querySelector('button');
let titulo = document. querySelector('h1');

function definirUsuario(){
  const nombre = prompt('Ingrese su nombre');

  if (!nombre) {
    definirUsuario();
  }

  else {
    localStorage.setItem('nombre', nombre);
    titulo.textContent = `Bienvenido a la página, ${nombre}`;
  }
}

if(!localStorage.getItem('nombre')) {
  definirUsuario();
} else {
  const nombreAlmacenado = localStorage.getItem('nombre');
  titulo.textContent = `Bienvenido a la página, ${nombreAlmacenado}`;
}

boton.onclick = () => {
  definirUsuario();
}