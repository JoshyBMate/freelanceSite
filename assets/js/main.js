$(".call-to-action-btn").click(function() {
  var posToScroll = $("#contact").position();
  $("html,body").animate({
    scrollTop: posToScroll.top
  }, 1000);
});

$(".skills-icon-1").click(function() {
  if ($(".grid-main-li-1").hasClass("skills-hide")) {
    $(".grid-main-li-1").removeClass("skills-hide");
    $(".grid-main-li-1").addClass("skills-show");
  } else if ($(".grid-main-li-1").hasClass("skills-show")) {
    $(".grid-main-li-1").removeClass("skills-show");
    $(".grid-main-li-1").addClass("skills-hide");
  }
});
$(".skills-icon-2").click(function() {
  if ($(".grid-main-li-2").hasClass("skills-hide")) {
    $(".grid-main-li-2").removeClass("skills-hide");
    $(".grid-main-li-2").addClass("skills-show");
  } else if ($(".grid-main-li-2").hasClass("skills-show")) {
    $(".grid-main-li-2").removeClass("skills-show");
    $(".grid-main-li-2").addClass("skills-hide");
  }
});
