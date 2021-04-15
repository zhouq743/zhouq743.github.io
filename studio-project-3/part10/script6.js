var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({ apiKey: "key5F266aCXJ7Wc7M" }).base(
  "app9epJEBAhVBiNja"
);

base("subway").select({}).eachPage(gotPhotosCon, gotAllphotos);

const photos = [];

function gotPhotosCon(records, fetchNextPage) {
  console.log("gotPhotosCon()");
  photos.push(...records);
  fetchNextPage();
}

function gotAllphotos(err) {
  console.log("gotAllPhotos");
  if (err) {
    console.log("error!");
    return;
  }
  consoleLogPhotos();
  showPhotos();
}

function consoleLogPhotos() {
  console.log("consoleLogPhotos()");
  photos.forEach((photo) => {
    console.log(photo);
  });
}
document.querySelectorAll(".actions-container").forEach((el) => {
  el.style.display = "none";
});
document.querySelector("#show-lines").addEventListener("click", function () {
  document.querySelectorAll(".actions-container").forEach((el) => {
    el.style.display = "grid";
  });
  document.querySelector("#credit").style.top = "2.6vw";
});
document.querySelector("#show-lines").addEventListener("click", function () {
  document.querySelector(".label-container").style.height = "auto";
  height = document.querySelector(".label-container").offsetHeight;
  document.querySelector(".conscious-container").style.height = height + "px";
  document.querySelector(".unconscious-container").style.height = height + "px";
});

document.querySelector("#show-lines").addEventListener("click", function () {
  document.querySelector(".hide").classList.remove("hide");
  document.querySelector("#show-map-label").style.display = "none";
  // document.querySelector('.targeted').style.display = 'none';
  document.querySelector(".targeted").classList.remove("targeted");
});
document.querySelector("#hide-lines").addEventListener("click", function () {
  document.querySelector("#show-map-label").style.display = "grid";
  document.querySelector(".not-hiding").classList.add("hide");
  document.querySelectorAll(".actions-container").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelector(".label-container").style.height =
    "calc(100vh - 20.6vw)";
  document.querySelector(".conscious-container").style.height =
    "calc(100vh - 20.6vw)";
  document.querySelector(".unconscious-container").style.height =
    "calc(100vh - 20.6vw)";
  document.querySelector("#credit").style.top = "2.6vw";
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileFunction(x) {
  if (x.matches) {
    document.querySelectorAll(".actions-container").forEach((ac) => {
      ac.classList.add("resize");
    });
    document.querySelector(".exit-label").style.order = "1";
    document.querySelector(".show-lines").style.order = "2";
    document.querySelector("#aware-label").style.order = "3";
    document.querySelector("#unaware-label").style.order = "4";
    // document.querySelector(".label-container").style.height = "0";
    document.querySelector("#credit").style.top = "2vw";
    document.querySelector(".conscious-container").style.height =
      "calc(100vh - 50vw)";
    document.querySelector(".unconscious-container").style.height =
      "calc(100vh - 50vw)";
    var exitButton = document.querySelector("#exit");
    exitButton.addEventListener("click", function () {
      document.querySelector(".conscious-container").style.height =
        "calc(100vh - 50vw)";
      document.querySelector(".unconscious-container").style.height =
        "calc(100vh - 50vw)";
      document.querySelector(".conscious-container").style.transform =
        "translateY(-9vw)";
      document.querySelector(".unconscious-container").style.transform =
        "translateY(-9vw)";
      document.querySelector("#credit").style.transform =
        "translate(-50%,-6vw)";
    });
    document
      .querySelector("#hide-lines")
      .addEventListener("click", function () {
        document.querySelector(".label-container").style.height = "auto";
      });
    document
      .querySelector("#show-lines")
      .addEventListener("click", function () {
        document.querySelector(".conscious-container").style.transform =
          "translateY(1vw)";
        document.querySelector(".unconscious-container").style.transform =
          "translateY(1vw)";
        document.querySelector("#credit").style.transform =
          "translate(-50%,3vw)";
      });
    document
      .querySelector("#hide-lines")
      .addEventListener("click", function () {
        document.querySelector(".conscious-container").style.transform =
          "translateY(-9vw)";
        document.querySelector(".unconscious-container").style.transform =
          "translateY(-9vw)";
        document.querySelector("#credit").style.transform =
          "translate(-50%,-6vw)";
      });
  } else {
    document.querySelectorAll(".actions-container").forEach((ac) => {
      ac.classList.remove("resize");
    });
    document.querySelector("#aware-label").style.order = "inherit";
    document.querySelector("#unaware-label").style.order = "inherit";
    document.querySelector(".exit-label").style.order = "inherit";
    document.querySelector(".show-lines").style.order = "inherit";
  }
}

function hideScroll() {
  document.querySelector(".conscious-container").classList.add("hide-scroll");
  document.querySelector(".unconscious-container").classList.add("hide-scroll");
  document.querySelectorAll(".photo-container > img").forEach((img) => {
    img.style.width = "35vw";
  });
}
function mobileHideScroll() {
  document.querySelector(".conscious-container").classList.add("hide-scroll");
  document.querySelector(".unconscious-container").classList.add("hide-scroll");
  document.querySelectorAll(".photo-container > img").forEach((img) => {
    img.style.width = "47vw";
  });
}
function showScroll() {
  document
    .querySelector(".conscious-container")
    .classList.remove("hide-scroll");
  document
    .querySelector(".unconscious-container")
    .classList.remove("hide-scroll");
  document.querySelectorAll(".photo-container > img").forEach((img) => {
    img.style.width = "32.5vw";
  });
}
function mobileShowScroll() {
  document
    .querySelector(".conscious-container")
    .classList.remove("hide-scroll");
  document
    .querySelector(".unconscious-container")
    .classList.remove("hide-scroll");
  document.querySelectorAll(".photo-container > img").forEach((img) => {
    img.style.width = "43vw";
  });
}

var x = window.matchMedia("(max-width: 480px)");
mobileFunction(x);
x.addListener(mobileFunction);

function showPhotos() {
  console.log("showPhotos()");
  photos.forEach((photo) => {
    console.log("work");
    var photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");

    var photoImage = document.createElement("img");
    photoImage.src = photo.fields.attachments[0].url;
    photoContainer.append(photoImage);

    var consciousness = photo.fields.consciousness;
    consciousness.forEach(function (c) {
      photoContainer.classList.add(c);
    });
    var photoActions = photo.fields.actions;
    photoActions.forEach(function (b) {
      photoContainer.classList.add(b);
    });

    if (photoContainer.classList.contains("conscious")) {
      document.querySelector(".conscious-container").append(photoContainer);
      photoContainer.classList.add("left-column");
    } else {
      document.querySelector(".unconscious-container").append(photoContainer);
      photoContainer.classList.add("right-column");
    }

    var exitButton = document.querySelector("#exit");
    exitButton.addEventListener("click", function () {
      photoContainer.style.display = "block";
      document.querySelector(".targeted").style.display = "none";
      document.querySelector(".targeted").classList.remove("targeted");
      if (x.matches) {
        mobileShowScroll();
      } else {
        showScroll();
      }
    });

    var filterSmiling = document.querySelector("#smiling-sign");
    var filterChilling = document.querySelector("#chilling-sign");
    var filterReading = document.querySelector("#reading-sign");
    var filterSmoking = document.querySelector("#smoking-sign");
    var filterSleeping = document.querySelector("#sleeping-sign");
    var filterFighting = document.querySelector("#fighting-sign");
    var filterRunning = document.querySelector("#running-sign");
    var filterSitting = document.querySelector("#sitting-sign");
    var filterWalking = document.querySelector("#walking-sign");
    var filterStanding = document.querySelector("#standing-sign");
    var filterPlaying = document.querySelector("#playing-sign");
    var filterPatting = document.querySelector("#patting-sign");
    var filterStaring = document.querySelector("#staring-sign");
    var filterPosing = document.querySelector("#posing-sign");
    var filterKissing = document.querySelector("#kissing-sign");
    var filterDoodling = document.querySelector("#doodling-sign");
    var filterHandshaking = document.querySelector("#handing-sign");
    var filterWatching = document.querySelector("#watching-sign");

    $(".actions-container").click(function () {
      $(this).addClass("targeted");
      $(this).css("display", "grid");
    });

    filterSmiling.addEventListener("click", function () {
      if (photoContainer.classList.contains("smiling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
        document.querySelector(".conscious-container").style.transform =
          "translateY(1vw)";
        document.querySelector(".unconscious-container").style.transform =
          "translateY(1vw)";
      } else {
        hideScroll();
      }
      topFunction();
    });

    filterChilling.addEventListener("click", function () {
      if (photoContainer.classList.contains("chilling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterReading.addEventListener("click", function () {
      if (photoContainer.classList.contains("reading")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterSmoking.addEventListener("click", function () {
      if (photoContainer.classList.contains("smoking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterSleeping.addEventListener("click", function () {
      if (photoContainer.classList.contains("sleeping")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterFighting.addEventListener("click", function () {
      if (photoContainer.classList.contains("fighting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterRunning.addEventListener("click", function () {
      if (photoContainer.classList.contains("running")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterSitting.addEventListener("click", function () {
      if (photoContainer.classList.contains("sitting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterWalking.addEventListener("click", function () {
      if (photoContainer.classList.contains("walking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterStanding.addEventListener("click", function () {
      if (photoContainer.classList.contains("standing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterPlaying.addEventListener("click", function () {
      if (photoContainer.classList.contains("playing-music")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterPatting.addEventListener("click", function () {
      if (photoContainer.classList.contains("patting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterStaring.addEventListener("click", function () {
      if (photoContainer.classList.contains("staring")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterPosing.addEventListener("click", function () {
      if (photoContainer.classList.contains("posing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterKissing.addEventListener("click", function () {
      if (photoContainer.classList.contains("kissing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterDoodling.addEventListener("click", function () {
      if (photoContainer.classList.contains("doodling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterHandshaking.addEventListener("click", function () {
      if (photoContainer.classList.contains("shaking-hands")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });
    filterWatching.addEventListener("click", function () {
      if (photoContainer.classList.contains("watching")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
      document.querySelectorAll(".resize").forEach((el) => {
        el.style.display = "none";
      });
      if (
        document
          .querySelector(".actions-container")
          .classList.contains("resize")
      ) {
        document.querySelector(".not-hiding").classList.add("hide");
        document.querySelector("#show-map-label").style.display = "grid";
      }
      if (x.matches) {
        mobileHideScroll();
      } else {
        hideScroll();
      }
      topFunction();
    });

    $(".photo-container").mouseover(function () {
      $(this).addClass("test");
      $(".photo-container").not(".test").addClass("blur");
      $(".label-container").addClass("blur");
      $("#heading-container").addClass("blur");
      $("#credit").addClass("blur");
    });
    $(".photo-container").mouseout(function () {
      $(this).removeClass("test");
      $(".photo-container").not(".test").removeClass("blur");
      $(".label-container").removeClass("blur");
      $("#heading-container").removeClass("blur");
      $("#credit").removeClass("blur");
    });

    $(".photo-container").on("tap", function () {
      $(this).addClass("test");
      $(".photo-container").not(".test").addClass("blur");
      $(".label-container").addClass("blur");
      $("#heading-container").addClass("blur");
      $("#credit").addClass("blur");
    });
    // $('.photo-container').touchend(function(){
    //   $(this).removeClass('test');
    //   $('.photo-container').not(".test").removeClass('blur');
    //   $('.label-container').removeClass('blur');
    //   $('h1').removeClass('blur');
    // });
  });
}
