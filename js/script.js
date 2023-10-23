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

$(document).ready(function () {
    function char(itm) {
        $(itm).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".pulsometer__wrapper")
                    .eq(i)
                    .toggleClass("pulsometer__wrapper_char");
            });
        });
    }

    char(".pulsometer__link_more");
    char(".pulsometer__link_back");

    $("ul.catalog__tabs").on(
        "click",
        "li:not(.catalog__tab-active)",
        function () {
            $(this)
                .addClass("catalog__tab-active")
                .siblings()
                .removeClass("catalog__tab-active")
                .closest("div.container_tabs")
                .find("ul.catalog__content")
                .removeClass("catalog__content_active")
                .eq($(this).index())
                .addClass("catalog__content_active");
        }
    );
});
