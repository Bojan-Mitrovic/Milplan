var header = document.querySelector('header');
var home = document.querySelector('#home');
var buro = document.querySelector('#buro');
var dienstleistungen = document.querySelector('#dienstleistungen');
var portfolio = document.querySelector('#portfolio');
var kontakt = document.querySelector('#kontakt');
var hamburger = document.querySelector('.nav-btn');
var closeBtn = document.querySelector('.close-nav');
var logo = document.querySelector('.logo');
var navList = document.querySelector('#nav-list');
var logoSrc = document.querySelector('#logo-mobile');
var navList = document.querySelector('#nav-list');


// change header on scroll 
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
        header.classList.add("nav-scrolled");
        header.style.position = 'fixed';
        header.style.margin = '0';
        home.classList.add("nav-scrolled");
        buro.classList.add("nav-scrolled");
        dienstleistungen.classList.add("nav-scrolled");
        portfolio.classList.add("nav-scrolled");
        kontakt.classList.add("nav-scrolled");
        hamburger.style.color = 'white';
        logoSrc.src = './/images/logo2.png';
        logo.style.background = 'none';
    } else {
        header.classList.remove("nav-scrolled");
        header.style.position = 'relative';
        // header.style.margin = '40px 0 203px 0';
        home.classList.remove("nav-scrolled");
        buro.classList.remove("nav-scrolled");
        dienstleistungen.classList.remove("nav-scrolled");
        portfolio.classList.remove("nav-scrolled");
        kontakt.classList.remove("nav-scrolled");
        hamburger.style.color = '#DC514C';
        logoSrc.src = './/images/RZ_Logo-milplan_RGB.png';
    }
};

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    header.classList.add('mobile-nav');
    logo.style.background = 'none';
    logo.style.position = 'absolute';
    logo.style.top = '40px';
    logo.classList.add('nav-slide');
    navList.style.display = 'flex';
    logoSrc.src = './/images/logo2.png';
    navList.classList.add('nav-slide');
    navList.style.opacity = '1'

});

closeBtn.addEventListener('click', () => {
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
    header.classList.remove('mobile-nav');
    logo.style.position = 'block';
    logo.style.top = '8px';
    logoSrc.src = './/images/logo2.png';
    navList.style.display = 'none';

})