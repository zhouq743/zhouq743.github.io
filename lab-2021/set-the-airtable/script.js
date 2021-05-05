//import airtable library
var Airtable = require("airtable");
// my api key
var base = new Airtable({ apiKey: 'key5F266aCXJ7Wc7M' }).base('appAM1Zm39bCbSbOG');
// my base set-the-airtable, for each record call gotItems and gotAllItems functions
base("set-the-airtable").select({}).eachPage(gotItems, gotAllItems);

//create an empty array items
const items = [];

// create a function with two variables
function gotItems(records, fetchNextPage) {
  //push records into the array items
  items.push(...records);
  //call fetchNextPage which is a function of the airtable
  fetchNextPage();
}
//create a function gotAllItems
function gotAllItems(err) {
  //if there's an error, console error
  if (err) {
    console.log("error!");
    return;
  }
  //call showItems function
  showItems();
}

// create 2 variables which are my html buttons
var myButton = document.querySelector('#button');
var myButton2 = document.querySelector('#button2');

//create a function called showItems
function showItems() {
  //for each of the item in the array items
  items.forEach((item) => {
    // create a new div in my html and call it itemContainer in javascript
    var itemContainer = document.createElement("div");
    // add a class to itemContainer
    itemContainer.classList.add("item-container");

    // create html img tag and call it itemImage in javascript
    var itemImage = document.createElement("img");
    // the src of the image is the url of the 'images' column in airtable
    itemImage.src = item.fields.images[0].url;
    // append itemImage into itemContainer
    itemContainer.append(itemImage);

    // define a new variable utensilContainer which is the html element utensil-container
    var utensilContainer = document.getElementById('utensil-container');

    // define a new variable itemStatus which is the 'status' column in airtable
    var itemStatus = item.fields.status;
    // for each of the status (because status is a multi-select variable)
    itemStatus.forEach(function(c){
      // add statuses as class names to itemContainer 
      itemContainer.classList.add(c);
    });

    // when myButton is clicked
    myButton.addEventListener('click',function(){
      // if itemContainer has the class 'food'
      if (itemContainer.classList.contains('food')){
        // it will be displayed
        itemContainer.style.display = 'block';
        // otherwise it will be hiden
      } else {
        itemContainer.style.display = 'none';
      }
    })

    // when myButton2 is clicked
    myButton2.addEventListener('click',function(){
      // if itemContainer has the class 'utensils'
      if (itemContainer.classList.contains('utensils')){
        // it will be displayed
        itemContainer.style.display = 'block';
      }
    })

    // if itemContainer has the class 'utensils'
    if (itemContainer.classList.contains('utensils')){
      //append itemContainer to utensilContainer
      utensilContainer.append(itemContainer);
      //otherwise append it to the div with id 'container'
    } else{
      document.querySelector('#container').append(itemContainer);
    }



  });
};