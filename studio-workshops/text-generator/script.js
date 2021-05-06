$(document).ready(function() {

  // list one content
  var one = [
    "play video games",
    "call a friend",
    "eat snacks",
    "watch YouTube",
    "run",
    "go hiking",
    "work out",
    "go grocery shopping",
    "sleep",
    "drink alcohol",
    "buy coffee",
  ];

  // list two content
  var two = [
    "happily",
    "sadly",
    "surprisingly",
    "curiously",
    "strangely",
    "awkwardly",
    "beautifully",
    "bravely",
    "cheerfully",
    "greedily",
    "fearfully",
  ];
        
        // list three content
  var three = [
    "in my house",
    "in a park",
    "in the gym",
    "in the subway",
    "in the classroom",
    "at the beach",
    "in a shopping mall",
    "in my dream",
    "in the elevator",
  ];
        

  // This is a very common randomizing function.
  // It takes a list (array) and returns one at random.
  function select_random(x){
    y = x[Math.floor(Math.random()*x.length)];
    return y;
  }

  function generate(){

    // Select a random item from each list
    var selected_one = select_random(one);
    var selected_two = select_random(two);
    var selected_three = select_random(three);

    // Take the selected (random) item from list and make it visible
    $('.list-one').html(selected_one);
    $('.list-two').html(selected_two);
    $('.list-three').html(selected_three);

  }

  $('#my-button').click(function(){
    console.log('working');
    generate();
  });

  generate();

});