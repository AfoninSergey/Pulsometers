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

    $("[data-modal=consultation]").on('click', function() {
        $(".modal__consultation").addClass('modal__consultation_visible')
        $(".modal").fadeIn(500)
    })

    // $(".button_pulsometer").on('click', function() {
    //     $(".modal__buy").addClass('modal__buy_visible')
    //     $(".modal").fadeIn(500)
    // })

    $(".button_pulsometer").each(function(i) {
        $(this).on('click', function() {
            $(".modal__buy .modal__descr").text($('.pulsometer__title').eq(i).text())
            $(".modal__buy").addClass('modal__buy_visible')
            $(".modal").fadeIn(500)
        })
    })

    $(".modal__close").on('click', function() {
        $(".modal").fadeOut(300)
        $(".modal__consultation").removeClass('modal__consultation_visible')
        $(".modal__buy").removeClass('modal__buy_visible')
    })
    
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя!",
                    minlength: jQuery.validator.format("Введите не менее {0} букв!")
                },
                phone: {
                    required: "Введите Ваш номер телефона!"                    
                },
                email: {
                    required: "Введите Ваш email!",
                    email: "Неверный формат email адреса!"
                }
            }
            
        }) 
    }
    validateForms(".form_consultation")
    validateForms(".form_consult")
    validateForms(".form_buy")
    
    // $("input[name=phone]").mask("+7(999) 999-99-99");

    $('input[name=phone]').mask("+7 (999) 999-9999").on('click', function () {
        if ($(this).val() === '+7 (___) ___-____') {
            $(this).get(0).setSelectionRange(4, 4);
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val("");

            $(".modal__consultation").removeClass('modal__consultation_visible');
            $(".modal__buy").removeClass('modal__buy_visible');

            $(".modal__thanks").addClass('modal__thanks_visible');
            
            setTimeout(() => {
                $(".modal__thanks").removeClass('modal__thanks_visible');
                $(".modal").fadeOut(300);
            }, 3000)

            $('form').trigger("reset");
        });
        return false;
    });

    // Pageup

    $(window).scroll( function() {
        if ($(this).scrollTop() > 600) {
            $(".pageup").fadeIn()           
        } else {
            $(".pageup").fadeOut()
        }        
    });

    // Smooth scroll
    // $("a").on('click', function(event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         const hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function() {
    //             window.location.hash = hash;
    //         });
    //     }
    // });

});
