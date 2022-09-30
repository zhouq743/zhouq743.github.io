$("#start").click(function () {
  $("#container").fadeOut(1);
  $("#part1").fadeIn(1);
  document.querySelector("#part1").play();
  window.open("https://vimeo.com/755383481", "_blank");
});
document.querySelector("#part1").addEventListener("ended", function () {
  document.querySelector("#part1").style.display = "none";
  $("#later").css("display", "flex");
});
document.querySelector("#part1").addEventListener("click", function () {
  document.querySelector("#part1").style.display = "none";
  $("#later").css("display", "flex");
});
$("#option-b").click(function () {
  $("#later").fadeOut(1);
  $("#part2").fadeIn(1);
  document.querySelector("#part2").play();
});
$("#option-a").click(function () {
  $("#later").fadeOut(1);
  document.querySelector("#part3").play();
});
$("#option-c").click(function () {
  $("#later").fadeOut(1);
  document.querySelector("#part3").play();
});
$("#option-d").click(function () {
  $("#later").fadeOut(1);
  document.querySelector("#part3").play();
});
