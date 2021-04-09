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

var myButton = document.querySelector('#button');
var myButton2 = document.querySelector('#button2');

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

    myButton.addEventListener('click',function(){
      if (itemContainer.classList.contains('food')){
        itemContainer.style.display = 'block';
      } else {
        itemContainer.style.display = 'none';
      }
    })

    myButton2.addEventListener('click',function(){
      if (itemContainer.classList.contains('utensils')){
        itemContainer.style.display = 'block';
      }
    })

    if (itemContainer.classList.contains('utensils')){
      utensilContainer.append(itemContainer);
    } else{
      document.querySelector('#container').append(itemContainer);
    }



  });
};