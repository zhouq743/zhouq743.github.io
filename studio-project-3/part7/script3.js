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


function playAudio() {
  var audio1 = new Audio('door_mixdown.mp3');
  audio1.volume = 0.1;
  audio1.play();
}

function showPhotos() {
  console.log("showPhotos()");
  photos.forEach((photo) => {
    //     var photoActions = document.createElement("h4");
    //     photoActions.innerText = photo.fields.actions;
    //     document.body.append(photoActions);

    //     var photoName = document.createElement("p");
    //     photoName.innerText = photo.fields.name;
    //     document.body.append(photoName);

    //add to specific area
    //var photoImage = document.createElement('img');
    //photoImage.src = photo.fields.attachments[0].url;
    //document.querySelector('.container').append(photoImage);
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

    // var filters=[filterSmiling,filterChilling,filterReading,filterSmoking,filterSleeping,filterFighting,filterRunning,filterSitting,filterWalking,filterStanding,filterPlaying,filterPatting,filterStaring,filterPosing,filterKissing,filterDoodling,filterHandshaking,filterWatching];

    // var classNames=['smiling','chilling','reading','smoking','sleeping','fighting','running','sitting','walking','standing','playing-music','patting','staring','posing','kissing','doodling','shaking-hands','watching'];
    // filters.forEach((item,index) => {
    //   item.addEventListener('click',function(){
    //     console.log(classNames[index]);
    //     if (photoContainer.classList.contains(classNames[index])){
    //       photoContainer.style.display = 'block';
    //     } else{
    //       photoContainer.style.display = 'none';
    //     };
    //   });
    // })

    filterSmiling.addEventListener("click", function () {
      if (photoContainer.classList.contains("smiling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterChilling.addEventListener("click", function () {
      if (photoContainer.classList.contains("chilling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
    });
    filterReading.addEventListener("click", function () {
      if (photoContainer.classList.contains("reading")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterSmoking.addEventListener("click", function () {
      if (photoContainer.classList.contains("smoking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterSleeping.addEventListener("click", function () {
      if (photoContainer.classList.contains("sleeping")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterFighting.addEventListener("click", function () {
      if (photoContainer.classList.contains("fighting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterRunning.addEventListener("click", function () {
      if (photoContainer.classList.contains("running")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterSitting.addEventListener("click", function () {
      if (photoContainer.classList.contains("sitting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterWalking.addEventListener("click", function () {
      if (photoContainer.classList.contains("walking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterStanding.addEventListener("click", function () {
      if (photoContainer.classList.contains("standing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterPlaying.addEventListener("click", function () {
      if (photoContainer.classList.contains("playing-music")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterPatting.addEventListener("click", function () {
      if (photoContainer.classList.contains("patting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterStaring.addEventListener("click", function () {
      if (photoContainer.classList.contains("staring")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterPosing.addEventListener("click", function () {
      if (photoContainer.classList.contains("posing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterKissing.addEventListener("click", function () {
      if (photoContainer.classList.contains("kissing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterDoodling.addEventListener("click", function () {
      if (photoContainer.classList.contains("doodling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterHandshaking.addEventListener("click", function () {
      if (photoContainer.classList.contains("shaking-hands")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });
    filterWatching.addEventListener("click", function () {
      if (photoContainer.classList.contains("watching")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      playAudio();
    });

    $('.photo-container').mouseover(function(){
      $(this).addClass('test');
      $('.photo-container').not(".test").addClass('blur');
      $('.label-container').addClass('blur');
      $('h1').addClass('blur');
    });
    $('.photo-container').mouseout(function(){
      $(this).removeClass('test');
      $('.photo-container').not(".test").removeClass('blur');
      $('.label-container').removeClass('blur');
      $('h1').removeClass('blur');
    });

    // var filterUncon = document.querySelector(".button-unconscious");
    // filterUncon.addEventListener(
    //   "click",
    //   function() {
    //     if (photoContainer.classList.contains("unconscious")) {
    //       photoContainer.style.display = "block";
    //     } else {
    //       photoContainer.style.display = "none";
    //     }
    //   }
    // );
  });
}
