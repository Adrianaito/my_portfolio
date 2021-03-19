import 'bootstrap';


const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const arrow = document.querySelector('.arrow')
const headline = document.querySelector('.headline')
const icons = document.querySelector('.icons')
const bio = document.querySelector('.bio')

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(hero, 1, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1')
// .fromTo(icons, 1, {top: '0%'}, {top: '30%', ease: Power2.easeInOut})
.fromTo(icons, 1.5, {x: '1000%'}, {x: '0%', ease: Power2.easeInOut}, '-=1')
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
.from(bio, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})
.from(arrow, 2, {scale:0.5, autoAlpha:0, ease:Back.easeOut})

