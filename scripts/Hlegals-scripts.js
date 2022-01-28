$(document).ready(function () {
  $("#btn-dropdown-mobile").click(function() {
    $("#dropdown-menu-mobile").css("display", "block");
  });

  $("#dropdown-nav-close").click(function() {
    $("#dropdown-menu-mobile").css("display", "none");
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    responsiveRefreshRate: 50,
  });
});