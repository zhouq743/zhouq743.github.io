//----------splash----------//
setTimeout(function () {
  $("#splash-pills").css("opacity", "1");
  setTimeout(function () {
    $("#splash-image-2").attr("src", "./4-1-images/splash/2-2.png");
    setTimeout(function () {
      $("#splash-image-2").attr("src", "./4-1-images/splash/2.png");
      setTimeout(function () {
        $("#splash-image-2").attr("src", "./4-1-images/splash/3.png");
        $("#splash-image-1").addClass("splash-grown-up");
        $("#splash-image-1").attr("src", "../images/healthy-golden.png");
        setTimeout(function () {
          $("#splash-image-2").fadeOut(1000);
          setTimeout(function () {
            $("#splash-button").delay(500).fadeIn(500);
            $("#chapter-title").fadeIn(500);
          }, 500);
        }, 2000);
      }, 1000);
    }, 500);
  }, 500);
}, 500);
$("#splash-button").click(function () {
  $("#splash").fadeOut(1);
  $("#howto").fadeIn(1);
  $("#chapter-title").addClass("small-title");
});
//----------splash----------//
//----------howto----------//
var step = 1,
  startgame = false;
function restart() {
  step = 1;
  $("#instruction-back").css("display", "none");
  $("#instruction-image").attr("src", "./4-1-images/anime/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  $("#instruction-button").attr("src", "../images/continue-button.png");
}
$("#instruction-button").click(function () {
  step++;
  if (step > 1) {
    $("#instruction-back").css("display", "block");
  }
  $("#instruction-image").attr("src", "./4-1-images/anime/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  if (step == 5) {
    $("#instruction-button").attr("src", "../images/start-button.png");
  }
  if (step == 6) {
    // var intervalramdomizer = setInterval(function () {
    //   if (startgame == false) {
    //     $(".hole").each(function (i) {
    //       holesRB[i] = new Array(2);
    //       holesLT[i] = new Array(2);
    //       holesLT[i][0] = $(this).position().left / windowWidth;
    //       holesLT[i][1] = $(this).position().top / windowHeight;
    //       holesRB[i][0] = $(this).width() / windowWidth + holesLT[i][0];
    //       holesRB[i][1] = $(this).height() / windowHeight + holesLT[i][1];
    //       (snailW = parseInt($("#snail").css("width"), 10) / windowWidth),
    //         (snailH = parseInt($("#snail").css("height"), 10) / windowHeight);
    //     });
    //     currentGame = cactusrandomizer();

    //     itemList[randomIntFromInterval(0, 4)] = true;
    //     currentItem = itemList.indexOf(true);
    //     currentQuant = randomIntFromInterval(2, 8);
    //     $("#need-" + currentGame).css("display", "grid");
    //     $("#need-" + currentGame + " .need-item").attr(
    //       "src",
    //       "./2-2-image/2-2-3/" + (currentItem + 1) + ".png"
    //     );
    //     $("#need-" + currentGame + " .need-quant").html("x " + currentQuant);
    //     startgame = true;
    //     clearTimeout(intervalramdomizer);
    //   }
    // }, 2000);
    restart();
    $("#howto").fadeOut(1);
    $("#game").fadeIn(1);
    // $("html").css("background-color", "#3A200F");
  }
});
$("#instruction-back").click(function () {
  step--;
  if (step == 1) {
    $("#instruction-back").css("display", "none");
  }
  if (step < 4) {
    $("#instruction-button").attr("src", "../images/continue-button.png");
  }
  $("#instruction-image").attr("src", "./4-1-images/anime/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
});
//----------howto----------//

function randomColor() {
  var x = Math.floor(Math.random() * 236) + 20; // range is 20-235
  var y = Math.floor(Math.random() * 236) + 20;
  var z = Math.floor(Math.random() * 236) + 20;
  var color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}
function toArray(rgb) {
  var result0 = (rgb = rgb.replace(/[^\d,]/g, "").split(","));
  result = result0.map((str) => {
    return Number(str);
  });
  return result;
}
function checker(n) {
  if (n >= 255) {
    return true;
  } else {
    return false;
  }
}
function diff(a, b) {
  return a > b ? a - b : b - a;
}
function finalColor(a) {
  var r =
    toArray($("#pill-1").css("fill"))[a] +
    toArray($("#pill-2").css("fill"))[a] +
    toArray($("#pill-3").css("fill"))[a];
  r = r < 510 ? (r < 255 ? r : r - 255) : r - 510;
  return r;
}
$("#red-bottle").click(function () {
  if (gameFinish == false) {
    r = toArray($("#gaizi").css("background-color"))[0] + 5;
    if (checker(r) == true) {
      r = 0;
    }
    g = toArray($("#gaizi").css("background-color"))[1];
    b = toArray($("#gaizi").css("background-color"))[2];
    $("#gaizi").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    $("#pot").css(
      "border-top",
      "30vh solid " + "rgb(" + r + "," + g + "," + b + ")"
    );
    $("#r-anime").addClass("r-anime");
    setTimeout(function () {
      $("#r-anime").removeClass("r-anime");
    }, 1300);
    console.log(r);
    winChecker();
  }
});
$("#green-bottle").click(function () {
  if (gameFinish == false) {
    g = toArray($("#gaizi").css("background-color"))[1] + 5;
    if (checker(g) == true) {
      g = 0;
    }
    r = toArray($("#gaizi").css("background-color"))[0];
    b = toArray($("#gaizi").css("background-color"))[2];
    $("#gaizi").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    $("#pot").css(
      "border-top",
      "30vh solid " + "rgb(" + r + "," + g + "," + b + ")"
    );
    $("#g-anime").addClass("g-anime");
    setTimeout(function () {
      $("#g-anime").removeClass("g-anime");
    }, 1300);
    console.log(g);
    winChecker();
  }
});
$("#blue-bottle").click(function () {
  if (gameFinish == false) {
    b = toArray($("#gaizi").css("background-color"))[2] + 5;
    if (checker(b) == true) {
      b = 0;
    }
    g = toArray($("#gaizi").css("background-color"))[1];
    r = toArray($("#gaizi").css("background-color"))[0];
    $("#gaizi").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    $("#pot").css(
      "border-top",
      "30vh solid " + "rgb(" + r + "," + g + "," + b + ")"
    );
    $("#b-anime").addClass("b-anime");
    setTimeout(function () {
      $("#b-anime").removeClass("b-anime");
    }, 1300);
    console.log(b);
    winChecker();
  }
});

var currentGame = 1,
  gameFinish = false;
function winChecker() {
  answer = toArray($("#pill-" + currentGame).css("fill"));
  reference = toArray($("#gaizi").css("background-color"));
  if (
    diff(answer[0], reference[0]) <= 20 &&
    diff(answer[1], reference[1]) <= 20 &&
    diff(answer[2], reference[2]) <= 20
  ) {
    currentGame++;
    console.log(currentGame);
    $("#current" + currentGame).fadeIn(1);
    $("#banner-color-" + (currentGame - 1) + " p").fadeOut(1);
    $("#banner-color-" + (currentGame - 1) + " svg").removeClass("unactivated");
    $(".banner-sign")
      .eq(currentGame - 2)
      .css("opacity", "1");
    $("#pill-" + currentGame).fadeIn(1);
    $("#current" + (currentGame - 1)).css("opacity", "0");
    $("#done" + (currentGame - 1)).fadeIn(1);
    if (currentGame == 4) {
      gameFinish = true;
      $("#final").fadeIn(1);
      $("#final").css(
        "box-shadow",
        "0px 0px 10vh 3vh rgba(" +
          finalColor(0) +
          "," +
          finalColor(1) +
          "," +
          finalColor(2) +
          ",1)"
      );
      $("#mouse").delay(1000).fadeIn(1);
    }
  }
}

var defaultColor = randomColor();
$("#pot").css("border-top", "30vh solid " + defaultColor);
$("#gaizi").css("background-color", defaultColor);
$("#pill-1").css({ fill: randomColor() });
$("#pill-2").css({ fill: randomColor() });
$("#pill-3").css({ fill: randomColor() });
var color3 = randomColor();
$(".pill-3").each(function () {
  $(this).css({ fill: color3 });
});
$("#final").css({
  fill:
    "rgb(" + finalColor(0) + "," + finalColor(1) + "," + finalColor(2) + ")",
});
$("#help").click(function () {
  $("#howto").addClass("later-how");
  $("#howto").fadeIn();
  $("#howto").appendTo($("body"));
});
$("#final").click(function () {
  if (gameFinish) {
    $("#edu").fadeIn(500);
    $("#mouse").fadeOut(1);
  }
});
$("#edu-button").click(function () {
  nextchapter();
});
function nextchapter() {
  if (gameFinish) location.replace("4-2.html");
}

$("#chapter-title").on("click", function (e) {
  if ($(this).hasClass("small-title"))
    $("#navigation-container").fadeIn(500).css("display", "grid");
});
$("#navigation-container").click(function () {
  $(this).fadeOut(500);
});
