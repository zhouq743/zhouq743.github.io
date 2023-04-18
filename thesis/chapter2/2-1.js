//----------splash----------//
setTimeout(function () {
  $("#splash-watering").css("opacity", "1");
  setTimeout(function () {
    $("#splash-image-2").addClass("splash-rotate");
    setTimeout(function () {
      $("#splash-image-2").css("opacity", "0");
      $("#splash-image-3").css("opacity", "1");
      setTimeout(function () {
        $("#splash-image-3").css("opacity", "0");
        $("#splash-image-2").css("opacity", "1");
        $("#splash-image-2").removeClass("splash-rotate");
        setTimeout(function () {
          $("#splash-image-2").css("opacity", "0");
          setTimeout(function () {
            $("#splash-image-1").attr("src", "./2-1-image/2-1-1/sapling.png");
            setTimeout(function () {
              $("#splash-button").delay(500).fadeIn(500);
              $("#chapter-title").fadeIn(500);
            }, 500);
          }, 800);
        }, 500);
      }, 2000);
    }, 250);
  }, 250);
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
  $("#instruction-image").attr("src", "./2-1-image/2-1-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  $("#instruction-button").attr("src", "../images/continue-button.png");
}
$("#instruction-button").click(function () {
  step++;
  if (step > 1) {
    $("#instruction-back").css("display", "block");
  }
  $("#instruction-image").attr("src", "./2-1-image/2-1-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  if (step == 4) {
    $("#instruction-button").attr("src", "../images/start-button.png");
  }
  if (step == 5) {
    var intervalramdomizer = setInterval(function () {
      if (startgame == false) {
        currentGame = cactusrandomizer();
        $("#need-" + currentGame).fadeIn(1);
        startgame = true;
        clearTimeout(intervalramdomizer);
      }
    }, 2000);
    $("#chapter-title").css("color", "#E5DDC6");
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
  $("#instruction-image").attr("src", "./2-1-image/2-1-2/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
});

//----------howto----------//

//----------game----------//
var range = 0;
var gameStart = false,
  gameFinish = false;
var successValue;
var tongguan = [false, false, false, false],
  currentGame;

function loop(a) {
  if (a <= 100) return a;
  else if (a > 100 && a <= 200) {
    return 200 - a;
  } else {
    return loop(a - 200);
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function successChecker(a, b) {
  var probility;
  if (1 - Math.abs(a - b) / 10 < 0) probility = 0;
  else probility = 1 - Math.abs(a - b) / 10;
  if (Math.random() <= probility) return true;
  else return false;
}

//randomize game
var checkerArr = [false, false, false, false],
  wintime = 0;
difficulty = [80, 70, 50, 40, 40, 30, 30, 20, 10, 5, 5];
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
      console.log("repeat");
      return cactusrandomizer();
    }
  } else return 5;
}
//start and end
function startGame() {
  gameStart = true;
  $("#watering-can").addClass("while-game");
  $("#need-" + currentGame).fadeOut(1);
  successValue = randomIntFromInterval(1, 100);
  console.log(successValue);
  document.getElementById("success-bar").style.display = "block";
  document.getElementById("success-bar").style.bottom = successValue + "%";
  intervalFunction = setInterval(function () {
    range++;
    document.getElementById("water").style.height = loop(range) + "%";
  }, difficultyAdapter());
  window.onkeypress = function (e) {
    if (e.which == 32) {
      if (gameStart == true) {
        endGame();
      }
    }
  };
}
function endGame() {
  gameStart = false;
  range = 0;
  clearTimeout(intervalFunction);
  $("#watering-can").removeClass("while-game");
  $("#success-bar").fadeOut(1);
  var stopWidth = parseInt(document.getElementById("water").style.height);
  console.log(stopWidth);
  if (successChecker(stopWidth, successValue)) {
    //win
    wintime++;
    $("#success-" + currentGame).fadeIn(1000);
    setTimeout(function () {
      $("#success-" + currentGame).fadeOut();
    }, 2500);
    console.log("winwin");
    if (currentGame < 5) {
      checkerArr[currentGame - 1] = true;
      setTimeout(function () {
        $("#sapling-" + currentGame).fadeIn(1000);
      }, 2500);
    } else goldenCount++;
    if (arrchecker == true && goldenCount >= 5) {
      $("#sapling-5").fadeIn(1000);
      gameFinish = true;
      $("#mouse").fadeIn(1);
    }
  } else {
    //fail
    $("#fail-" + currentGame).fadeIn(1000);
    setTimeout(function () {
      $("#fail-" + currentGame).css("display", "none");
    }, 2500);
  }
  // new game
  if (gameFinish == false) {
    var intervalramdomizer = setInterval(function () {
      currentGame = cactusrandomizer();
      $("#need-" + currentGame).fadeIn(1);
      clearTimeout(intervalramdomizer);
    }, 5000);
  }
}
$(".need-water").each(function (index) {
  $(this).on("click", function () {
    startGame();
  });
});
$("#watering-can").click(function () {
  nextchapter();
});
$("#watering-can").hover(function () {
  if (gameFinish) $(this).css("cursor", "pointer");
});
function nextchapter() {
  if (gameFinish) location.replace("2-2.html");
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
