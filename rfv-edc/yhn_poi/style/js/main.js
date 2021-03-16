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
var productMmodal = $('#productModal');

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
productMmodal.on('hidden.bs.modal', function (event) {
    carousel.trigger('to.owl.carousel', 0);
});