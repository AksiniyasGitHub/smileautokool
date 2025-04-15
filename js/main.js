$(document).ready(() => {
    new WOW().init();

    jQuery('.teachers').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})