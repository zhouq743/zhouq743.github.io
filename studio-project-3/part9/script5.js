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
document.querySelectorAll('.actions-container').forEach(el => {
  el.style.display = 'none';
});
document.querySelector('#show-lines').addEventListener('click', function () {
  document.querySelectorAll('.actions-container').forEach(el => {
    el.style.display = 'grid';
  })
});

document.querySelector('#show-lines').addEventListener('click', function () {
  document.querySelector('.hide').classList.remove('hide');
  document.querySelector('#show-map-label').style.display = 'none';
  // document.querySelector('.targeted').style.display = 'none';
  document.querySelector('.targeted').classList.remove('targeted');
});
document.querySelector('#hide-lines').addEventListener('click', function () {
  document.querySelector('#show-map-label').style.display = 'grid';
  document.querySelector('.not-hiding').classList.add('hide');
  document.querySelectorAll('.actions-container').forEach(el => {
    el.style.display = 'none';
  });
})

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileFunction(x) {
  if (x.matches) {
    document.querySelectorAll('.actions-container').forEach(ac => {
      ac.classList.add('resize')
    });
    document.querySelector('.exit-label').style.order = '1';
    document.querySelector('.show-lines').style.order = '2';
    document.querySelector('#aware-label').style.order = '3';
    document.querySelector('#unaware-label').style.order = '4';
  } else {
    document.querySelectorAll('.actions-container').forEach(ac => {
      ac.classList.remove('resize')
    });
    document.querySelector('#aware-label').style.order = 'inherit';
    document.querySelector('#unaware-label').style.order = 'inherit';
    document.querySelector('.exit-label').style.order = 'inherit';
    document.querySelector('.show-lines').style.order = 'inherit';
  }
}

var x = window.matchMedia("(max-width: 480px)")
mobileFunction(x)
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
      document.querySelector('.targeted').style.display = 'none';
      document.querySelector('.targeted').classList.remove('targeted');
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

    $('.actions-container').click(function () {
      $(this).addClass('targeted');
      $(this).css('display', 'grid');
    })

    filterSmiling.addEventListener("click", function () {
      if (photoContainer.classList.contains("smiling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });

    filterChilling.addEventListener("click", function () {
      if (photoContainer.classList.contains("chilling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterReading.addEventListener("click", function () {
      if (photoContainer.classList.contains("reading")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterSmoking.addEventListener("click", function () {
      if (photoContainer.classList.contains("smoking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterSleeping.addEventListener("click", function () {
      if (photoContainer.classList.contains("sleeping")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterFighting.addEventListener("click", function () {
      if (photoContainer.classList.contains("fighting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterRunning.addEventListener("click", function () {
      if (photoContainer.classList.contains("running")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterSitting.addEventListener("click", function () {
      if (photoContainer.classList.contains("sitting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterWalking.addEventListener("click", function () {
      if (photoContainer.classList.contains("walking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterStanding.addEventListener("click", function () {
      if (photoContainer.classList.contains("standing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterPlaying.addEventListener("click", function () {
      if (photoContainer.classList.contains("playing-music")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterPatting.addEventListener("click", function () {
      if (photoContainer.classList.contains("patting")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterStaring.addEventListener("click", function () {
      if (photoContainer.classList.contains("staring")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterPosing.addEventListener("click", function () {
      if (photoContainer.classList.contains("posing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterKissing.addEventListener("click", function () {
      if (photoContainer.classList.contains("kissing")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterDoodling.addEventListener("click", function () {
      if (photoContainer.classList.contains("doodling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterHandshaking.addEventListener("click", function () {
      if (photoContainer.classList.contains("shaking-hands")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });
    filterWatching.addEventListener("click", function () {
      if (photoContainer.classList.contains("watching")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      };
      document.querySelectorAll('.resize').forEach(el => {
        el.style.display = 'none';
      });
      if (document.querySelector('.actions-container').classList.contains('resize')) {
        document.querySelector('.not-hiding').classList.add('hide');
        document.querySelector('#show-map-label').style.display = 'grid';
      }
      topFunction();
    });

    $('.photo-container').mouseover(function () {
      $(this).addClass('test');
      $('.photo-container').not(".test").addClass('blur');
      $('.label-container').addClass('blur');
      $('h1').addClass('blur');
    });
    $('.photo-container').mouseout(function () {
      $(this).removeClass('test');
      $('.photo-container').not(".test").removeClass('blur');
      $('.label-container').removeClass('blur');
      $('h1').removeClass('blur');
    });

    $('.photo-container').on('tap', (function () {
      $(this).addClass('test');
      $('.photo-container').not(".test").addClass('blur');
      $('.label-container').addClass('blur');
      $('h1').addClass('blur');
    }));
    // $('.photo-container').touchend(function(){
    //   $(this).removeClass('test');
    //   $('.photo-container').not(".test").removeClass('blur');
    //   $('.label-container').removeClass('blur');
    //   $('h1').removeClass('blur');
    // });

  });
}
