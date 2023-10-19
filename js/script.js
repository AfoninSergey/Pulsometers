/* SLICK-SLIDER
$(document).ready(function () {
    $(".carousel__slick-slider").slick({
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 900,
        pauseOnHover: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});
*/

const slider = tns({
    container: ".carousel__tiny-slider",
    center: true,
    autoplay: true,
    speed: 1200,
    autoplayButtonOutput: false,
    controls: true,
    nav: false,
    navPosition: "bottom",
    controlsText: ["", ""],
    responsive: {
        576: {
            controls: true,
            nav: false,
        },
        1: {
            controls: false,
            nav: true,
        },
    },
});
