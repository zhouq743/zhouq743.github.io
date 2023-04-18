function reset() {
  $("#snail").addClass("snail-pos1");
  $("#lug-image").fadeIn(10);
  $("#food-speech").delay(1500).fadeIn(100);
  $("#food-speech").delay(2000).fadeOut(100);
  $("#selections img").delay(4000).fadeIn(100);
}
setTimeout(reset(), 500);
var clickTime = 0;
$("#no").click(function () {
  clickTime++;
  $("#selections img").fadeOut(100);
  // $("#lug-image").delay(200).fadeOut(100);
  setTimeout(function () {
    $("#snail").addClass("snail-pos2");
    $("#snail").delay(3000).fadeOut(100);
    setTimeout(function () {
      $("#snail").removeClass("snail-pos2");
      $("#snail").removeClass("snail-pos1");
      if (clickTime < 2) {
        $("#snail").fadeIn(100);
        $("#trash-bag").removeClass("throw-trash");
        reset();
        $("#no").css("opacity", "0");
      } else seasons();
    }, 4000);
  }, 500);
});
$("#yes").click(function () {
  clickTime++;
  $("#selections img").fadeOut(100);
  $("#lug-image").delay(200).fadeOut(100);
  setTimeout(function () {
    $("#snail").addClass("snail-pos2");
    $("#snail").delay(3000).fadeOut(100);
    setTimeout(function () {
      $("#bubble-container").css("display", "flex");
      $("#bubble-container").delay(2000).fadeOut(500);
      $("#trash-can").delay(3000).fadeIn(100);
      $("#trash-bag").delay(3500).fadeIn(100);
      setTimeout(function () {
        $("#trash-bag").addClass("throw-trash");
        $("#trash-bag").delay(2500).fadeOut(100);
        setTimeout(function () {
          $("#trash-can").attr("src", "./3-2-images/trashcan-2.png");
          $("#trash-can").delay(1500).fadeOut(800);
          setTimeout(function () {
            $("#snail").removeClass("snail-pos2");
            $("#snail").removeClass("snail-pos1");
            $("#lug-image").fadeOut(100);
            if (clickTime < 2) {
              $("#snail").fadeIn(100);
              $("#trash-bag").removeClass("throw-trash");
              $("#trash-bag").addClass("springtrash");
              reset();
              $("#yes").css("opacity", "0");
            } else seasons();
          }, 4000);
        }, 3000);
      }, 4000);
    }, 4000);
  }, 500);
});

function seasons() {
  $("#snail").fadeIn(100);
  $("#trash-bag").removeClass("throw-trash");
  $("#trash-bag").addClass("springtrash");
  $(".seasons:nth-child(1)").fadeIn(500);
  $("#trash-can").fadeIn(100);
  $("#trash-bag").fadeIn(100);
  //summer
  setTimeout(function () {
    $("#snail").addClass("snail-seasons");
    $(".seasons:nth-child(1)").fadeOut(500);
    $(".seasons:nth-child(2)").fadeIn(500);
    $("#trash-bag").addClass("summertrash");
    $("#splash-image-1").attr("src", "./3-2-images/summer-cactus.png");
    $("#splash-image-1").css({ transform: "scale(.8) translate(-60%,-60%)" });
    //fall
    setTimeout(function () {
      $(".seasons:nth-child(2)").fadeOut(500);
      $(".seasons:nth-child(3)").fadeIn(500);
      // $("#trash-bag").addClass("falltrash");
      $("#splash-image-1").attr("src", "./3-2-images/fall-cactus.png");
      $("#snail-image").attr("src", "./3-2-images/unclesnail.png");
      //winter
      setTimeout(function () {
        $(".seasons:nth-child(3)").fadeOut(500);
        $(".seasons:nth-child(4)").fadeIn(500);
        // $("#trash-bag").addClass("wintertrash");
        $("#splash-image-1").attr("src", "./3-2-images/winter-cactus.png");
        $("#snail-image").attr("src", "./3-2-images/grandpasnail.png");
        //final selections
        setTimeout(function () {
          $("#howto").fadeIn(500);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}
$("#yes2").click(function () {
  location.replace("../chapter4/4-1.html");
});
$("#no2").click(function () {
  $("#instruction-container p").html("SHE WAS CUTE");
  $("#selections2").fadeOut(1);
  $("#instruction-button").fadeIn(1);
  $("#no-frame").fadeIn(1);
});
$("#instruction-button").click(function () {
  location.replace("../chapter4/4-1.html");
});
