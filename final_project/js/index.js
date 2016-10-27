$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.home').css({'background-color': '#000', 'transform': 'translate(0px,125px)'});
    else $(this).find('.home').css({'background-color': '#000', 'transform': 'none'}); 
     if (!active2) $(this).find('.portfolio').css({'background-color': '#000', 'transform': 'translate(60px,105px)'});
    else $(this).find('.portfolio').css({'background-color': '#000', 'transform': 'none'});
      if (!active3) $(this).find('.contact').css({'background-color': '#000', 'transform': 'translate(105px,60px)'});
    else $(this).find('.contact').css({'background-color': '#000', 'transform': 'none'});
      if (!active4) $(this).find('.resume').css({'background-color': '#000', 'transform': 'translate(125px,0px)'});
    else $(this).find('.resume').css({'background-color': '#000', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});