const ajustes = document.querySelector('.ajustes');
const ajustesButton = document.getElementById('ajustes');
const cruz2Button = document.getElementById('cruz2');

//ajustes.style.right = '-24rem';
let ajustesAbierto = false;

// Abre ajustes cuando se hace clic en el botón de ajustes
ajustesButton.addEventListener('click', () => {
   ajustes.style.right = '0rem';
   ajustesAbierto = true;
});

// Cierra ajustes cuando se hace clic en el botón de cruz2
cruz2Button.addEventListener('click', () => {
   ajustes.style.right = '-24rem';
   ajustesAbierto = false;
});



function Estilo_Tipo() {
   const elemento = document.getElementById("IMGestiloActivado");

   if (clar) {

      document.documentElement.style.setProperty("--estiloTexto", 'IBM Plex Serif, serif');

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
      document.documentElement.style.setProperty("--medidaTexto-h2", "24px");
      document.documentElement.style.setProperty("--medidaTexto-h3", "20px");
      document.documentElement.style.setProperty("--medidaTexto-p", "19px");
      document.documentElement.style.setProperty("--column-gap", " 2rem");

      clar = false;
      elemento.src = "img/grandeActivado.svg"; // Cambiar a imagen de modo oscuro
   } else {
      document.documentElement.style.setProperty("--medidaTexto-h2", " 20px");
      document.documentElement.style.setProperty("--medidaTexto-h3", " 18px");
      document.documentElement.style.setProperty("--medidaTexto-p", " 16px");
      document.documentElement.style.setProperty("--column-gap", " 0.6rem");

      clar = true;
      elemento.src = "img/pequeActivado.svg"; // Cambiar a imagen de modo claro
   }
}