///////////////////////////////////////////////////////
let clar = true; // Variable para controlar el estado claro/oscuro

function modo_Oscuro() {
   const elemento = document.getElementById("IMGclaroActivado");


   if (clar) {
      document.documentElement.style.setProperty("--colorFondoAzul", "#008eab");
      document.documentElement.style.setProperty("--colorFondoTaronja", "#0a0101");
      document.documentElement.style.setProperty("--colorFondo", "#222222");
      document.documentElement.style.setProperty("--colorTexto", "#c6c6c6");
      document.documentElement.style.setProperty("--cursorPuntero", "url(../img/punteroBlanco.png), auto");
      document.documentElement.style.setProperty("--cursorHover", "url(../img/hoverBlanco.png), auto");
      document.documentElement.style.setProperty("--imgCruz", "url(../img/cruzBlanca.png)");
      document.documentElement.style.setProperty("--cora1", "url(../img/cora1vnegro.svg)");
      document.documentElement.style.setProperty("--cora2", "url(../img/cora2vnegro.svg)");
      document.documentElement.style.setProperty("--cora4", "url(../img/cora4vnegro.svg)");
      document.documentElement.style.setProperty("--cora5", "url(../img/cora5vnegro.svg)");
      document.documentElement.style.setProperty("--colorFelicitats", "#96024b");

      let imagenesArticulos = document.querySelectorAll('article:not(#capitol1) img');
        imagenesArticulos.forEach(function(img) {
            img.style.opacity = "0.6";
        });


      clar = false;
      elemento.src = "img/oscuroActivado.svg"; // Cambiar a imagen de modo oscuro

   } else {
      document.documentElement.style.setProperty("--colorFondoAzul", "#70C7E0");
      document.documentElement.style.setProperty("--colorFondoTaronja", "#e49a0e");
      document.documentElement.style.setProperty("--colorFondo", "#F4F4F4");
      document.documentElement.style.setProperty("--colorTexto", "#222222");
      document.documentElement.style.setProperty("--cursorPuntero", "url(../img/punteroNegro.png), auto");
      document.documentElement.style.setProperty("--cursorHover", "url(../img/hoverNegro.png), auto");
      document.documentElement.style.setProperty("--imgCruz", "url(../img/cruz.png)");
      document.documentElement.style.setProperty("--cora1", "url(../img/cora1.svg)");
      document.documentElement.style.setProperty("--cora2", "url(../img/cora2.svg)");
      document.documentElement.style.setProperty("--cora4", "url(../img/cora4.svg)");
      document.documentElement.style.setProperty("--cora5", "url(../img/cora5.svg)");
      document.documentElement.style.setProperty("--colorFelicitats", "#C80062");

      let imagenesArticulos = document.querySelectorAll('article:not(#capitol1) img');
        imagenesArticulos.forEach(function(img) {
            img.style.opacity = "1"; // Restaurar la opacidad a 1 (completamente visible)
        });

      clar = true;
      elemento.src = "img/claroActivado.svg"; // Cambiar a imagen de modo claro

   }
}