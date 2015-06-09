$(document).ready(function() {
  // navbar transition jQuery script
  if ($(this).scrollTop() > 0) {
    $(".navbar-brand").removeClass("hidden");
    $(".navbar").removeClass("transparent");
  }
  else {
    $(".navbar").addClass("transparent");
    $(".navbar-brand").addClass("hidden");
  };

  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar-brand").removeClass("hidden");
      $(".navbar").removeClass("transparent");
    }
    else {
      $(".navbar").addClass("transparent");
      $(".navbar-brand").addClass("hidden");
    };
  });
});
