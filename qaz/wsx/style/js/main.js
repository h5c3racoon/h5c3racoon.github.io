// init feather
feather.replace()

$(document).ready(function(){
    if($('.balance_item:eq(0)').hasClass('active')) {
        $('.balance_item:eq(0)').addClass('balance_red')
    }
    if($('.balance_item:eq(1)').hasClass('active')) {
        $('.balance_item:eq(1), .balance_item:eq(0)').addClass('balance_yellow')
    }
    if($('.balance_item:eq(2)').hasClass('active')) {
        $('.balance_item:eq(2), .balance_item:eq(1), .balance_item:eq(0)').addClass('balance_green')
    }
})

$('.custom_select li').click(function(){
    $('#sortCustomSelect').val($(this).attr('data-select'))
})

