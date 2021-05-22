$(document).ready(function() {
    console.log('ready');
    $('.img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true
    });
    $('.txt-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });
});