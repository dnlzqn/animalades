let paraulesDestacades = [{
   "titol": "Pigmeu",
   "resposta": "Tribu de l’Àfrica que es caracteritza per ser d’estatura molt baixa.",
}, {
   "titol": "Mínim comú múltiple",
   "resposta": "Concepte matemàtic per resoldre problemes.",
}, {
   "titol": "Entomòleg",
   "resposta": "Persona que estudia els insctes.",
}, {
   "titol": "Pintes",
   "resposta": "Expressió coloquial per referir-nos a l’aspecte d’una persona.",
}, {
   "titol": "Zel",
   "resposta": "L'època de zel dels animals és quan els mascles i les femelles s'ajunten per a tenir cries.",
}];

function destacar(posicioParaula) {
   const paraulesDestacadesElement = document.getElementById("palabrasDestacadas");
   const titolDestacatElement = document.getElementById("titolDestacat");
   const textDestacatElement = document.getElementById("textDestacat");
   const capitols = document.getElementById('capitols');

   titolDestacatElement.innerHTML = paraulesDestacades[posicioParaula].titol;
   textDestacatElement.innerHTML = paraulesDestacades[posicioParaula].resposta;

   capitols.style.filter = "blur(5px)";

   // Muestra el contenido destacado con una transición
   paraulesDestacadesElement.style.display = "flex";
   setTimeout(() => {
      paraulesDestacadesElement.style.transform = "scale(1)";
      paraulesDestacadesElement.style.opacity = "1";
   }, 0);

   // Bloquear el scroll
   document.body.style.overflow = "hidden";
}

function amagarDestacat() {
   const paraulesDestacadesElement = document.getElementById("palabrasDestacadas");
   const capitols = document.getElementById('capitols');

   capitols.style.filter = "none";

   // Oculta el contenido destacado con una transición
   paraulesDestacadesElement.style.transform = "scale(0.5)";
   paraulesDestacadesElement.style.opacity = "0";

   // Utiliza un temporizador para asegurar que la transición se complete antes de ocultar
   setTimeout(() => {
      paraulesDestacadesElement.style.display = "none";
      document.body.style.overflow = "auto";
   }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
   var scrollElement = document.getElementById("elementoScroll");
   var c1scrollElement = document.querySelector(".c1scroll");

   scrollElement.addEventListener("click", function () {
      // Realizar desplazamiento suave hacia el elemento con la clase c1scroll
      c1scrollElement.scrollIntoView({
         behavior: "smooth"
      });
   });
});
