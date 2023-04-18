//----------splash----------//
setTimeout(function () {
  $("#splash-fert").css("opacity", "1");
  setTimeout(function () {
    $("#splash-image-2").addClass("splash-rotate");
    setTimeout(function () {
      $("#splash-image-3").css("opacity", "1");
      setTimeout(function () {
        $("#splash-image-3").css("opacity", "0");
        $("#splash-image-2").removeClass("splash-rotate");
        setTimeout(function () {
          $("#splash-image-2").css("opacity", "0");
          setTimeout(function () {
            $("#splash-image-1").attr("src", "./2-2-image/2-2-1/grown-up.png");
            $("#splash-image-1").addClass("splash-grown-up");
            setTimeout(function () {
              $("#splash-button").delay(500).fadeIn(500);
              $("#chapter-title").fadeIn(500);
            }, 500);
          }, 800);
        }, 500);
      }, 2000);
    }, 250);
  }, 500);
}, 1000);
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
  $("#instruction-image").attr("src", "./2-1-image/2-1-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  $("#instruction-button").attr("src", "../images/continue-button.png");
}
$("#instruction-button").click(function () {
  step++;
  if (step > 1) {
    $("#instruction-back").css("display", "block");
  }
  $("#instruction-image").attr("src", "./2-2-image/2-2-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  if (step == 5) {
    $("#instruction-button").attr("src", "../images/start-button.png");
  }
  if (step == 6) {
    var intervalramdomizer = setInterval(function () {
      if (startgame == false) {
        $(".hole").each(function (i) {
          holesRB[i] = new Array(2);
          holesLT[i] = new Array(2);
          holesLT[i][0] = $(this).position().left / windowWidth;
          holesLT[i][1] = $(this).position().top / windowHeight;
          holesRB[i][0] = $(this).width() / windowWidth + holesLT[i][0];
          holesRB[i][1] = $(this).height() / windowHeight + holesLT[i][1];
          (snailW = parseInt($("#snail").css("width"), 10) / windowWidth),
            (snailH = parseInt($("#snail").css("height"), 10) / windowHeight);
        });
        currentGame = cactusrandomizer();
        itemList[randomIntFromInterval(0, 4)] = true;
        currentItem = itemList.indexOf(true);
        currentQuant = randomIntFromInterval(2, 8);
        $("#need-" + currentGame).css("display", "grid");
        $("#need-" + currentGame + " .need-item").attr(
          "src",
          "./2-2-image/2-2-3/" + (currentItem + 1) + ".png"
        );
        $("#need-" + currentGame + " .need-quant").html("x " + currentQuant);
        startgame = true;
        clearTimeout(intervalramdomizer);
      }
    }, 2000);
    restart();
    $("#howto").fadeOut(1);
    $("#game").fadeIn(1);
    $("html").css("background-color", "#3A200F");
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
  $("#instruction-image").attr("src", "./2-2-image/2-2-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
});
//----------howto----------//
//----------game----------//

var gameStart = false,
  gameFinish = false;
var currentGame, currentItem, currentQuant;
var itemList = [false, false, false, false, false];
var speedPotion,
  sizePotion = false;
function potionLottery(n) {
  return !!n && Math.random() <= n;
}
//move
var pane = $("#holes-container"),
  box = $("#snail"),
  w = pane.width() - box.width(),
  h = pane.height() - box.height(),
  d = {},
  x = 1;
console.log(w + " " + h);
function newv(v, a, b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > w ? w : n;
}
function newv2(v, a, b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > h ? h : n;
}
$(window).keydown(function (e) {
  if (potionLottery(0.0005) && !speedPotion) {
    console.log("speed");
    x = 3;
    $("#potion").fadeIn(500);
    startgame = false;
    speedPotion = true;
  }
  if (potionLottery(0.001) && !sizePotion) {
    console.log("size");
    $("#snail").css("transform", "scale(2) ");
    w = pane.width() - box.width() * 2;
    h = pane.height() - box.height() * 2;
    $("#potion").fadeIn(500);
    $("#potion-h").html("Size Potion");
    $("#potion-p").html("Mr snail grows bigger");
    $("#potion-image").attr("src", "./2-2-image/2-2-3/potion2.png");
    startgame = false;
    sizePotion = true;
  }
  d[e.which] = true;
});
$(window).keyup(function (e) {
  d[e.which] = false;
});
setInterval(function () {
  if (startgame == true && gameFinish == false) {
    box.css({
      left: function (i, v) {
        return newv(v, 37, 39);
      },
      top: function (i, v) {
        return newv2(v, 38, 40);
      },
    });
  }
}, 20);
var windowWidth = $("html").width(),
  windowHeight = $("#holes-container").height(),
  holesRB = [5],
  holesLT = [5];
var ready = [false, false, false, false, false, false],
  readySap = [false, false, false, false, false];
full = false;
var bag = [false, false, false, false, false];
var snailX, snailY, snailW, snailH;

// $(document).ready(function () {
//   box.css("left", "50%", "top", "80%", "transform", "translate(-50%,0)");
// });

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  // snail change directions
  if (e.keyCode == "37") {
    if (sizePotion) {
      $("#snail").css("transform", "scaleX(-2) scaleY(2)");
    } else $("#snail").addClass("right-snail");
  } else if (e.keyCode == "39") {
    if (sizePotion) {
      $("#snail").css("transform", "scale(2)");
    } else $("#snail").removeClass("right-snail");
  }

  // shaking
  if (e.keyCode >= 37 && e.keyCode <= 40) {
    //tool-bar shake
    var snailX = parseInt($("#snail").css("left"), 10) / windowWidth,
      snailY = parseInt($("#snail").css("top"), 10) / windowHeight,
      snailW = parseInt($("#snail").css("width"), 10) / windowWidth,
      snailH = parseInt($("#snail").css("height"), 10) / windowHeight;
    if (sizePotion) {
      snailW = parseInt($("#snail").css("width"), 10) / windowWidth / 2;
      snailH = parseInt($("#snail").css("height"), 10) / windowHeight / 2;
    }
    if (snailY <= 0.03) {
      if (snailX >= 0 && snailX <= 0.16 - snailW) {
        $("#shop-container img:nth-child(1)").addClass("shaking");
        ready[0] = true;
      } else {
        $("#shop-container img:nth-child(1)").removeClass("shaking");
        ready[0] = false;
      }
      if (snailX >= 0.16 && snailX <= 0.32 - snailW) {
        $("#shop-container img:nth-child(2)").addClass("shaking");
        ready[1] = true;
      } else {
        $("#shop-container img:nth-child(2)").removeClass("shaking");
        ready[1] = false;
      }
      if (snailX >= 0.32 && snailX <= 0.48 - snailW) {
        $("#shop-container img:nth-child(3)").addClass("shaking");
        ready[2] = true;
      } else {
        $("#shop-container img:nth-child(3)").removeClass("shaking");
        ready[2] = false;
      }
      if (snailX >= 0.48 && snailX <= 0.64 - snailW) {
        $("#shop-container img:nth-child(4)").addClass("shaking");
        ready[3] = true;
      } else {
        $("#shop-container img:nth-child(4)").removeClass("shaking");
        ready[3] = false;
      }
      if (snailX >= 0.64 && snailX <= 0.8 - snailW) {
        $("#shop-container img:nth-child(5)").addClass("shaking");
        ready[4] = true;
      } else {
        $("#shop-container img:nth-child(5)").removeClass("shaking");
        ready[4] = false;
      }
      if (snailX >= 0.8 && snailX <= 1 - snailW && full) {
        $("#trash img").addClass("shaking");
        ready[5] = true;
      } else {
        $("#trash img").removeClass("shaking");
        ready[5] = false;
      }
    } else {
      $("#shop-container img").each(function () {
        $(this).removeClass("shaking");
      });
      $("#trash img").removeClass("shaking");
      for (i = 0; i < ready.length; i++) {
        ready[i] = false;
      }
    }
    //sapling shake
    var which;
    for (i = 0; i < holesLT.length; i++) {
      if (
        snailX >= holesLT[i][0] - 0.5 * snailW &&
        snailX <= holesRB[i][0] &&
        snailY >= holesLT[i][1] - 0.5 * snailH &&
        snailY <= holesRB[i][1]
      )
        which = i;
      else readySap.fill(false);
    }
    $(".sapling").each(function (i) {
      $(this).removeClass("skew");
      if (i == which) {
        $("#sapling-" + (i + 1)).addClass("skew");
        readySap[i] = true;
      }
    });
  }

  //get and drop items
  if (e.keyCode == 32) {
    //get and dispose items
    for (i = 0; i < 5; i++) {
      if (full == false && ready[i]) {
        var test = ready.indexOf(true);
        full = true;
        bag[test] = true;
        $("#lug-image").fadeIn(1);
      }
    }
    if (full && ready[5]) {
      for (i = 0; i < 4; i++) {
        bag[i] = false;
      }
      full = false;
      $("#lug-image").fadeOut(1);
      $("#trash img").removeClass("shaking");
    }
    // give items to cactus
    if (readySap[currentGame - 1] && bag.indexOf(true) == currentItem) {
      currentQuant--;
      $("#need-" + currentGame + " .need-quant").html("x " + currentQuant);
      $("#lug-image").fadeOut(1);
      full = false;
      bag.fill(false);
      if (currentQuant == 0) {
        if (currentGame <= 4) {
          checkerArr[currentGame - 1] = true;
          $("#sapling-" + currentGame).css("display", "none");
          $("#cactus-" + currentGame).fadeIn(1000);
          $("#name-" + currentGame).fadeIn(1000);
        } else {
          goldenCount++;
        }
        $("#success-" + currentGame).fadeIn(1000);
        $("#need-" + currentGame).fadeOut(1);
        startgame = false;
        setTimeout(function () {
          $("#success-" + currentGame).css("display", "none");
        }, 2000);
        //new game
        if (gameFinish == false) {
          var intervalramdomizer = setInterval(function () {
            if (startgame == false) {
              itemList.fill(false);
              currentGame = cactusrandomizer();
              itemList[randomIntFromInterval(0, 4)] = true;
              currentItem = itemList.indexOf(true);
              currentQuant = randomIntFromInterval(2, 8);
              $("#need-" + currentGame).css("display", "grid");
              $("#need-" + currentGame + " .need-item").attr(
                "src",
                "./2-2-image/2-2-3/" + (currentItem + 1) + ".png"
              );
              $("#need-" + currentGame + " .need-quant").html(
                "x " + currentQuant
              );
              startgame = true;
              clearTimeout(intervalramdomizer);
            }
          }, 2500);
        }

        if (arrchecker == true && goldenCount >= 5) {
          $("#sapling-5").css("display", "none");
          $("#cactus-5").fadeIn(1000);
          $("#name-5").fadeIn(1000);
          gameFinish = true;
          $("#mouse").fadeIn(1);
        }
      }
      // fail
    } else if (readySap[currentGame - 1] && bag.indexOf(true) != currentItem) {
      $("#fail-" + currentGame).fadeIn(1000);
      $("#need-" + currentGame).fadeOut(1);
      setTimeout(function () {
        $("#fail-" + currentGame).css("display", "none");
        $("#need-" + currentGame).fadeIn(1);
      }, 2500);
    }
  }
}

//move
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var checkerArr = [false, false, false, false],
  wintime = 0;
var goldenCount = 0,
  intervalFunction,
  arrchecker = false;
function difficultyAdapter() {
  if (wintime <= 10) return difficulty[wintime];
  else return 5;
}
function cactusrandomizer() {
  var lessThan1Random = Math.random();
  if (checkerArr.every((element) => element === true)) arrchecker = true;
  if (lessThan1Random > 0.5 && arrchecker == false) {
    var randomizerdIndex = randomIntFromInterval(1, 4);
    console.log(randomizerdIndex);
    if (checkerArr[randomizerdIndex - 1] == false) {
      return randomizerdIndex;
    } else {
      return cactusrandomizer();
    }
  } else return 5;
}
$("#snail").click(function () {
  // $(".sapling").fadeOut(1);
  // $(".needs").fadeOut(1);
  // $("#cactus-1").fadeIn(1000);
  // $("#cactus-2").fadeIn(1000);
  // $("#cactus-3").fadeIn(1000);
  // $("#cactus-4").fadeIn(1000);
  // $("#cactus-5").fadeIn(1000);
  nextchapter();
});
$("#snail").hover(function () {
  if (gameFinish) $(this).css("cursor", "pointer");
});
function nextchapter() {
  if (gameFinish) location.replace("2-3.html");
}
$("#mouse").mouseover(function () {
  $(this).removeClass("mouse-hover");
});
$("#mouse").mouseout(function () {
  $(this).addClass("mouse-hover");
});
$("#help").click(function () {
  $("#howto").addClass("later-how");
  $("#howto").fadeIn();
  $("#howto").appendTo($("body"));
});

$("#chapter-title").on("click", function (e) {
  if ($(this).hasClass("small-title"))
    $("#navigation-container").fadeIn(500).css("display", "grid");
});
$("#navigation-container").click(function () {
  $(this).fadeOut(500);
});

$("#potion-button").click(function () {
  $("#potion").fadeOut(500);
  startgame = true;
});
