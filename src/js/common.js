$( function() {
    $( "#tabs" ).tabs();

    $('.single-item').slick({
        infinite: false,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        dots: true,

    });

    $('.header__catalog .title').click(function () {
       $('.header__catalog').toggleClass('active')
    });

    $('.topmenu .burger').click(function() {
        $(this).toggleClass('active'),
        $('.topmenu ul').toggleClass('active')
    });
} );