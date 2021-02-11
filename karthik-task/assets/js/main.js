$(document).ready(function () {
  $(".hover-effect, .navMenu").mouseover(function () {
    $(this).addClass("showeffect");
  });
  $(".hover-effect, .navMenu").mouseout(function () {
    $(this).removeClass("showeffect");
  });
});