function topSlider() {
    var $topSliderLength = $('.top-banner__wrapper .swiper-slide').length;
    if($topSliderLength > 1){
        var Topswiper = new Swiper('.top-banner__swiper', {
            slidesPerView: 1,
            autoHeight: true, //enable auto height
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.main-button-next',
                prevEl: '.main-button-prev',
            },
            pagination: {
                el: '.swiper-main-pagination',
                clickable: true,
            },
        });
    }
}
topSlider();
$('.dropdown-title').on('click', function (e) {
    var $this = $(this);
    var $thisNext  = $this.next();
    $this.toggleClass('open');
    if($thisNext.hasClass('open')){
        $('.dropdown-list').removeClass('open');
        $thisNext.removeClass('open')
    }else {
        $('.dropdown-list').removeClass('open');
        $thisNext.addClass('open');
    }
});
$(document).mouseup(function (e){
    var div = $('.dropdown');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.dropdown-title').removeClass('open');
        $('.dropdown-list').removeClass('open');

    }
    var account = $('.header-info__account');
    if (!account.is(e.target)
        && account.has(e.target).length === 0) {
        $('.header-info__account').removeClass('active');
        $('.dropdown-menu').removeClass('active');
    }
    var form = $('.review-form');
    if (!form.is(e.target)
        && form.has(e.target).length === 0) {
        $('.product-testimonials__inner').removeClass('open-form');
        $('.btn-review').removeClass('hidden');
        form.removeClass('active').addClass('hidden');

    }
    var sortList = $('.btn-sort');
    if (!sortList.is(e.target)
        && sortList.has(e.target).length === 0) {
        $('.btn-sort__title, .btn-sort__list').removeClass('active');



    }
});
var NewSwipes = new Swiper('.new-slider .slider-init', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.new-slider .swiper-button-next',
        prevEl: '.new-slider .swiper-button-prev',
    },
    pagination: {
        el: '.new-slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});
var Swipes = new Swiper('.action-slider .slider-init', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.action-slider .swiper-button-next',
        prevEl: '.action-slider  .swiper-button-prev',
    },
    pagination: {
        el: '.action-slider  .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});


$('.list-from li').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $thisValue = $this.data('value');
    console.log($thisValue);
    $this.parents('.form-delivery__item').attr('data-from', $thisValue);
    localStorage.setItem("deliveryFrom",  $thisValue);

});
$('.list-to li').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $thisValue = $this.data('value');
    $this.parents('.form-delivery__item').attr('data-to', $thisValue);
    localStorage.setItem("deliveryTo",  $thisValue);
});

$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active');
    $('.header-mobile').toggleClass('open');
    $('body').toggleClass('scroll');
    $('.header-overlay').toggleClass('active');
});
$('.btn-catalog').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active');
    $('.header-overlay').toggleClass('active');
    $('.menu-cat-dropdown').toggleClass('active');
});
$('.menu-cat__btn_close, .header-overlay').on('click', function (e) {
    e.preventDefault();
    $('.btn-catalog, .header-overlay, .menu-cat-dropdown, .header-btn, .header-mobile').removeClass('active');
    $('.header-mobile').removeClass('open');
    $('body').removeClass('scroll');
});
$('.menu-cat__btn_back').on('click', function (e) {
    e.preventDefault();
    $('.menu-cat__grid').removeClass('active');
});
$('.menu-cat__link i').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if($(window).width() < 992){
        $('.menu-cat__grid, .menu-cat__navigation_subhead').addClass('active');
    }
});
$('.menu-cat__sub_link ').on('click', function (e) {
    var $this = $(this);
    if($(window).width() < 992){
        $this.toggleClass('active');
        $this.next('.menu-cat__sub__sub_items').toggleClass('active');
    }
});

$('.menu-cat__link').on({
    mouseenter: function() {
        var $this = $(this);
        var $thisDataCat = $this.data('cat-id');
        $this.addClass('active');
        $('.menu-cat__sub').removeClass('active');
        $('#'+$thisDataCat).addClass('active');
    },
    mouseleave: function() {
        var $this = $(this);
        $('.menu-cat__link').removeClass('active');
        $this.removeClass('active');
    }
});

$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 130) {
        $header.addClass('scroll-nav');
        $('.page-content').addClass('scroll-header');
        $('.header-overlay').addClass('scroll-overlay');
    }
    else{
        $('.page-content').removeClass('scroll-header');
        $header.removeClass('scroll-nav');
        $('.header-overlay').removeClass('scroll-overlay');
    }
});

$('input[type="tel"]').inputmask("+38 (999) 999-9999");
$('.header-location select').select2({
    placeholder: "Select a state",
});


$('.header-info__account').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next().toggleClass('active');
    $this.toggleClass('active')
});
$('.top-filter__item-title').on('click', function () {
    var $this = $(this);
    var $thisData = $this.data('nav');
    if($this.hasClass('active')){
        $this.removeClass('active');
        $('div[data-tab = '+$thisData+']').removeClass('active');
    }else{
        $('.top-filter__item-title, .top-filter__item-list').removeClass('active');
        $this.addClass('active');
        $('div[data-tab = '+$thisData+']').addClass('active');
    }
});
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
        $('.popup-overlay').addClass('active');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});

// FancyBox

$().fancybox({
    backFocus : false,
    selector : '.gallery-thumbs .product-slider-item:not(.swiper-slide-duplicate) ',

});
// Product Slider
var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 'auto',
    navigation: false,
    loop: true,
    pagination: {
        el: '.gallery-top  .swiper-pagination',
        clickable: true,
    },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 8.57,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    loop: true,
    navigation: false,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
$('.top-filter__top-list li').on('click', function (e) {
    var $this = $(this);
    $this.parents('.top-filter__top').next().toggleClass('hidden')
});
$('.top-filter__top-add').on('click', function (e) {
    var $this = $(this);
    $this.parents('.top-filter__result').toggleClass('hidden').prev().toggleClass('hidden');
});


function tabsInner(){
    var tabItemNav = $('.tabs-nav a');
    var tabItem = $('.tabs-item' );
    tabItemNav.on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            tabItemId = $this.attr('href');
        tabItemNav.removeClass('active');
        $this.addClass('active');
        tabItem.removeClass('active');
        $(tabItemId).addClass('active');
        if($('.tabs-item:first-child').hasClass('active')){
            $('.product-small').removeClass('active');
        }else {
            $('.product-small').addClass('active');
        }
    });
}
tabsInner();
function quantityProducts() {
    let $quantityArrowMinus = $(".btn-minus");
    let $quantityArrowPlus = $(".btn-plus");
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
    function quantityMinus() {
        let $quantityNum = $(this).siblings('.basket-quantity');
        if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
        }
    }
    function quantityPlus() {
        let $quantityNum = $(this).siblings('.basket-quantity');
        $quantityNum.val(+$quantityNum.val() + 1);
    }
};
quantityProducts();
$('.product-wrapper .basket-quantity').on('change', function (e) {
    const $ths = $(this);
    $('.product-wrapper .basket-quantity').val($ths.val())
});
$('.product-wrapper .btn-counter').on('click', function (e) {
    const $ths = $(this);
    $('.product-wrapper .basket-quantity').val($ths.siblings('.basket-quantity').val())
});
$('.btn-review').on('click', function (e) {
    const $ths = $(this);
    $('.review-form').removeClass('hidden').addClass('active');
    $('.product-testimonials__inner').addClass('open-form');
    $ths.addClass('hidden');
});
$('.btn-sort__title').on('click', function (e) {
    const $ths = $(this);
    $ths.toggleClass('active').next().toggleClass('active');
});
$('.btn-sort__list a').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    $ths.parents('.btn-sort__list').removeClass('active').prev().removeClass('active').text($ths.text());
});