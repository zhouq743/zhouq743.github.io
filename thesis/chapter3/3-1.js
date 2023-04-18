$("#bubble1").delay(1000).fadeIn(200);
$("#bubble2").delay(1200).fadeIn(200);
setTimeout(function () {
  $("#images-container").css("opacity", "1");
  setTimeout(function () {
    $("#disappear2").attr("src", "./3-1-images/frame-1.png");
    setTimeout(function () {
      $("#images-container").addClass("sad-filter");
      setTimeout(function () {
        $("#splash-image-1").attr("src", "../images/golden-cry.png");
        setTimeout(function () {
          $("#splash-image-1").attr("src", "./3-1-images/golden-big-cry.png");
          setTimeout(function () {
            $("#button").fadeIn(100);
            $("#mouse").fadeIn(100);
          }, 1000);
        }, 500);
      }, 500);
    }, 1000);
  }, 1500);
}, 1400);
$("#button").click(function () {
  $(this).fadeOut(1);
  $("#mouse").fadeOut(1);
  $("#images-container").removeClass("sad-filter");
  $("#images-container").addClass("stage-2");
  $("#disappear").addClass("stage-1");
  $("#disappear2").addClass("stage-1");
  $(".stage-2 img").css("display", "block");
  setTimeout(function () {
    $("#previous .hearts").addClass("fadein");
    setTimeout(function () {
      $("#arrow").addClass("fadein");
      setTimeout(function () {
        $("#later .cactus").addClass("fadein");
        setTimeout(function () {
          $("#later div").fadeIn(500).css("display", "grid");
          // $("#mouse2").addClass("fadein");
        }, 500);
      }, 300);
    }, 1000);
  }, 500);
});
$("#later .hearts").click(function () {
  $("#previous img").fadeOut(1);
  $("#arrow").fadeOut(1);
  $("#later img").fadeOut(1);
  $("#food-container").css("display", "flex");
  setTimeout(function () {
    $("#food-container img").each(function (i, obj) {
      setTimeout(function () {
        obj.src = "./3-1-images/no" + (i + 1) + ".png";
        obj.classList.add("larger");
      }, i * 200);
    });
    $("#hungry").delay(2000).fadeIn(100);
    $("#mouse3").delay(3000).fadeIn(100);
  }, 1000);
});
$("#hungry").click(function () {
  location.replace("./3-2.html");
});
