$(document).ready(function () {
    function initializeFullpage() {
        var myFullpage = new fullpage('#fullpage', {
            menu: '#menu',
            slidesNavigation: true,
            lazyLoad: true,
            credits: { enabled: false },
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: true,

            afterLoad: function (origin, destination, direction) {
                var $nav = $('#fp-nav ul li a span');
                var $list = $('header');
                if (destination.index === 0) {
                    $nav.removeClass('nav-black').addClass('nav-white');
                    $list.removeClass('ul-black');
                } else if (destination.index === 1) {
                    $nav.removeClass('nav-white').addClass('nav-black');
                    $list.addClass('ul-black');
                } else if (destination.index === 2) {
                    $nav.removeClass('nav-white').addClass('nav-black');
                    $list.addClass('ul-black');
                } else if (destination.index === 3) {
                    $nav.removeClass('nav-black').addClass('nav-white');
                    $list.removeClass('ul-black');
                }

                $('.fade-in', destination.item).removeClass('active');
                $('.fade-in', destination.item).addClass('active');
                $('.in-left', destination.item).removeClass('active');
                $('.in-left', destination.item).addClass('active');
            }
        });
    }

    if ($(window).width() > 1280) {
        initializeFullpage();
    }

    $(window).resize(function () {
        if ($(window).width() > 1280) {
            if ($.fn.fullpage && !$.fn.fullpage.initialized) {
                initializeFullpage();
            }
        } else {
            if ($.fn.fullpage && $.fn.fullpage.initialized) {
                fullpage_api.destroy('all');
            }
        }
    });

    $('.menu').on("mouseenter", function () {
        $("header").addClass("hover");
    })
    $('header').on("mouseleave", function () {
        $("header").removeClass("hover");
    })
    $('.icon-bar').on("click", function () {
        $(".all-menu").toggleClass("show");
        $("header").toggleClass("add-menu");
        $("body").toggleClass("overflow");
    })
  
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        var header = $('header');
        var headerHeight = header.outerHeight();
        if (scrollY >= headerHeight) {
            header.addClass('ul-top');
        } else {
            header.removeClass('ul-top');
        }
    });

});


const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChange: function () {
            $('.animate').removeClass('in-left');
            var activeSlide = this.slides[this.activeIndex];
            $(activeSlide).find('.animate').addClass('in-left');
        }
    }
});


const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    scrollbar: {
        el: ' .swiper-scrollbar',
    },
});