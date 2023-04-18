//----------splash----------//
setTimeout(function () {
  $("#splash-bugs").css("opacity", "1");
  setTimeout(function () {
    $(".splash-image-3").eq(0).fadeIn(1);
    $(".splash-image-3").eq(1).delay(150).fadeIn(1);
    $(".splash-image-3").eq(2).delay(300).fadeIn(1);
    $(".splash-image-3").delay(1300).fadeOut(500);
    setTimeout(function () {
      $(".splash-image-2").attr("src", "./4-2-images/splash/dead.png");
      $(".splash-image-2").delay(800).fadeOut(500);
      $("#splash-image-4").delay(800).fadeIn(300);
      setTimeout(function () {
        $("#splash-image-1").addClass("splash-grown-up");
        $("#splash-image-1").attr("src", "../images/healthy-golden.png");
        $("#splash-image-4").delay(1000).fadeOut(300);
        $("#splash-button").delay(1000).fadeIn(500);
        $("#chapter-title").delay(1000).fadeIn(500);
      }, 1000);
    }, 1300);
  }, 1000);
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
  $("#instruction-image").attr("src", "./4-2-images/howto/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  $("#instruction-button").attr("src", "../images/continue-button.png");
}
$("#instruction-button").click(function () {
  step++;
  if (step > 1) {
    $("#instruction-back").css("display", "block");
  }
  $("#instruction-image").attr("src", "./4-2-images/howto/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
  if (step == 4) {
    $("#instruction-button").attr("src", "../images/start-button.png");
  }
  if (step == 5) {
    $("#game-background-pattern").fadeIn(1000);
    $(".bugs").delay(3998).fadeIn(1);
    setTimeout(function () {
      for (var i = 0; i < x.length; i++) {
        console.log("x");
        x[i].start();
      }
    }, 4000);

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
  $("#instruction-image").attr("src", "./4-2-images/howto/" + step + ".png");
  $("#instruction-step").attr("src", "../images/stepper" + step + ".png");
});
//----------howto----------//
//------------game------------//
$("#game-background-pattern").fadeIn(1000);

for (var i = 0; i < 20; i++) {
  var test = document.createElement("img");
  test.src = "../chapter4/4-2-images/bug.png";
  test.classList.add("bugs");
  test.style.width = randomIntFromInterval(1, 4) + "vw";
  $("#bugs-container").append(test);
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
RandomObjectMover.prototype._getContainerDimensions = function () {
  if (this.$container === window) {
    console.log(this.$container.innerWidth);
    return {
      height: this.$container.innerHeight,
      width: this.$container.innerWidth,
    };
  } else {
    // console.log(this.$container.clientHeight);
    return {
      height: this.$container.clientHeight,
      width: this.$container.clientWidth,
    };
  }
};
function RandomObjectMover(obj, container) {
  this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = randomIntFromInterval(0, 5000);
  var containerSize = this._getContainerDimensions();
  var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;
  this.current_position = { x: availableWidth / 2, y: availableHeight };
  this.is_running = false;
  this.dead = false;
}
// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function (pxPerSec) {
  this.pixels_per_second = pxPerSec;
};

RandomObjectMover.prototype._generateNewPosition = function () {
  // Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
  var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;

  // Pick a random place in the space
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);
  return { x: x, y: y };
};
RandomObjectMover.prototype._initialRandomizer = function () {
  // Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
  var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;
  for (var i = 0; i < test.length; i++) {
    console.log("work");
    test[i].style.left = Math.random() * availableWidth;
    test[i].style.top = Math.random() * availableHeight;
  }
};
// window.onload(initialRandomizer());
RandomObjectMover.prototype._calcDelta = function (a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  var dist = Math.sqrt(dx * dx + dy * dy);
  return dist;
};

RandomObjectMover.prototype._moveOnce = function () {
  // Pick a new spot on the page
  var next = this._generateNewPosition();

  // How far do we have to move?
  var delta = this._calcDelta(this.current_position, next);

  // Speed of this transition, rounded to 2DP
  var speed =
    Math.round((delta / Math.floor(Math.random() * 1000)) * 100) / 100;

  //console.log(this.current_position, next, delta, speed);

  this.$object.style.transition = "transform " + speed + "s linear";
  this.$object.style.transform =
    "translate3d(" + next.x + "px, " + next.y + "px, 0)";

  // Save this new position ready for the next call.
  this.current_position = next;
};

RandomObjectMover.prototype.start = function () {
  if (this.is_running) {
    return;
  }

  // Make sure our object has the right css set

  this.$object.willChange = "transform";
  this.$object.pointerEvents = "auto";

  this.boundEvent = this._moveOnce.bind(this);

  // Bind callback to keep things moving
  this.$object.addEventListener("transitionend", this.boundEvent);

  // Start it moving
  this._initialRandomizer();
  this._moveOnce();

  this.is_running = true;
};

RandomObjectMover.prototype.stop = function () {
  if (!this.is_running) {
    return;
  }

  this.$object.removeEventListener("transitionend", this.boundEvent);

  this.is_running = false;
};
// Init it
var x = [],
  bugContainer = document.getElementById("bugs-container");
document.querySelectorAll(".bugs").forEach((element) => {
  x.push(new RandomObjectMover(element, bugContainer));
});

var randomizedQuote, correctAnswer, currentBug;
var gameFinish,
  gamePause = false;
$(".bugs").click(function () {
  if (!$(this).hasClass("disable") && !gameFinish) {
    currentBug = $(this);
    randomizedQuote = randomIntFromInterval(0, quotes.length - 1);
    $("#quote-bug").attr("src", "./4-2-images/bug.png");
    $("#quotes-container").fadeIn(1);
    correctAnswer = quotes[randomizedQuote][1];
    $("#quotes-container p").html(quotes[randomizedQuote][0]);
  }
});
function rightChoice() {
  currentBug.attr("src", "./4-2-images/dead-bug.png");
  currentBug.stop();
  currentBug.css("transition", "none");
  currentBug.addClass("disable");
  $("#quote-bug").removeClass("shake");
  $("#quote-bug").attr("src", "./4-2-images/1-2.png");
  quotes.splice(randomizedQuote, 1);
}
function wrongChoice() {
  $("#quote-bug").removeClass("shake");
  $("#quote-bug").attr("src", "./4-2-images/tongue-bug.png");
}
function allBugDead() {
  gameFinish = true;
  $("#bugs-container").delay(2000).fadeOut(1000);
  $("#edu").delay(2000).fadeIn(500);
  // setTimeout(function () {
  //   $("#game-background-pattern").addClass("reversed");
  //   setTimeout(function () {
  //     $("#game-background-pattern").attr("src", "../images/golden-unhappy.png");
  //     $("#game-background-pattern").css("width", "35%");
  //     setTimeout(function () {
  //       $("#game-background-pattern").attr("src", "../images/golden-cry.png");
  //     }, 2000);
  //   }, 5000);
  // }, 2600);
}
$("#yes").click(function () {
  if (!gamePause) {
    gamePause = true;
    if (correctAnswer) {
      rightChoice();
    } else {
      wrongChoice();
    }
    if (quotes.length == 0) {
      allBugDead();
    }
    setTimeout(function () {
      gamePause = false;
      $("#quote-bug").addClass("shake");
      $("#quotes-container").fadeOut(100);
    }, 2500);
  }
});
$("#no").click(function () {
  if (!gamePause) {
    gamePause = true;
    if (correctAnswer == false) {
      rightChoice();
    } else {
      wrongChoice();
    }
    if (quotes.length == 0) {
      allBugDead();
    }
    setTimeout(function () {
      gamePause = false;
      $("#quote-bug").addClass("shake");
      $("#quotes-container").fadeOut(100);
    }, 2500);
  }
  setTimeout(function () {
    gamePause = false;
    $("#quote-bug").addClass("shake");
    $("#quotes-container").fadeOut(100);
  }, 2500);
});
var winWidth = bugContainer.innerWidth;
var winHeight = bugContainer.innerHeight;

$(".bugs").css({
  transform: "translate(" + randomIntFromInterval(0, winWidth) + "px,100%)",
});
var quotes = new Array(20);
for (i = 0; i < quotes.length; i++) {
  quotes[i] = new Array(2);
  if (i <= 9) quotes[i][1] = false;
  else quotes[i][1] = true;
}
quotes[0][0] = "Eating carbs will make me fat.";
quotes[1][0] = "I can only eat snacks if I exercise for 30 minutes.";
quotes[2][0] = "Only organic foods are healthy.";
quotes[3][0] = "I had a bite of my friend's meal. Am I a pig?";
quotes[4][0] = "I missed my afternoon snack so the day is screwed.";
quotes[5][0] = "I binged last night. I'm never going to recover.";
quotes[6][0] = "My boyfriend must think I'm too fat and he doesn't like me.";
quotes[7][0] =
  "My mom shouldn't cook the delicous dinner because I'm on a diet.";
quotes[8][0] = "I need to feel a little hungry after eating to keep healthy.";
quotes[9][0] = "I'll eat whatever I want for today since no one is home.";
quotes[10][0] =
  "I had an extra piece of toast at breakfast. This made me feel satisfied.";
quotes[11][0] = "I'm honoring my body and choosing to nourish it.";
quotes[12][0] = "It's better to have someone with me while eating.";
quotes[13][0] = "Putting on weight doesn't make my worth as a cactus go down.";
quotes[14][0] =
  "Calories ain't important. I'll pay attention to what my body feels.";
quotes[15][0] = "Doctors are not my enemy. They're just trying to help me.";
quotes[16][0] = "I'm tired and I won't exercise today.";
quotes[17][0] =
  "Cactus who don't like me wouldn't change even though I'm thinner.";
quotes[18][0] = "Life is spontaneous. Just follow Mr snail.";
quotes[19][0] =
  "I enjoyed people watching after lunch. They're so interesting!";

$("#game-background-pattern").fadeIn(1000);
$("#bugs-container").fadeIn(1000);

$("#edu-button").click(function () {
  nextchapter();
});
function nextchapter() {
  if (gameFinish) location.replace("4-3.html");
}
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
