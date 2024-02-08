//hola

const menuCapitulos = document.querySelector('.menuCapitulos');
const capitulos = document.querySelectorAll('.capitols');
const menuButton = document.getElementById('menu');
const cruzButton = document.getElementById('cruz');

let menuCapitulosAbierto = false;

function mostrar(numCap) {
   // Ocultamos todos los capítulos
   let todosCaps = document.querySelectorAll(".capitols");

   todosCaps.forEach(function (element, index) {
      if (index + 1 == numCap) {
         element.style.display = "block";
      } else {
         element.style.display = "none";
      }
   });

   window.scrollTo(0, 0);
   menuCapitulos.style.right = '-25rem';
   menuCapitulosAbierto = false;

   // Iterar sobre cada elemento en la NodeList capitulos
   capitulos.forEach(capitulo => {
      capitulo.style.filter = 'none';
   });

   // Permitir el scroll al cerrar el menú
   document.body.style.overflow = "auto";
}

// Abre el menú cuando se hace clic en el botón de menú
menuButton.addEventListener('click', () => {
   menuCapitulos.style.right = '0rem';
   menuCapitulosAbierto = true;
   // Aplicar el filtro blur con una transición
   capitulos.forEach(capitulo => {
      capitulo.style.filter = "blur(10px)";
      capitulo.style.transition = "filter 0.2s ease"; // Transición de 0.2 segundos
   });
   // Bloquear el scroll al abrir el menú
   document.body.style.overflow = "hidden";
});

// Cierra el menú cuando se hace clic en el botón de cruz
cruzButton.addEventListener('click', () => {
   menuCapitulos.style.right = '-25rem';
   menuCapitulosAbierto = false;
   // Remover el filtro blur con una transición
   capitulos.forEach(capitulo => {
      capitulo.style.filter = 'none';
      capitulo.style.transition = "filter 0.2s ease"; // Transición de 0.2 segundos
   });

   // Permitir el scroll al cerrar el menú
   document.body.style.overflow = "auto";
});


