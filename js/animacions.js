gsap.registerPlugin(ScrollTrigger);

const tlletres = gsap.timeline({
   onComplete: function () {
      // Esta función se ejecutará cuando la animación haya terminado
      // Puedes ocultar o quitar el elemento aquí
      document.querySelector(".pantCarga").style.display = "none";
   }
});

tlletres.from(".pantCarga", {
   top: '0vh',
   duration: 3,
}, 4);
tlletres.from(".barraSuperior", {
   top: 0,
   duration: 2,
}, 6);
tlletres.from("#fondoBarra", {
   top: '-10vh',
   duration: 2,
}, 6);
tlletres.from(".Animalades", {
   left: '-100vw',
   duration: 2,
}, 7);
tlletres.from(".bloqueAnimaladsLogo", {
   bottom: '-30vh',
   duration: 2,
}, 7);
tlletres.from("#fondoo", {
   bottom: '-30vh',
   duration: 2,
}, 7);
tlletres.from("#nenInici", {
   bottom: '-30vh',
   duration: 2,
   opacity: 0
}, 7);
tlletres.from("#cB", {
   scaleX: -1,
   duration: 2,
   opacity: 0
}, 8);
tlletres.from("#cB2", {
   scaleX: -1,
   duration: 2,
   opacity: 0
}, 9);
tlletres.from("#cB3", {
   scaleX: -1,
   duration: 2,
   opacity: 0
}, 10);

const Animalades = document.querySelector('.Animalades');
const cB = document.querySelector('#cB');
const cB2 = document.querySelector('#cB2');
const cB3 = document.querySelector('#cB3');
const nenInici = document.querySelector('#nenInici');

const tl = gsap.timeline({
   scrollTrigger: {
      markers: false,
      start: 'top top',
      end: '50% 100%',
      scrub: true,
      pin: true,
   },
});

tl.to(Animalades, {
   y: '35vh',
   duration: 5000,
   opacity: 0
}, 1)
tl.to(cB, {
   y: '30vh',
   duration: 5000,
   scaleX: -1
}, 1)
tl.to(cB2, {
   y: '30vh',
   duration: 5000,
   scaleX: -1
}, 1)
tl.to(cB3, {
   y: '30vh',
   duration: 5000,
   scaleX: -1
}, 1)
tl.to(nenInici, {
   opacity: 0,
   duration: 5000
}, 1)

gsap.to(".cora1", {
   duration: 3,
   scale: 0.5,
   repeat: -1,
   yoyo: true,
});
gsap.to(".cora2", {
   duration: 3,
   scale: 0.5,
   repeat: -1,
   yoyo: true,
}, 2);
gsap.to(".cora3", {
   duration: 3,
   scale: 0.5,
   repeat: -1,
   yoyo: true,
}, 4);
gsap.to(".cora4", {
   duration: 3,
   scale: 0.5,
   repeat: -1,
   yoyo: true,
}, 1);
gsap.to(".cora5", {
   duration: 3,
   scale: 0.5,
   repeat: -1,
   yoyo: true,
}, 3);
