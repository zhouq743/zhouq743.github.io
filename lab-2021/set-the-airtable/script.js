var Airtable = require("airtable");
var base = new Airtable({ apiKey: 'key5F266aCXJ7Wc7M' }).base('appAM1Zm39bCbSbOG');

base("set-the-airtable").select({}).eachPage(gotItems, gotAllItems);

const items = [];

function gotItems(records, fetchNextPage) {
  items.push(...records);
  fetchNextPage();
}

function gotAllItems(err) {
  if (err) {
    console.log("error!");
    return;
  }
  showItems();
}

function showItems() {
  items.forEach((item) => {

    var itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    var itemImage = document.createElement("img");
    itemImage.src = item.fields.images[0].url;
    itemContainer.append(itemImage);

    var utensilContainer = document.getElementById('utensil-container');

    var itemStatus = item.fields.status;
    itemStatus.forEach(function(c){
      itemContainer.classList.add(c);
    });

    if (itemContainer.classList.contains('utensils')){
      utensilContainer.append(itemContainer);
    } else{
      document.querySelector('#container').append(itemContainer);
    }

    if (item.fields.name === "bowl") {
      for (var i=0; i<3; i++) {
        var bowlImage = document.createElement('img');
        bowlImage.src = item.fields.images[0].url;
        bowlImage.classList.add("bowl");
        itemContainer.appendChild(bowlImage);
      }
    }

    if (item.fields.name === "chopsticks") {
      for (var i=0; i<3; i++) {
        var chopImage = document.createElement('img');
        chopImage.src = item.fields.images[0].url;
        chopImage.classList.add("chopsticks");
        itemContainer.appendChild(chopImage);
      }
    }

  });
};