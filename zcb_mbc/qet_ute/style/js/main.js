// init feather
feather.replace();

// balance view (old)
$(document).ready(function(){
    if($('.balance_item:eq(0)').hasClass('active')) {
        $('.balance_item:eq(0)').addClass('balance_red');
    }
    if($('.balance_item:eq(1)').hasClass('active')) {
        $('.balance_item:eq(1), .balance_item:eq(0)').addClass('balance_yellow');
    }
    if($('.balance_item:eq(2)').hasClass('active')) {
        $('.balance_item:eq(2), .balance_item:eq(1), .balance_item:eq(0)').addClass('balance_green');
    }

    //check browser - fix style if IE
    // Get IE or Edge browser version
    var version = detectIE();

    if (version === false) {
        // console.log('edge or other browser');
    } else if (version >= 12) {
        // console.log('Edge ' + version);
    } else {
        // console.log('IE ' + version);
        $('.product_modal .modal-footer > div').attr('style', 'position: relative; right: 15px;');
        $('.product_modal .modal-footer button').attr('style', 'font-size: 13px; padding: 8px 4px;');
        $('.site_content .sort .custom_select input').attr('style', 'background-color: #fff;');
        $('.site_content .sort .custom_select svg').attr('style', 'z-index: 2;');
    }

    function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
    }

});

// custom select
$('.custom_select li').click(function(){
    $('#sortCustomSelect').val($(this).attr('data-select'))
});

// table picker
$('.history_page table tr').click(function(){
    if($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else $(this).addClass('active')
});

$('.history_page table .pick_all').click(function(){
    if($(this).hasClass('active')) {
        $(this).removeClass('active')
        $('.history_page table tbody tr').removeClass('active')
    } else {
        $(this).addClass('active')
        $('.history_page table tbody tr').addClass('active')
    }
});

// modal carousel
var carousel = $('#modal_carousel');
var productModal = $('#productModal');

carousel.owlCarousel({
    autoplay: false,
    smartSpeed: 500,
    loop: false,
    dots: false,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    lazyLoad: true
});

$('.next_step').click(function(){
    carousel.trigger('next.owl.carousel');
    $('.load_item').show();
});
$('.prev_step').click(function(){
    carousel.trigger('prev.owl.carousel');
});
productModal.on('hidden.bs.modal', function (event) {
    carousel.trigger('to.owl.carousel', 0);
});

$('.site_header_hamb').click(function(){
    alert('.site_header_top_menu');
});