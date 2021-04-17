$("document").ready(function() {
  var win_width = window.innerWidth;

  $("#default-container").hide();
  $("#responsive-container").hide();

  if (win_width > 800){
    $("#default-container").show();
  }
  else {
    $("#responsive-container").show();
    $("footer").css("margin-top","330px");
  }

  window.onresize = function() {
    let win_width = window.innerWidth;
    
    if (win_width > 800){
      $("#default-container").show();
      $("#responsive-container").hide();
      $("footer").css("margin-top","15px");
    }
    else {
      $("#responsive-container").show();
      $("#default-container").hide();
      $("footer").css("margin-top","330px");
    }
  }

});