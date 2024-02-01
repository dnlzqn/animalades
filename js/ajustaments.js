const ajustes = document.querySelector('.ajustes');
const ajustesButton = document.getElementById('ajustes');
const cruz2Button = document.getElementById('cruz2');

// Abre ajustes cuando se hace clic en el botón de ajustes
ajustesButton.addEventListener('click', () => {
   ajustes.style.right = '0rem';
   capitulos.forEach(capitulo => {
      // capitulo.style.filter = "blur(10px)";
      // document.body.style.backgroundColor = "#BFBFBF";
   });

   document.body.style.transition = '.2s';
});

// Cierra ajustes cuando se hace clic en el botón de cruz2
cruz2Button.addEventListener('click', () => {
   ajustes.style.right = '-24rem';
   capitulos.forEach(capitulo => {
      capitulo.style.filter = 'none';
      // document.body.style.backgroundColor = 'white';
      document.body.style.transition = '.2s';
   });
});

document.addEventListener('click', (event) => {
   // Verifica si el clic fue fuera de .menuCapitulos y .ajustes
   const clickedOutsideMenuCapitulos = !menuCapitulos.contains(event.target) && event.target !== menuButton;
   const clickedOutsideAjustes = !ajustes.contains(event.target) && event.target !== ajustesButton;

   if (clickedOutsideMenuCapitulos && clickedOutsideAjustes) {
      // Cierra .menuCapitulos y .ajustes
      menuCapitulos.style.right = '-22rem';
      ajustes.style.right = '-24rem';

      // Restaura el estilo de los capítulos
      capitulos.forEach(capitulo => {
         capitulo.style.filter = 'none';
      });

      // Restaura el color de fondo del body
      // document.body.style.backgroundColor = 'white';
      document.body.style.transition = '.2s';
   }
});

function Estilo_Tipo() {
   const elemento = document.getElementById("IMGestiloActivado");


   if (clar) {

      document.documentElement.style.setProperty("--estiloTexto", 'Merriweather, serif');


      clar = false;
      elemento.src = "img/sinestiloActivado.svg"; // Cambiar a imagen de modo oscuro
   } else {

      document.documentElement.style.setProperty("--estiloTexto", 'IBM Plex Sans, sans-serif');


      clar = true;
      elemento.src = "img/estiloActivado.svg"; // Cambiar a imagen de modo claro
   }
}

function Medida_Tipo() {
   const elemento = document.getElementById("IMGpequeActivado");


   if (clar) {
      document.documentElement.style.setProperty("--medidaTexto-p", " 16px");
      document.documentElement.style.setProperty("--medidaTexto-p", " 20px");
      document.documentElement.style.setProperty("--medidaTexto-h2", " 20px");
      document.documentElement.style.setProperty("--medidaTexto-h2", " 24px");
      document.documentElement.style.setProperty("--medidaTexto-h3", " 18px");
      document.documentElement.style.setProperty("--medidaTexto-h3", " 22px");
      document.documentElement.style.setProperty("--column-gap", " 0.6rem");


      clar = false;
      elemento.src = "img/grandeActivado.svg"; // Cambiar a imagen de modo oscuro
   } else {
      document.documentElement.style.setProperty("--medidaTexto-p", "20px");
      document.documentElement.style.setProperty("--medidaTexto-p", "16px");
      document.documentElement.style.setProperty("--medidaTexto-h2", "24px");
      document.documentElement.style.setProperty("--medidaTexto-h2", "20px");
      document.documentElement.style.setProperty("--medidaTexto-h3", "22px");
      document.documentElement.style.setProperty("--medidaTexto-h3", "18px");
      document.documentElement.style.setProperty("--column-gap", " 2rem");


      clar = true;
      elemento.src = "img/pequeActivado.svg"; // Cambiar a imagen de modo claro
   }
}