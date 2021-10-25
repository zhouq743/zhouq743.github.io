var isPlaying = true;
$('#sound').click(function(){
  if(isPlaying == true){
    document.getElementById('myAudio').pause();
    $(this).attr('src','./images/soundoff.png')
    console.log(isPlaying)
    isPlaying = false;
  } else {
    document.getElementById('myAudio').play();
    isPlaying = true;
    $(this).attr('src','./images/soundon.png')
  }
});



var startGame = false,
    noteOpened = false;

$('#skip').click(function(){
  $('#intro').fadeOut(1);
  $('#container').addClass('filter');
  $('#boy').attr('src','./images/boy2.png');
  $("#boy").animate({left: '950px'},4000);
  setTimeout(function(){$("#boy").css('display','none');},4000);
  $('#instruction').css('display','block');
  $('#menu').fadeIn(1);
  document.getElementById('myAudio').play();
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
    desk2Status = false,
    bearStatus = false;
//hints
setInterval(function openHints(){
  var girlX = parseInt($('#girl').css('left'),10), 
      girlY = parseInt($('#girl').css('top'),10);

  //notes
  if (girlX >= 615 && girlX <= 720 && girlY <= 142 && girlY >= 24 && lockOpen == false){
    $('#note').css('display','block');
    fridgeStatus = true;
  } else {
    $('#note').css('display','none');
    fridgeStatus = false;
  }
  //locker
  if (girlX >= 480 && girlX <= 543 && girlY <= 134 && girlY >= 114 && knifeGot == false){
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
    if(girlX < 441 && girlX > 261 && girlY >= 38 && girlY <= 143 && knifeGot == true){
      $('#for-desk2').css('display','block');
      desk2Status = true;
    } else {
      $('#for-desk2').css('display','none');
      desk2Status = false;
    //coffee
    }if (girlX < 765 && girlX > 702 && girlY >= 278 && girlY <= 338 && brownGot == false){
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
  if(knifeGot == true && girlX < 567 && girlX > 501 && girlY >= 222 && girlY <= 327 && keyGot == false){
    $('#for-bear').css('display','block');
    bearStatus = true;
  } else {
    $('#for-bear').css('display','none');
    bearStatus = false;
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
var redGot = false, purpleGot = false, greenGot = false, brownGot = false, knifeGot = false, keyGot = false, diaryOpened = false;
// f key
$(document).on('keypress',function(e) {
  if(e.which == 102) {
    if(fridgeStatus == true && lockOpen == false){
      $('#sticky-note').fadeIn(1);
      $('#container').addClass('filter');
      noteOpened = true;
    } else if(lockerStatus == true){
      if (noteOpened == true && lockOpen == false) {
        if(redGot == true && purpleGot == true && greenGot == true && brownGot == true){
          $('#puzzle').fadeIn(1);
          $('#container').addClass('filter');
          $('#chest3').fadeIn(1);
          $('#chest3').delay(2000).fadeOut(1000);
        } else {
          $('#puzzle').fadeIn(1);
          $('#container').addClass('filter');
          $('#chest2').fadeIn(1);
          $('#chest2').delay(2000).fadeOut(1000);
        }
      } else if(noteOpened == false && lockOpen == false) {
        $('#chesth1').fadeIn(1);
        $('#chesth1').delay(2000).fadeOut(1000);
      } else if(noteOpened == true && lockOpen == true) {
        knifeGot = true;
        if(isPlaying == true){
          document.getElementById('get-sound').play();
        }
        $('#knifeh1').fadeIn(1);
        $('#knifeh1').delay(2000).fadeOut(1000);
        $('#knife-container').css('display','grid');
        $('#container').addClass('filter');
        $('#intro2').fadeIn(1);
        $('#open-item').addClass('glow');
      }
    } else if(doorStatus == true){
      if(keyGot == false){
        $('#door-locked').fadeIn(1);
        $('#door-locked').delay(2000).fadeOut(1000);
      } else if(keyGot == true && diaryOpened == false) {
        if(isPlaying == true){
          document.getElementById('door-sound').play();
        }
        location.href = './ending1.html';
      } else if(keyGot == true && diaryOpened == true) {
        if(isPlaying == true){
          document.getElementById('door-sound').play();
        }
        $('#container').addClass('filter');
        $('#intro4').fadeIn(1);
      }

    } else if(bedStatus == true){
      $('#red-got').fadeIn(1);
      $('#red-got').delay(2000).fadeOut(1000);
      $('#red-container').css('display','grid');
      bagItem.push('images/fabric.png')
      redGot = true;
      if(isPlaying == true){
        document.getElementById('get-sound').play();
      }
      $('#open-item').addClass('glow');
    } else if(tableStatus == true){
      $('#brown-got').fadeIn(1);
      $('#brown-got').delay(2000).fadeOut(1000);
      $('#brown-container').css('display','grid');
      bagItem.push('./images/coffee.png')
      brownGot = true;
      if(isPlaying == true){
        document.getElementById('get-sound').play();
      }
      $('#open-item').addClass('glow');
    } else if(deskStatus == true){
      $('#purple-got').fadeIn(1);
      $('#purple-got').delay(2000).fadeOut(1000);
      $('#purple-container').css('display','grid');
      bagItem.push('./images/cuicuit.png')
      purpleGot = true;
      if(isPlaying == true){
        document.getElementById('get-sound').play();
      }
      $('#open-item').addClass('glow');
    } else if(carpetStatus == true){
      $('#green-got').fadeIn(1);
      $('#green-got').delay(2000).fadeOut(1000);
      $('#green-container').css('display','grid');
      bagItem.push('./images/leaves.png')
      greenGot = true;
      if(isPlaying == true){
        document.getElementById('get-sound').play();
      }
      $('#open-item').addClass('glow');
    } else if (desk2Status == true){
      diaryOpened = true;
      $('#diary').fadeIn(1);
      $('#container').addClass('filter');
    } else if (bearStatus == true) {
      $('#key1').fadeIn(1);
      $('#key1').delay(3000).fadeOut(1000);
      $('#key-container').css('display','grid');
      $('#intro3').fadeIn(1);
      $('#container').addClass('filter');
      $('#bear').attr('src','./images/bear2.png')
      $('#bear').css('width','160px');
      keyGot = true;
      if(isPlaying == true){
        document.getElementById('get-sound').play();
      }
      $('#open-item').addClass('glow');
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
  $('#open-item').removeClass('glow');
})

//close overlays through enter key
$('#girl-1').css('display','block');
$('#girl-6').css('display','block');
var oneClosed = false, it3 = false;
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
    // diary
    } else if($('#diary').css('display') == 'block'){
        $('#diary').fadeOut(1);
        $('#container').removeClass('filter');
        console.log('12');
    //intro
    } else if($('#girl-1').css('display') == 'block' && knifeGot == false){
      $('#girl-1').fadeOut(1);
      $('#girl-2').css('display','block');
      document.getElementById('myAudio').play();
      console.log('1');
    } else if($('#girl-1').css('display') == 'none' && $('#girl-2').css('display') == 'block' && knifeGot == false){
      $('#girl-2').fadeOut(1);
      $('#girl-3').css('display','block');
      console.log('2');
    } else if($('#girl-2').css('display') == 'none' && $('#girl-3').css('display') == 'block' && knifeGot == false){
      $('#girl-3').fadeOut(1);
      $('#boy-1').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-boy.png');
      console.log('3');
    } else if($('#boy-1').css('display') == 'none' && $('#girl-4').css('display') == 'block' && knifeGot == false){
      $('#girl-4').fadeOut(1);
      $('#boy-2').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-boy.png');
      console.log('4');
    } else if($('#boy-3').css('display') == 'none' && $('#girl-5').css('display') == 'block' && oneClosed == false && $('#intro2').css('display') == 'none' && knifeGot == false){
      $('#it1').fadeOut(1);
      $('#girl-5').css('display') == 'none';
      $('#container').removeClass('filter');
      $('#boy').attr('src','./images/boy2.png');
      $("#boy").animate({left: '950px'},4000);
      $('#it2').delay(4000).fadeIn(1);
      setTimeout(function(){$('#container').addClass('filter');$("#boy").css('display','none');},4000);
      oneClosed = true;
      console.log('5');
    } else if(oneClosed == true && $('#girl-7').css('display') == 'none' && $('#intro2').css('display') == 'none' && knifeGot == false){
      $('#girl-6').fadeOut(1);
      $('#girl-7').css('display', 'block');
      console.log('6');
    } else if($('#girl-7').css('display') == 'block' && $('#girl-6').css('display') == 'none' && knifeGot == false && $('#intro2').css('display') == 'none' && knifeGot == false){
      $('#intro').fadeOut(1);
      $('#container').addClass('filter');
      $('#instruction').fadeIn(1);
      startGame = true;
      $('#menu').fadeIn(1);
      console.log('7');
    } else if($('#girl-3').css('display') == 'none' && $('#boy-1').css('display') == 'block' && knifeGot == false){
      $('#boy-1').fadeOut(1);
      $('#girl-4').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
      console.log('8');
    } else if($('#girl-4').css('display') == 'none' && $('#boy-2').css('display') == 'block' && knifeGot == false){
      $('#boy-2').fadeOut(1);
      $('#boy-3').css('display','block');
      console.log('9');
    } else if($('#boy-2').css('display') == 'none' && $('#boy-3').css('display') == 'block' && knifeGot == false){
      $('#boy-3').fadeOut(1);
      $('#girl-5').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
      console.log('10');
    } else if($('#intro2').css('display') == 'block' && knifeGot == true && desk2Status == false && $('#diary').css('display') == 'none') {
      $('#intro2').fadeOut(1);
      $('#container').removeClass('filter');
      it3 = true
      console.log('11');
    } else if(it3 == true){
      $('#intro3').fadeOut(1);
      $('#container').removeClass('filter');
    }

  }
})

var northRight = false,
westRight = false,
southRight = false,
eastRight = false,
lockOpen = false;

//puzzle
var qCount = 0, wCount = 0, eCount = 0, rCount = 0;
$(document).on('keypress',function(e) {
  //q west
  if(e.which == 113) {
    var itemNumber = bagItem.length;
    qCount++;
    var qInt = qCount % itemNumber;
    var imgQ = document.getElementById('westimg');
    imgQ.src = bagItem[qInt];
    var splitted = imgQ.src.split('images/')[1];
    if(splitted == 'fabric.png'){
      westRight = true;
    } else {westRight = false}
    if(northRight == true && westRight == true && eastRight == true && southRight == true) {
      lockOpen = true;
      $('#puzzle').fadeOut(1);
      document.getElementById('chest').play();
      $('#container').removeClass('filter');
      $('#puzzle-solved').fadeIn(1);
      $('#puzzle-solved').delay(1000).fadeOut(1000);
      $('#locker').attr('src','./images/opened.png')
    } else {lockOpen = false}
    console.log(westRight);
  //w north
  } else if(e.which == 119){
    var itemNumber = bagItem.length;
    wCount++;
    var wInt = wCount % itemNumber;
    var imgW = document.getElementById('northimg');
    imgW.src = bagItem[wInt];
    var splitted = imgW.src.split('images/')[1];
    if(splitted == 'cuicuit.png'){
      northRight = true;
    } else {northRight = false}
    if(northRight == true && westRight == true && eastRight == true && southRight == true) {
      lockOpen = true;
      $('#puzzle').fadeOut(1);
      document.getElementById('chest').play();
      $('#container').removeClass('filter');
      $('#puzzle-solved').fadeIn(1);
      $('#puzzle-solved').delay(1000).fadeOut(1000);
      $('#locker').attr('src','./images/opened.png')
    } else {lockOpen = false}
    console.log(northRight);
  //e east
  } else if(e.which == 101){
    var itemNumber = bagItem.length;
    eCount++;
    var eInt = eCount % itemNumber;
    var imgE = document.getElementById('eastimg');
    imgE.src = bagItem[eInt];
    var splitted = imgE.src.split('images/')[1];
    if(splitted == 'coffee.png'){
      eastRight = true;
    } else {eastRight = false}
    if(northRight == true && westRight == true && eastRight == true && southRight == true) {
      lockOpen = true;
      $('#puzzle').fadeOut(1);
      document.getElementById('chest').play();
      $('#container').removeClass('filter');
      $('#puzzle-solved').fadeIn(1);
      $('#puzzle-solved').delay(1000).fadeOut(1000);
      $('#locker').attr('src','./images/opened.png')
    } else {lockOpen = false}
    console.log(eastRight);
  //r south
  } else if(e.which == 114){
    var itemNumber = bagItem.length;
    rCount++;
    var rInt = rCount % itemNumber;
    var imgR = document.getElementById('southimg');
    imgR.src = bagItem[rInt];
    var splitted = imgR.src.split('images/')[1];
    if(splitted == 'leaves.png'){
      southRight = true;
    } else {southRight = false}
    if(northRight == true && westRight == true && eastRight == true && southRight == true) {
      lockOpen = true;
      $('#puzzle').fadeOut(1);
      document.getElementById('chest').play();
      $('#container').removeClass('filter');
      $('#puzzle-solved').fadeIn(1);
      $('#puzzle-solved').delay(1000).fadeOut(1000);
      $('#locker').attr('src','./images/opened.png')
    } else {lockOpen = false}
    console.log(southRight);
  }
})

$(document).on('keypress',function(e) {
  //y
  if(e.which == 121 && $('#intro4').css('display') == 'block') {
    location.href = './ending1.html';
  }
  if(e.which == 110 && $('#intro4').css('display') == 'block'){
    location.href = './ending2.html';
  }
})

