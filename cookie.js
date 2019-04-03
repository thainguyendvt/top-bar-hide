$(document).ready(function() {

  $(".dismisbar").click(function(){
    var date = new Date();
    date.setTime(date.getTime() + (3600 * 1000));
    $(".announcement-bar").slideUp('200');
    $.cookie('hidebar', 'true', { expires: date });
  }); 
  var hidebar = $.cookie('hidebar');
  if (hidebar) {
    $(".announcement-bar").hide();
  } else {
    $(".announcement-bar").show();
  }

});
