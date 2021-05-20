$(document).ready(function() {
    console.log('ready');
    $('.img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        // autoplaySpeed: 600,
        // adaptiveHeight: true,
        arrows: false,
        fade: true
    });
    $('.txt-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 600,
        dots: true,
        centerMode: true,
        arrows: false,
        adaptiveHeight: true,
        focusOnSelect: true
    });
});