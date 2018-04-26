$( function() {
    $( "#tabs" ).tabs();

    $('.header__catalog .title').click(function () {
       $('.header__catalog').toggleClass('active')
    });
} );