$( function() {
    $( "#tabs" ).tabs();

    $(".ecp__dscr .text").shorten({
        "showChars" : 350,
        "moreText"	: "Подробнее",
        "lessText"	: "Скрыть",
    });
    $('.morelink').click(function () {
       $(this).parents('.text.shortened').find('span').not('.moreellipses').not('.morecontent').toggleClass('active').toggle()
    });


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

    $('#topmenu__burger .burger').click(function() {
        $(this).toggleClass('active'),
        $('.topmenu ul').toggleClass('active')
    });

    $('#tabs .tabs__title__wrap a').click(function () {
        li = $(this).parent().index();
        $('#tabs .tabs__title__wrap li').removeClass('prev');
        $('#tabs .tabs__title__wrap li:eq(' + (li-1) + ')').addClass('prev');
        $('#tabs .tabs__title__wrap li:eq(-1)').removeClass('prev');
    });


    function closeIfOutside(block) {
        $(document).click(function(e) {
            var outside = $(e.target).parents().addBack();
            if (!(outside.is(block))) {
                $(block).removeClass('active')
            }
        });
        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $(block).removeClass('active')
            }
        });
    };

    closeIfOutside('.header__catalog');

    $('.contact .map__option .option__yandex').click(function () {
        $('.contact .map__option .option__yandex,' +
            '.contact .map__wrap .map__yandex').addClass('active');
        $('.contact .map__wrap .option__google,' +
            '.contact .map__wrap .map__google').removeClass('active');
    });
    $('.contact .map__option .option__google').click(function () {
        $('.contact .map__option .option__google,' +
            '.contact .map__wrap .map__google').addClass('active');
        $('.contact .map__wrap .option__yandex,' +
            '.contact .map__wrap .map__yandex').removeClass('active');
    });

    $('#feedbackPage__accordion .toggler').click(function () {
        $(this).parent('#feedbackPage__accordion').find('.content').toggleClass('active')
    });

    $('.engsoft .item .accordion .toggler').click(function () {
        $(this).parent('.accordion').toggleClass('active')
    });

    modalImg();

    $('.ecp .ecp__map .showMapBtn').click(function () {
        $this = $(this);
        $this.parent('.ecp__map').toggleClass('active');
        if ($this.parent('.ecp__map').hasClass('active--additinal')) {
            $this.parent('.ecp__map').removeClass('active--additinal')
        } else {
            setTimeout(function() {
                $this.parent('.ecp__map').toggleClass('active--additinal');
            }, 450);
        }
    });

    $('.ecp .checkbox--picture input').change(function () {
        thisIndex = $(this).parent('.checkbox--picture').index();
        if ($(this).prop('checked')) {
            $('.ecp .checkbox--picture:eq(' + (thisIndex+6) + ')').find('input').prop('checked', true);
            $('.ecp .checkbox--picture:eq(' + thisIndex + ')').find('input').prop('checked', true)
        } else {
            $('.ecp .checkbox--picture:eq(' + (thisIndex+6) + ')').find('input').prop('checked', false);
            $('.ecp .checkbox--picture:eq(' + thisIndex + ')').find('input').prop('checked', false)
        }
    });

    var $input = $(".ecp__search input[name='keyword']"),
        $context = $(".ecp__search li.checkbox label");
    $(".ecp__search input[name='keyword']").on("input", function() {
        var term = $(this).val(),
            $context = $(this).parent('.ecp__search').find('ul li.checkbox label');
        $context.show().unmark();
        if (term) {
            $context.mark(term, {
                done: function() {
                    $context.not(":has(mark)").hide();
                }
            });
        }
    });


    var ecpCostCheckbox = $('.ecp__form2 input[type="checkbox"]'),
        ecpCostPrint = $('.ecp__form2 .ecp__form2__footer .result .number'),
        ecpCostCount = 0;
    ecpCostCheckbox.change(function () {
       ecpCostThis = $(this).siblings('label').find('.price').html().match(/\d/g).join("");
       if($(this).prop('checked')) {
           ecpCostCount += parseInt(ecpCostThis)
       } else {
           ecpCostCount -= parseInt(ecpCostThis)
       }
        $('.ecp__form2 .ecp__form2__footer .result .number').html(String(ecpCostCount))
    });

    $('.ecp__hint button').click(function () {
        $(this).parent('.ecp__hint').toggleClass('active')
    });
    $('.ecp__hint').click(function () {
        return false
    });

    closeIfOutside('.ecp__hint');

    modal('.ecp .modal', '.ecp .ecp__form2__footer button');
    modal('.nanocad .modal', '.nanocad .nanocad__download');

    $( ".tabs1" ).tabs();
    $('.tabs1 .tabs__title__wrap a').click(function () {
        li = $(this).parent().index();
        $('.tabs1 .tabs__title__wrap li').removeClass('prev');
        $('.tabs1 .tabs__title__wrap li:eq(' + (li-1) + ')').addClass('prev');
        $('.tabs1 .tabs__title__wrap li:eq(-1)').removeClass('prev');
    });

    /*tabs1 begin*/
    window.onresize = function() {
        if (window.innerWidth <= 1040) {
            $('.forshadow2').width($('.tabs__title__wrap').outerWidth() - 42);
            $('.forshadow3').css({right: 0});
        } else {
            var tabs1Widths = 0;
            $.map($('.tabs1 .tabs__title__wrap li'), function(e) {
                tabs1Widths += $(e).outerWidth();
            });
            $('.forshadow2').width(tabs1Widths - 55);

            var tabs1WrapWidth = $('.tabs1 .tabs__title__wrap').outerWidth();
            $('.forshadow3').css({right: tabs1WrapWidth - tabs1Widths - 15});
        }
    };
    if (window.innerWidth <= 1040) {
        $('.forshadow2').width($('.tabs__title__wrap').outerWidth() - 42);
        $('.forshadow3').css({right: 0});
    } else {
        var tabs1Widths = 0;
        $.map($('.tabs1 .tabs__title__wrap li'), function(e) {
            tabs1Widths += $(e).outerWidth();
        });
        $('.forshadow2').width(tabs1Widths - 55);

        var tabs1WrapWidth = $('.tabs1 .tabs__title__wrap').outerWidth();
        $('.forshadow3').css({right: tabs1WrapWidth - tabs1Widths - 15});
    }
    /*tabs1 end*/

} );

var mapWrap = document.getElementById('map__google');

//init map
function initMap() {

    //map options
    var options = {
        zoom: 8,
        center: {lat: 24.4814700, lng: 53.4710300}
    };

    //new map
    var map = new google.maps.Map(mapWrap, options);
}

function modalImg() {
    $(".license__img button").click(function () {
        var $src = $(this).parent('.license__img').find('img').attr("src");
        $(".modalImg").fadeIn();
        $(".modalImg .overlay").fadeIn();
        $(".modalImg .img-show img").attr("src", $src);
    });

    $(".modalImg span, .modalImg .overlay").click(function () {
        $(".modalImg").fadeOut();
    });
}

function modal(modal, btnOpen) {
    $(btnOpen).click(function () {
        $(modal).fadeIn();
        $(modal).addClass('active');
        $('.overlay').fadeIn()
    });

    $(modal).find('.modal__close').click(function () {
        $(modal).fadeOut();
        $(modal).removeClass('active');
        $('.overlay').fadeOut()
    });
    $('.overlay').click(function () {
        $(modal).fadeOut();
        $(modal).removeClass('active');
        $('.overlay').fadeOut()
    });
}

var element       = $("#ecp__form2");
var elementHeight = element.height();
var windowHeight  = $(window).height();

var offset = Math.min(elementHeight, windowHeight) + element.offset().top;

$("#linkTo-Ecp__form2").click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: offset - 80}, 500);
});


