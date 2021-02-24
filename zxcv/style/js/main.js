// init feather
feather.replace()

$('.custom_select li').click(function(){
    $('#sortCustomSelect').val($(this).attr('data-select'))
})