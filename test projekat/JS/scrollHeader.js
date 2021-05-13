var header = document.querySelector('header');
var home = document.querySelector('#home');
var buro = document.querySelector('#buro');
var dienstleistungen = document.querySelector('#dienstleistungen');
var portfolio = document.querySelector('#portfolio');
var kontakt = document.querySelector('#kontakt');

// change header on scroll 
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 700) {
        header.classList.add("nav-scrolled");
        home.classList.add("nav-scrolled");
        buro.classList.add("nav-scrolled");
        dienstleistungen.classList.add("nav-scrolled");
        portfolio.classList.add("nav-scrolled");
        kontakt.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
        home.classList.remove("nav-scrolled");
        buro.classList.remove("nav-scrolled");
        dienstleistungen.classList.remove("nav-scrolled");
        portfolio.classList.remove("nav-scrolled");
        kontakt.classList.remove("nav-scrolled");
    }
};