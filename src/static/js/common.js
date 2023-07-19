function topSlider() {
    var $topSliderLength = $('.top-banner__wrapper .swiper-slide').length;
    if($topSliderLength > 1){
        var Topswiper = new Swiper('.top-banner__swiper', {
            effect: 'fade',
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

$('.header-top__phone-title, .header-mobile__phone-title').on('click', function (e) {
    var $this = $(this);
    var $thisNext  = $this.next();
    if($thisNext.hasClass('open')){
        $('.header-top__phone ul, .header-mobile__phone ul').removeClass('open');
        $thisNext.removeClass('open')
    }else {
        $('.header-top__phone ul, .header-mobile__phone ul').removeClass('open');
        $thisNext.addClass('open');
    }
});
$(document).mouseup(function (e){
    var div = $('.header-top__phone, .header-mobile__phone');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.header-top__phone ul, .header-mobile__phone ul').removeClass('open');
    }
});
$('.dropdown-title').on('click', function (e) {
    var $this = $(this);
    var $thisNext  = $this.next();
    // $thisNext.toggleClass('open');
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
        $('.dropdown-list').removeClass('open');
    }
});
function textLe() {
    var textS = $('.seo-text').text().length;
    if(textS > 870){
     $('.seo-text').addClass('seo-text-hide')
    }else{
        $('.seo-text').removeClass('seo-text-hide')
    }
}
textLe();

$('.show-all button').on('click', function (e) {
    e.preventDefault();
    $('.seo-text').toggleClass('seo-text-hide');
    $(this).find('span').toggleClass('hidden');

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

$('.header-catalog').on('click', function () {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header-bottom').toggleClass('open');
    $('.header-catalog__list').toggleClass('active');
    $('.header-overlay').toggleClass('open');
});


//
// $('.header-user__wish-btn a').on('click', function(e){
//     var href = $(this).attr("href"),
//         hrefTab = $(this).data("tab"),
//         offsetTop = href === "#" ? 0 : $(href);
//
//     console.log(hrefTab);
//     console.log(href);
//     e.preventDefault();
// });
$('.btn-nav').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $('.header-mobile').toggleClass('open');
    $('body').toggleClass('scroll-h');
    $('.header-overlay').toggleClass('open');
});

$('.header-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('open');
    $('.header-mobile').removeClass('open');
    $('body').removeClass('scroll-h');
    $('.btn-nav').removeClass('open');
    $('.header-bottom').removeClass('open');
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
// scroll top
$('.top-btn').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});


$(document).on('click', '.filter-mobile', function () {
    $(this).find('.filter-mobile__text').toggleClass('hidden');
    $(this).next().toggle();
    $('body').toggleClass('scroll-h hide-header');
    $('.filter-categories').toggleClass('open');
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
        $('.filter-mobile').toggleClass('deviceIos')
    }
});

$('.open-nav').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $('.header-mobile').toggleClass('open');
});
$('.open-nav').on('click', function (e) {
    $('.header-mobile').addClass('open');
    $('.header').addClass('open');
});
$('.header-mobile-bg, .header-mobile-close').on('click', function (e) {
    $('.header-mobile').removeClass('open');
    $('.header').removeClass('open');
});
$('.has-sub .has-title').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $this.next().toggleClass('open');
});



$('.header-search .input').on('focus', function (e) {
    $('.search-reset').addClass('active');

});
$('.search-reset').on('click', function (e) {
    $(this).removeClass('active');

});


$('input[type="tel"]').inputmask("+38 (999) 999-9999");

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
    });
}
tabsInner();



$('.delivery-checkbox').on('change', function (e) {
    var $this = $(this);
    if($this.is(':checked')){
        $('.delivery_newPost').addClass('active');
        $('.delivery_other').removeClass('active');
    }else{
        $('.delivery_newPost').removeClass('active');
        $('.delivery_other').addClass('active');
    }
});
$('.order-table__body .order-btn').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().next().slideToggle();
    $this.toggleClass('open');
});

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

let init_slider = function () {
    let inputRange = $('#sliderRange'),
        rangeFrom = $('#amount-from'),
        rangeTo = $('#amount-to');
    inputRange.slider({
        range: true,
        min: inputRange.data('min'),
        max: inputRange.data('max'),
        values: [rangeFrom.val(), rangeTo.val()],
        slide: function slide(event, ui) {
            rangeFrom.val(ui.values[0]).trigger('change');
            rangeTo.val(ui.values[1]).trigger('change');
        }
    });
    rangeFrom.change(function () {
        let value = $(this).val();
        inputRange.slider('values', 0, value);
    });
    rangeTo.change(function () {
        let value = $(this).val();
        inputRange.slider('values', 1, value);
    });
};
$(function () {
    init_slider();
});

$('.filter-item__title').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.filter-item').toggleClass('open');
    $(this).next().slideToggle();
});

// Product Slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs
    }
});
// FancyBox
$('[data-fancybox]').fancybox({
    touch: false,
    autoFocus: false,
    animationDuration: 150,
    animationEffect: 'slide-in-out'
});
$.fancybox.defaults.closeExisting=true;

$(document).ready(function() {
    $('.basic-select').select2();
});



function frontSearchFunction() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchList");
    li = ul.getElementsByTagName("li");

    li.className = "hidden";
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > 3) {
            li[i].style.display = "";
            li[i].className = "";
        } else {
            li[i].style.display = "none";
            li[i].className = "hidden";
        }
    }

}
$('.product-info__review').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(".tabs-container").offset().top - 150
    }, 1000);
    $('.tabs-nav li:nth-child(3) a').trigger('click');
});

function popupHeight(){
    var $thisPopup = $('.popup.active .popup-centered');
    var $thisWindowHeight = $(window).height();
    if($thisWindowHeight > $thisPopup.height()){}else {
        $thisPopup.addClass('overflow-auto');
    }
}


function popupOpen() {
    const $popupButton = $('.btn-popup, .header-mobile__login a');
    $popupButton.on('click', function (e) {
        const $this = $(this);
        const popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        if ($this.parents('.header-user__item').length) {}else{
            $('.popup-overlay').addClass('active');
            $('body').addClass('scroll-h');
        }
        popupHeight();
    });
}
popupOpen();

$('.header-catalog__list li').hover( function (e) {
    const $this = $(this);
    const catalogData = $this.data('catalog');
    $('.container-item').removeClass('active');
    $('div [data-catalog = '+ catalogData +']').addClass('active');
});

$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll-h');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll-h');
});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
});

$(document).mouseup(function (e){
    var $headerpopup = $('.header-user__popup ');
    if($headerpopup.hasClass('active')){
        if (!$headerpopup.is(e.target)
            && $headerpopup.has(e.target).length === 0) {
            $headerpopup.removeClass('active');
        }
    }else{}
});
$(document).mouseup(function (e){
    var $headerCatalog = $('.header-catalog ');
    if($headerCatalog.hasClass('active')){
        if (!$headerCatalog.is(e.target)
            && $headerCatalog.has(e.target).length === 0) {
            $headerCatalog.removeClass('active');
            $('.header-catalog__list').removeClass('active');
            $('.header-overlay').removeClass('open');
            $('.header-bottom').removeClass('open');

        }
    }else{
    }
});


//
// $(document).mouseup(function (e){
//     var subNav = $('.header .sub-nav, .header .sub-list');
//     if (!subNav.is(e.target)
//         && subNav.has(e.target).length === 0) {
//         subNav.removeClass('active');
//         $('.header .sub-nav__btn').removeClass('active');
//     }
// });

$('.has-sub .sub-nav__btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if($this.hasClass('active')){
        $this.prev().removeClass('active');
        $this.removeClass('active').next().removeClass('active').parent().removeClass('active');
    }else{
        $this.prev().addClass('active');
        $this.addClass('active').next().addClass('active').parent().addClass('active');
    }
});
$('.filter-item .sub-nav__btn').on('click', function (e) {
    var $this = $(this);
    if($this.hasClass('active')){
        $this.prev().removeClass('active');
        $this.removeClass('active').next().removeClass('active').parent().removeClass('active');
    }else{
        $this.prev().addClass('active');
        $this.addClass('active').next().addClass('active').parent().addClass('active');
    }
});

$('.go-back__btn').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active').parent().parent().removeClass('active');
});

$('.datepicker-here').data('datepicker');

var delay = 0;
var offset = 200;
document.addEventListener('invalid', function (e) {
    $(e.target).addClass("invalid");
    $('html, body').animate({
        scrollTop: $($(".invalid")[0]).offset().top - offset
    }, delay);
}, true);
document.addEventListener('change', function (e) {
    $(e.target).removeClass("invalid");}, true);

 // var pathnameE = window.location.pathname; // Returns path only (/path/example.html)
 // var urlE      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
 // var originE   = window.location.origin;   // Returns base URL (https://example.com)

$(document).ready(function(){
    var scrollTopNav = $('.account-tabs');
    $('.header-modal .btn').on('click', function (e) {
        var $this = $(this.hash);
        var $thisID = $this.attr('id');
        var $thisParent = $(this).parent().parent().parent();
        $thisParent.removeClass('active');
        $('.tabs-nav a, .tabs-item').removeClass('active');
        $('.tabs-nav a[data-tabs = '+$thisID+']').addClass('active');
        $this.addClass('active');
        // console.log($thisID);
        $('html, body').animate({
            scrollTop: scrollTopNav.offset().top - 400
        }, 300);
    });

    if(window.location.hash != "") {
        $('html, body').scrollTop();
        $('a[href="' + window.location.hash + '"]').click();
        $('html, body').animate({
            scrollTop: scrollTopNav.offset().top - 400
        }, 300);
    }
});
$(document).ready(function () {
    var obj = $('.cookies-popup');
    setTimeout(function () {
        obj.addClass('first');
    }, 5000)
});

$(function() {
    var data = localStorage.getItem("cookies");
    if (data !== null) {
        $('.cookies-popup').addClass('hidden');
        $("input[name='cookies']").attr("checked", "checked");
    }
});
$("input[name='cookies']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("cookies", $(this).val());
        $('.cookies-popup').addClass('hidden');
    } else {
        localStorage.removeItem("cookies");
        $('.cookies-popup').removeClass('hidden');
    }
});
$('#stbutton').on('click', function () {
   alert('click');
});
jQuery(document).ready(function($){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
        $('.cookies-popup').addClass('agentID');
        $('.input, .input-textarea, .header-mobile').addClass('ios-pitushnia');
        // $('.filter-wrap').addClass('deviceAgent-ios');
    }else{
    }
});
