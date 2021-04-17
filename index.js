$("document").ready(function() {
  var win_width = window.innerWidth;

  if (win_width < 800){
    $("#default-container").hide();
    $("footer").css("margin-top","330px");
  }
  else {
    $("#responsive-container").hide();
  }

});