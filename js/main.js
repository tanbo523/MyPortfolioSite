'use strict';

{

  // menu button

const navbutton = document.querySelector('.navbutton');
const menu = document.querySelector('.menu');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('active');
  menu.classList.toggle('active');
});

const menuLink = document.querySelectorAll('.menu a');

menuLink.forEach(link => {
  link.addEventListener('click', ()=> {
    navbutton.classList.remove('active');
    menu.classList.remove('active');
  });
})


  // main visual

const mainImg = document.querySelectorAll('.main-img');
let currentIndex = 0;

function play() {
  setTimeout( () => {
    mainImg[currentIndex].classList.remove('appear');
    currentIndex++;
    if(currentIndex > mainImg.length - 1){
      currentIndex = 0;
    }
    mainImg[currentIndex].classList.add('appear');
    play();
  }, 4000);
}

play();


// work

function callback(entries) {
  console.log(entries);
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('scrolled');
      Observer.unobserve(entry.target);
    }

  // entries.forEach(entry => {
  //   if(!entry.isIntersecting){
  //     return;
  //   }
  // });
});
}

const options = {
  root: document.querySelector("#scrollArea"),
  shreshold: 0.2,
}

const targets = document.querySelectorAll('#work .container,#keireki .container, #summary .container, #denkaru .container ,.section-title');
const Observer = new IntersectionObserver(callback, options);

targets.forEach(target => {
  Observer.observe(target);
});

}