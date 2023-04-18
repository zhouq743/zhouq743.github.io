function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var count = 0;
$("#white-bg").fadeOut(500);
$("#white-bg").delay(1000).fadeIn(500);
$("#white-bg").delay(50).fadeOut(500);
setTimeout(function () {
  $("#holes-container").addClass("camera-bg");
  setTimeout(function () {
    $("#camera-container").css("display", "flex");
    $("#holes-container").appendTo($("#camera-body"));
    $("#holes-container").removeClass("camera-bg");
    $("#holes-container").addClass("inside-camera");
    $("#camera-container").delay(1500).fadeOut(1000);
    setTimeout(function () {
      $("#holes-container").removeClass("inside-camera");
      $("#ig-container").css("display", "flex");
      $("#holes-container").appendTo($("#ig-container"));
      $("#holes-container").removeClass("camera-bg");
      $("#holes-container").addClass("inside-ig");
      setTimeout(function () {
        $(".hearts img").each(function (i, obj) {
          $(this)
            .delay(i * 100)
            .fadeIn(10);
          count++;
        });
        setTimeout(function cameraHeart() {
          console.log(count);
          $("#sudden").fadeIn(1);
          $("#sudden").addClass("sudden");
          setTimeout(function () {
            $("#next").fadeIn(500);
            $("#mouse").fadeIn(500);
          }, 1500);
        }, count * 110 + 500);
      }, 2000);
    }, 2500);
  }, 1000);
}, 2550);

$(".likes-container").each(function (i, obj) {
  var heartContainer = document.createElement("div");
  obj.append(heartContainer);
  heartContainer.classList.add("hearts");
});
$(".hearts").each(function (i, obj) {
  if (i >= 1) {
    var likeN = randomIntFromInterval(5, 10);
    for (j = 0; j < likeN; j++) {
      var heart = document.createElement("img");
      heart.src = "./2-3-images/heart-" + randomIntFromInterval(1, 4) + ".png";
      obj.append(heart);
    }
  }
});
$("#next").click(function () {
  location.replace("../chapter3/3-1.html");
});
