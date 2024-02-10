// Aquí se declaran como constantes (const) estos tres elementos de vuestro html
const menuCapitulos = document.querySelector('.menuCapitulos');
const capitulos = document.querySelectorAll('.capitols');
const menuButton = document.getElementById('menu');
const cruzButton = document.getElementById('cruz');

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

    // Iterar sobre cada elemento en la NodeList capitulos
    capitulos.forEach(capitulo => {
        capitulo.style.filter = 'none';
        //        document.body.style.backgroundColor = 'white';
    });

    // Permitir el scroll al cerrar el menú
   document.body.style.overflow = "auto";
}

// Abre el menú cuando se hace clic en el botón de menú
menuButton.addEventListener('click', () => {
    menuCapitulos.style.right = '0rem';
    capitulos.forEach(capitulo => {
        capitulo.style.filter = "blur(10px)";
        //                document.body.style.backgroundColor = "#A9A9A9";
    });
    // Bloquear el scroll al abrir el menú
    document.body.style.overflow = "hidden";

    document.body.style.transition = '.2s';
});

// Cierra el menú cuando se hace clic en el botón de cruz
cruzButton.addEventListener('click', () => {
    menuCapitulos.style.right = '-25rem';
    //        document.body.style.backgroundColor = 'white';
    document.body.style.transition = '.2s';

    // Iterar sobre cada elemento en la NodeList capitulos
    capitulos.forEach(capitulo => {

        capitulo.style.filter = 'none';

    });

   document.body.style.overflow = "auto";

});

// Cierra el menú si se hace clic fuera de él o de su botón de apertura
document.addEventListener('click', (event) => {
    if (!menuCapitulos.contains(event.target) && event.target !== menuButton) {
        menuCapitulos.style.right = '-25rem';
        capitulos.forEach(capitulo => {
            capitulo.style.filter = 'none';
        });
        //               document.body.style.backgroundColor = 'white';
        document.body.style.transition = '.2s';
        document.body.style.overflow = "auto";
    }

});





const ajustes = document.querySelector('.ajustes');
const ajustesButton = document.getElementById('ajustes');
const cruz2Button = document.getElementById('cruz2');


// Abre ajustes cuando se hace clic en el botón de ajustes
ajustesButton.addEventListener('click', () => {
    ajustes.style.right = '0rem';
    capitulos.forEach(capitulo => {
        //        capitulo.style.filter = "blur(10px)";
        //        document.body.style.backgroundColor = "#BFBFBF";
    });

    document.body.style.transition = '.2s';
});



// Cierra ajustes cuando se hace clic en el botón de cruz2
cruz2Button.addEventListener('click', () => {
    ajustes.style.right = '-24rem';
    capitulos.forEach(capitulo => {
        capitulo.style.filter = 'none';
        //        document.body.style.backgroundColor = 'white';
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
        //document.body.style.backgroundColor = 'white';
        document.body.style.transition = '.2s';
    }
});


///////////////////////////////////////////////////////
let clar = true; // Variable para controlar el estado claro/oscuro

function modo_Oscuro() {
   const elemento = document.getElementById("IMGclaroActivado");


   if (clar) {
      document.documentElement.style.setProperty("--colorFondoAzul", "#008eab");
      document.documentElement.style.setProperty("--colorFondoTaronja", "#0a0101");
      document.documentElement.style.setProperty("--colorFondo", "#222222");
      document.documentElement.style.setProperty("--colorTexto", "#d4d4d4");
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


///////////////////////////////////////////////////////
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

//function Estilo_Tipo() {
//    const elemento = document.getElementById("imgEstilo1");
//    if (Estilo_Tipo) {
//        document.documentElement.style.setProperty("--colorFondo", "#000000");
//
//
//        Estilo_Tipo = false;
//        elemento.src = "img/img/elipseAmarillo.svg"; // Cambiar a imagen de modo oscuro
//
//    } else {
//
//
//
//        Estilo_Tipo = true;
//        elemento.src = "img/elipseAC.svg"; // Cambiar a imagen de modo claro
//    }
//}


//function modoClaro() {
//    var imagen = document.getElementById('modoClaro');
//    var fondo = document.body;
//    var sombraMenu = document.getElementById('menuCapitulos');
//
//    if (imagen.src.match("img/claroActivado.svg")) {
//        imagen.src = "img/oscuroActivado.svg";
//    } else {
//        imagen.src = "img/claroActivado.svg";
//    }
//
//    if (fondo.style.backgroundColor === "#FFFFFF") {
//        fondo.style.backgroundColor = "#000000";
//    } else {
//        fondo.style.backgroundColor = "#FFFFFF";
//    }
//    }

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
        c1scrollElement.scrollIntoView({ behavior: "smooth" });
    });
});
