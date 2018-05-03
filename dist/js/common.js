$( function() {
    $( "#tabs" ).tabs();

    $('.single-item-desk--js').slick({
        infinite: false,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        dots: true,
    });

    $('.single-item-mob--js').slick({
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

    $('#tabs .tabs__title__wrap a').click(function () {
        li = $(this).parent().index();
        $('#tabs .tabs__title__wrap li').removeClass('prev');
        $('#tabs .tabs__title__wrap li:eq(' + (li-1) + ')').addClass('prev');
        $('#tabs .tabs__title__wrap li:eq(4)').removeClass('prev');
        console.log()
    });
} );