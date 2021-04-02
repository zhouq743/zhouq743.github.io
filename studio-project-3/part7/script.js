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
    photoActions.forEach(function(b) {
      photoContainer.classList.add(b);
    })

    if (photoContainer.classList.contains("conscious")) {
      document.querySelector(".conscious-container").append(photoContainer);
    } else {
      document.querySelector(".unconscious-container").append(photoContainer);
    }
    



    var filterSmiling = document.querySelector("#smiling-sign");
    var filterChilling = document.querySelector("#chilling-sign");
    var filterReading = document.querySelector("#reading-sign");
    var filterSmoking = document.querySelector("#smoking-sign");
    

    filterSmiling.addEventListener("click", function () {
      if (photoContainer.classList.contains("smiling")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
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
      }
    });
                filterSmoking.addEventListener("click", function () {
      if (photoContainer.classList.contains("smoking")) {
        photoContainer.style.display = "block";
      } else {
        photoContainer.style.display = "none";
      }
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

