///////////////////////////////////////////////////////
let clar = true; // Variable para controlar el estado claro/oscuro

function modo_Oscuro() {
   const elemento = document.getElementById("IMGclaroActivado");


   if (clar) {
      document.getElementById("fons_barra").style.backgroundImage = "url('img/fonss_o.svg')";
      document.documentElement.style.setProperty("--colorFondoAzul", "#008ba6");
      document.documentElement.style.setProperty("--colorFondoTaronja", "#b07a14");
      document.documentElement.style.setProperty("--colorFondo", "#222222");
      document.documentElement.style.setProperty("--colorTexto", "#f1eff1");
      document.documentElement.style.setProperty("--cursorPuntero", "url(../img/punteroBlanco.png), auto");
      document.documentElement.style.setProperty("--cursorHover", "url(../img/hoverBlanco.png), auto");
      document.documentElement.style.setProperty("--imgCruz", "url(../img/cruzBlanca.png)");
      document.documentElement.style.setProperty("--cora1", "url(../img/cora1vnegro.svg)");
      document.documentElement.style.setProperty("--cora2", "url(../img/cora2vnegro.svg)");
      document.documentElement.style.setProperty("--cora4", "url(../img/cora4vnegro.svg)");
      document.documentElement.style.setProperty("--cora5", "url(../img/cora5vnegro.svg)");
      document.documentElement.style.setProperty("--colorFelicitats", "#f1eff1");


      clar = false;
      elemento.src = "img/oscuroActivado.svg"; // Cambiar a imagen de modo oscuro

   } else {
      document.getElementById("fons_barra").style.backgroundImage = "url('img/fonss.svg')";
      document.documentElement.style.setProperty("--colorFondoAzul", "#70C7E0");
      document.documentElement.style.setProperty("--colorFondoTaronja", "#e7ac3c");
      document.documentElement.style.setProperty("--colorFondo", "#F4F4F4");
      document.documentElement.style.setProperty("--colorTexto", "#000000");
      document.documentElement.style.setProperty("--cursorPuntero", "url(../img/punteroNegro.png), auto");
      document.documentElement.style.setProperty("--cursorHover", "url(../img/hoverNegro.png), auto");
      document.documentElement.style.setProperty("--imgCruz", "url(../img/cruz.png)");
      document.documentElement.style.setProperty("--cora1", "url(../img/cora1.svg)");
      document.documentElement.style.setProperty("--cora2", "url(../img/cora2.svg)");
      document.documentElement.style.setProperty("--cora4", "url(../img/cora4.svg)");
      document.documentElement.style.setProperty("--cora5", "url(../img/cora5.svg)");
      document.documentElement.style.setProperty("--colorFelicitats", "#C80062");


      clar = true;
      elemento.src = "img/claroActivado.svg"; // Cambiar a imagen de modo claro

   }
}