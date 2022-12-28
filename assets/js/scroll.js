$(window).scroll(function(){
  if ($(this).scrollTop() >= 10) {
    $('#scroll_fixed').removeClass('notfixed');
    $('#scroll_fixed').addClass("fixed");
    $('#scroll_up').removeClass("dispn");
    $('#scroll_up').addClass("dispb");
  } 
  else {
    $('#scroll_fixed').removeClass('fixed');
    $('#scroll_fixed').addClass("notfixed");
    $('#scroll_up').removeClass('dispb');
    $('#scroll_up').addClass("dispn");
  }
});
