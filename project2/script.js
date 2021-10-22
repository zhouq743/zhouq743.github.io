var startGame = false,
    noteOpened = false;

$('#skip').click(function(){
  $('#intro').fadeOut(1);
  $('#container').removeClass('filter');
  $('#boy').attr('src','./images/boy2.png');
  $("#boy").animate({left: '950px'},4000);
  setTimeout(function(){$("#boy").css('display','none');},4000);
  $('#instruction').css('display','block');
  startGame = true;
})

//move the girl
var pane = $('#container'),
    box = $('#girl'),
    w = pane.width() - box.width(),
    h = pane.height() - box.height(),
    d = {},
    x = 3;
function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}
function newv2(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > h ? h : n;
}
$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });
setInterval(function() {
  if (startGame == true){
    box.css({
      left: function(i,v) { return newv(v, 37, 39); },
      top: function(i,v) { return newv2(v, 38, 40); }
  });
  }
}, 20);
//change girl's direction
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
      $('#girl').attr('src','./images/girl.png');
    }
    else if (e.keyCode == '40') {
      // down arrow
      $('#girl').attr('src','./images/girl.png');
    }
    else if (e.keyCode == '37') {
      $('#girl').attr('src','./images/girl3.png');
       // left arrow
    }
    else if (e.keyCode == '39') {
      $('#girl').attr('src','./images/girl2.png');
       // right arrow
    }
}

var fridgeStatus = false,
    lockerStatus = false,
    doorStatus = false,
    bedStatus = false,
    deskStatus = false,
    tableStatus = false,
    carpetStatus = false,
    doorOpen = false;
//hints
setInterval(function openHints(){
  var girlX = parseInt($('#girl').css('left'),10), 
      girlY = parseInt($('#girl').css('top'),10);

  //notes
  if (girlX >= 615 && girlX <= 720 && girlY <= 142 && girlY >= 24){
    $('#note').css('display','block');
    fridgeStatus = true;
  } else {
    $('#note').css('display','none');
    fridgeStatus = false;
  }
  //locker
  if (girlX >= 480 && girlX <= 543 && girlY <= 134 && girlY >= 114){
    $('#for-locker').css('display','block');
    lockerStatus = true;
  } else {
    $('#for-locker').css('display','none');
    lockerStatus = false;
  }
  //door
  if (girlX >= 915 && girlY >= 179 && girlY <= 284){
    $('#for-door').css('display','block');
    doorStatus = true;
  } else {
    $('#for-door').css('display','none');
    doorStatus = false;
  }
  //others
  if(noteOpened == true){
    //bed
    if (girlX < 184 && girlX > 84 && girlY >= 219 && girlY <= 279 && redGot == false){
      $('#for-bed').css('display','block');
      bedStatus = true;
    } else {
      $('#for-bed').css('display','none');
      bedStatus = false;
    }
    //desk
    if (girlX < 345 && girlX > 276 && girlY >= 38 && girlY <= 137 && purpleGot == false){
      $('#for-desk').css('display','block');
      deskStatus = true;
    } else {
      $('#for-desk').css('display','none');
      deskStatus = false;
    }
    //coffee
    if (girlX < 765 && girlX > 702 && girlY >= 278 && girlY <= 338 && brownGot == false){
      $('#for-table').css('display','block');
      tableStatus = true;
    } else {
      $('#for-table').css('display','none');
      tableStatus = false;
    }
    //carpet
    if (girlX < 605 && girlX > 506 && girlY >= 455 && girlY <= 479 && greenGot == false){
      $('#for-carpet').css('display','block');
      carpetStatus = true;
    } else {
      $('#for-carpet').css('display','none');
      carpetStatus = false;
    }
  }
  //puzzle item show
  if (redGot == true){
    $('#fabric3').css('display','block');
  }
  if (brownGot == true){
    $('#brown').css('display','block');
  }
  if (greenGot == true){
    $('#green').css('display','block');
  }
  if (purpleGot == true){
    $('#purple').css('display','block');
  }
},20)

//whether the item is obtained
var redGot = false, purpleGot = false, greenGot = false, brownGot = false;
// f key
$(document).on('keypress',function(e) {
  if(e.which == 102) {
    if(fridgeStatus == true){
      $('#sticky-note').fadeIn(1);
      $('#container').addClass('filter');
      noteOpened = true;
    } else if(lockerStatus == true){
      if (noteOpened == true) {
        if(redGot == true && purpleGot == true && greenGot == true && brownGot == true){
          $('#puzzle').fadeIn(1);
          $('#container').addClass('filter');
          $('#chest3').fadeIn(1);
          $('#chest3').delay(1000).fadeOut(1000);
          // $('#my-bag').css('display','flex');
        } else {
          $('#puzzle').fadeIn(1);
          $('#container').addClass('filter');
          $('#chest2').fadeIn(1);
          $('#chest2').delay(1000).fadeOut(1000);
        }
      } else {
        $('#chest').fadeIn(1);
        $('#chest').delay(1000).fadeOut(1000);
      }
    } else if(doorStatus == true){
      $('#door-locked').fadeIn(1);
      $('#door-locked').delay(1000).fadeOut(1000);
    } else if(bedStatus == true){
      $('#red-got').fadeIn(1);
      $('#red-got').delay(1000).fadeOut(1000);
      $('#red-container').css('display','grid');
      bagItem.push('./images/fabric.png')
      redGot = true;
    } else if(tableStatus == true){
      $('#brown-got').fadeIn(1);
      $('#brown-got').delay(1000).fadeOut(1000);
      $('#brown-container').css('display','grid');
      bagItem.push('./images/coffee.png')
      brownGot = true;
    } else if(deskStatus == true){
      $('#purple-got').fadeIn(1);
      $('#purple-got').delay(1000).fadeOut(1000);
      $('#purple-container').css('display','grid');
      bagItem.push('./images/cuicuit.png')
      purpleGot = true;
    } else if(carpetStatus == true){
      $('#green-got').fadeIn(1);
      $('#green-got').delay(1000).fadeOut(1000);
      $('#green-container').css('display','grid');
      bagItem.push('./images/leaves.png')
      greenGot = true;
    }
      
  }
});

var bagItem = [];

//instruction
$('#open-instruction').click(function(){
  $('#instruction').fadeIn(1,0);
  $('#container').addClass('filter');
})
//bag
$('#open-item').click(function(){
  $('#my-bag').css('display','flex');
  $('#container').addClass('filter');
})

//close overlays through enter key
$('#girl-1').css('display','block');
$('#girl-6').css('display','block');
var oneClosed = false;
$(document).on('keypress',function(e) {
  if(e.which == 13) {
    //fridge
    if ($('#sticky-note').css('display') == 'block'){
      $('#sticky-note').fadeOut(1);
      $('#container').removeClass('filter');
    //chest
    } else if($('#puzzle').css('display') == 'block'){
      $('#puzzle').fadeOut(1);
      $('#container').removeClass('filter');
    //instruction
    } else if($('#instruction').css('display') == 'block'){
      $('#instruction').fadeOut(1,0);
      $('#container').removeClass('filter');
    //bag
    } else if($('#my-bag').css('display') == 'flex'){
      $('#my-bag').fadeOut(1,0);
      $('#container').removeClass('filter');
    //intro
    } else if($('#girl-1').css('display') == 'block'){
      $('#girl-1').fadeOut(1);
      $('#girl-2').css('display','block');
    } else if($('#girl-1').css('display') == 'none' && $('#girl-2').css('display') == 'block'){
      $('#girl-2').fadeOut(1);
      $('#girl-3').css('display','block');
    } else if($('#girl-2').css('display') == 'none' && $('#girl-3').css('display') == 'block'){
      $('#girl-3').fadeOut(1);
      $('#boy-1').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-boy.png');
    } else if($('#boy-1').css('display') == 'none' && $('#girl-4').css('display') == 'block'){
      $('#girl-4').fadeOut(1);
      $('#boy-2').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-boy.png');
    } else if($('#boy-3').css('display') == 'none' && $('#girl-5').css('display') == 'block' && oneClosed == false){
      $('#it1').fadeOut(1);
      $('#girl-5').css('display') == 'none';
      $('#container').removeClass('filter');
      $('#boy').attr('src','./images/boy2.png');
      $("#boy").animate({left: '950px'},4000);
      $('#it2').delay(4000).fadeIn(1);
      setTimeout(function(){$('#container').addClass('filter');$("#boy").css('display','none');},4000);
      oneClosed = true;
    } else if(oneClosed == true && $('#girl-7').css('display') == 'none'){
      $('#girl-6').fadeOut(1);
      $('#girl-7').css('display', 'block');
    } else if($('#girl-7').css('display') == 'block' && $('#girl-6').css('display') == 'none'){
      $('#intro').fadeOut(1);
      $('#container').removeClass('filter');
      $('#instruction').fadeIn(1);
      startGame = true;
    } else if($('#girl-3').css('display') == 'none' && $('#boy-1').css('display') == 'block'){
      $('#boy-1').fadeOut(1);
      $('#girl-4').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
    } else if($('#girl-4').css('display') == 'none' && $('#boy-2').css('display') == 'block'){
      $('#boy-2').fadeOut(1);
      $('#boy-3').css('display','block');
    } else if($('#boy-2').css('display') == 'none' && $('#boy-3').css('display') == 'block'){
      $('#boy-3').fadeOut(1);
      $('#girl-5').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
    }

  }
})

var northRight = false,
westRight = false,
southRight = false,
eastRight = false;

var qCount = 0, wCount = 0, eCount = 0, rCount = 0;

$(document).on('keypress',function(e) {
  //q west
  if(e.which == 113) {
    var itemNumber = bagItem.length;
    qCount++;
    var qInt = qCount % itemNumber;
    console.log(qInt)
    $('#west img').attr('src', bagItem[qInt]);
    var img = document.getElementById('westimg');
    if(img.src == "./images/fabric.png"){
      westRight == true;
    } else {westRight == false}
    console.log(westRight);
    console.log(img.src);
  //w north
  } else if(e.which == 119){
    var itemNumber = bagItem.length;
    wCount++;
    var wInt = wCount % itemNumber;
    console.log(wInt)
    $('#north img').attr('src', bagItem[wInt]);
    if($('#north img').attr('src') == './images/cuicuit.png'){
      northRight == true;
    } else {westRight == false}
  //e east
  } else if(e.which == 101){
    var itemNumber = bagItem.length;
    eCount++;
    var eInt = eCount % itemNumber;
    console.log(eInt)
    $('#east img').attr('src', bagItem[eInt]);
    if($('#east img').attr('src') == './images/coffee.png'){
      eastRight == true;
    } else {westRight == false}
  //r south
  } else if(e.which == 114){
    var itemNumber = bagItem.length;
    rCount++;
    var rInt = rCount % itemNumber;
    console.log(rInt)
    $('#south img').attr('src', bagItem[rInt]);
    if($('#south img').attr('src') == './images/leaves.png'){
      southRight == true;
    } else {westRight == false}
  }
})

