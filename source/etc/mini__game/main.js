$(document).ready(function(){
  $('.counter__span').text(10);
});

$('.game__grid > div').click(function(){

  var counter = $('.counter__span').text();

  if(counter == 0) {
    alert('Попытки закончелись!')
  }

  else {
    $('.counter__span').text(counter - 1);

    var coordinates = $(this).attr('data-coordinates');
    if(coordinates == 'h10') {
      alert('Верно, это телефон!');
      $('.tel').addClass('line_through');
    }
    if(coordinates == 'f6') {
      alert('Верно, это канцелярские иголки!');
      $('.knop').addClass('line_through');
    }
    console.log(coordinates);
  }

});

function hideGridLine() {
  $('.game__grid > div').css('border', 'none');
  $('.game__grid > div').css('background', 'none');
};

function showGridLine() {
  $('.game__grid > div').css('border-bottom', '1px solid rgba(255, 255, 255, 0.3)');
  $('.game__grid > div:nth-child(2n)').css('background', 'rgba(255, 255, 255, 0.3)');
};
