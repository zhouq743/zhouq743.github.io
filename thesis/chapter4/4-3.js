var cacdone = [false, false, false, false],
  currentcac;
var cacDoneCount = 0;
//scene 1
$("#cage").fadeIn(500);
$("#cloud").delay(800).fadeIn(500).delay(1000).fadeOut(500);
$("#want-cactus").delay(2300).fadeIn(500);
$("#want-cactus").click(function () {
  if (cacDoneCount == 0) {
    $(this).removeClass("shaking");
    $("#splash").delay(300).fadeOut(1000);
    $("#holes-container").delay(300).fadeIn(1000);
    $("#chapter-title").css("color", "#E5DDC6");
  }
});

//scene 2
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function cactusrandomizer() {
  var randomizerdIndex = randomIntFromInterval(0, 3);
  if (cacdone[randomizerdIndex] == false) {
    return randomizerdIndex;
  } else {
    console.log("repeat");
    return cactusrandomizer();
  }
}

var intervalramdomizer = setInterval(function () {
  currentcac = cactusrandomizer();
  cacdone[currentcac] = true;
  console.log(currentcac);
  $("#cactus-" + (currentcac + 1)).addClass("skew");
  clearTimeout(intervalramdomizer);
}, 2000);
$(".cactus").each(function (i) {
  $(this).click(function () {
    $(this).removeClass("skew");
    if (cacDoneCount == 0) {
      $("#letterinside").attr("src", "./4-3-images/letter0.png");
      $("#letter-container").fadeIn(500).css("display", "flex");
      setTimeout(function () {
        $("#letter").attr("src", "./4-3-images/letter-open.png");
        $("#letter").addClass("opened-letter");
        $("#letter").delay(2000).fadeOut(1);
        setTimeout(function () {
          $("#letterinside").fadeIn(100);
          setTimeout(function () {
            letterDone();
          }, 2000);
        }, 2000);
      }, 1000);
    } else if (cacDoneCount == 1) {
      $("#presentinside").attr("src", "./4-3-images/gift0.png");
      $("#present-container").fadeIn(500).css("display", "flex");
      setTimeout(function () {
        $("#present").attr("src", "./4-3-images/present-open.png");
        $("#present").addClass("opened-letter");
        $("#present").delay(2000).fadeOut(1);
        setTimeout(function () {
          $("#presentinside").fadeIn(100);
          setTimeout(function () {
            giftDone();
          }, 2000);
        }, 2000);
      }, 1000);
    } else if (cacDoneCount == 2) {
      $("#presentinside").attr("src", "./4-3-images/gift1.png");
      $("#present-container").fadeIn(500).css("display", "flex");
      setTimeout(function () {
        $("#present").attr("src", "./4-3-images/present-open.png");
        $("#present").addClass("opened-letter");
        $("#present").delay(2000).fadeOut(1);
        setTimeout(function () {
          $("#presentinside").fadeIn(100);
          setTimeout(function () {
            giftDone();
          }, 2000);
        }, 2000);
      }, 1000);
    } else if (cacDoneCount == 3) {
      $("#letterinside").attr("src", "./4-3-images/letter1.png");
      $("#letter-container").fadeIn(500).css("display", "flex");
      setTimeout(function () {
        $("#letter").attr("src", "./4-3-images/letter-open.png");
        $("#letter").addClass("opened-letter");
        $("#letter").delay(2000).fadeOut(1);
        setTimeout(function () {
          $("#letterinside").fadeIn(100);
          setTimeout(function () {
            letterDone();
          }, 2000);
        }, 2000);
      }, 1000);
    }
  });
});

function letterDone() {
  cacDoneCount++;
  $("#letterinside").fadeOut(100);
  $("#letter").delay(99).fadeIn(1);
  $("#letter").attr("src", "./4-3-images/letter.png");
  $("#letter-container").fadeOut(100);
  if (cacDoneCount < 4) {
    var intervalramdomizer = setInterval(function () {
      currentcac = cactusrandomizer();
      cacdone[currentcac] = true;
      console.log(currentcac);
      $("#cactus-" + (currentcac + 1)).addClass("skew");
      clearTimeout(intervalramdomizer);
    }, 2000);
  } else {
    $("#holes-container").delay(500).fadeOut(500);
    $("#seasons-container").delay(500).fadeIn(500);
    seasons();
  }
}
function giftDone() {
  cacDoneCount++;
  $("#presentinside").fadeOut(100);
  $("#present").delay(99).fadeIn(1);
  $("#present").attr("src", "./4-3-images/present.png");
  $("#present-container").fadeOut(100);
  if (cacDoneCount < 4) {
    var intervalramdomizer = setInterval(function () {
      currentcac = cactusrandomizer();
      cacdone[currentcac] = true;
      console.log(currentcac);
      $("#cactus-" + (currentcac + 1)).addClass("skew");
      clearTimeout(intervalramdomizer);
    }, 2000);
  } else {
    $("#holes-container").delay(1500).fadeOut(500);
    $("#seasons-container").delay(1500).fadeIn(500);
    seasons();
  }
}

// $("#letterinside").click(function () {
//   cacDoneCount++;
//   $("#letterinside").fadeOut(100);
//   $("#letter").delay(99).fadeIn(1);
//   $("#letter").attr("src", "./4-3-images/letter.png");
//   $("#letter-container").fadeOut(100);
//   if (cacDoneCount < 4) {
//     var intervalramdomizer = setInterval(function () {
//       currentcac = cactusrandomizer();
//       cacdone[currentcac] = true;
//       console.log(currentcac);
//       $("#cactus-" + (currentcac + 1)).addClass("skew");
//       clearTimeout(intervalramdomizer);
//     }, 2000);
//   } else {
//     $("#holes-container").delay(500).fadeOut(500);
//     $("#seasons-container").delay(500).fadeIn(500);
//     seasons();
//   }
// });
// $("#presentinside").click(function () {
//   cacDoneCount++;
//   $("#presentinside").fadeOut(100);
//   $("#present").delay(99).fadeIn(1);
//   $("#present").attr("src", "./4-3-images/present.png");
//   $("#present-container").fadeOut(100);
//   if (cacDoneCount < 4) {
//     var intervalramdomizer = setInterval(function () {
//       currentcac = cactusrandomizer();
//       cacdone[currentcac] = true;
//       console.log(currentcac);
//       $("#cactus-" + (currentcac + 1)).addClass("skew");
//       clearTimeout(intervalramdomizer);
//     }, 2000);
//   } else {
//     $("#holes-container").delay(1500).fadeOut(500);
//     $("#seasons-container").delay(1500).fadeIn(500);
//     seasons();
//   }
// });

//seasons
function seasons() {
  $("#want-cactus").attr("src", "./4-3-images/want-cac-done.png");
  $("#want-cactus").removeClass("shaking");
  $("#snail").fadeIn(100);
  $(".seasons:nth-child(1)").fadeIn(500);
  //summer
  setTimeout(function () {
    $("#snail").addClass("snail-seasons");
    $(".seasons:nth-child(1)").fadeOut(500);
    $(".seasons:nth-child(2)").fadeIn(500);
    $("#splash-image-1").attr("src", "./4-3-images/cactus1.png");
    $("#splash-image-1").css({ transform: "scale(1.5) translate(-50%,-50%)" });
    //fall
    setTimeout(function () {
      $(".seasons:nth-child(2)").fadeOut(500);
      $(".seasons:nth-child(3)").fadeIn(500);
      $("#splash-image-1").attr("src", "./4-3-images/cactus2.png");
      $("#snail-image").attr("src", "../chapter3/3-2-images/unclesnail.png");
      $("#splash-image-1").css({
        transform: "scale(1.8) translate(-50%,-50%)",
      });
      //winter
      setTimeout(function () {
        $(".seasons:nth-child(3)").fadeOut(500);
        $(".seasons:nth-child(4)").fadeIn(500);
        $("#splash-image-1").attr("src", "./4-3-images/cactus3.png");
        $("#snail-image").attr(
          "src",
          "../chapter3/3-2-images/grandpasnail.png"
        );
        //final selections
        setTimeout(function () {
          $(".seasons:nth-child(4)").fadeOut(500);
          $("#splash-image-1").attr("src", "./4-3-images/cactus3.png");
          $("#snail").fadeOut(500);
          $("#splash").delay(500).fadeIn(500);
          $("#want-cactus").delay(500).fadeIn(500);
          $("#wantu").delay(1200).fadeIn(500);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}

//scene 3
$("#wantu").click(function () {
  $("#seasons-container").delay(300).fadeOut(1000);
  $(".wants").fadeOut(500);
  $("#howto").delay(300).fadeIn(1000);
  $("#chapter-title").css("color", "#563316");
});
function displayImages() {
  $("#howto").fadeOut(500);
  $("#upload-out").fadeIn(500).css("display", "flex");
  let images = "";
  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`;
  });
  output.innerHTML = images;
}
const input = document.querySelector("input");
const output = document.querySelector("output");
let imagesArray = [];
input.addEventListener("change", () => {
  const file = input.files;
  imagesArray.push(file[0]);
  displayImages();
});
output.addEventListener("click", function (event) {
  var rect = output.getBoundingClientRect();
  let width = output.offsetWidth;
  let width2 = output.offsetWidth;
  let height = output.offsetHeight;
  let top = rect.top;
  let left = rect.left;
  var x = event.clientX,
    y = event.clientY;
  $("#cactus-box").css({ width: width, height: height, top: top, left: left });
  $("#cactus-box img").css({
    top: y - top - 0.08 * width2,
    left: x - left - 0.16 * width2,
  });
  $("#cactus-box img").delay(10).fadeIn(1);
  $("#upload-title").delay(100).attr("src", "./4-3-images/thankyou.png");
  $("#upload-out p").delay(1000).fadeOut(500);
  $("#upload-title").delay(1000).css("width", "70%");
  $("#cactus-box").delay(1000).css("transform", "translate(0,-3vh)");
});

$("#chapter-title").on("click", function (e) {
  $("#navigation-container").fadeIn(500).css("display", "grid");
});
$("#navigation-container").click(function () {
  $(this).fadeOut(500);
});
