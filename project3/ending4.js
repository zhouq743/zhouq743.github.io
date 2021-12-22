var toolWidth = $('#pipe-img').width(), toolHeight = $('#pipe-img').height();
var boyWidth = $('#boy2').width(), boyHeight = $('#boy2').height();
var rightP  = -toolWidth/5*4;
var stop1 = $( window ).width()*0.9
var c = document.getElementById("c");
var ctx = c.getContext("2d");
$('#pipe-container').css({'width':toolWidth,'height':toolHeight});

$('#open-in').click(function(){
  $('#instruction').fadeIn(1,0);
  $('.container').addClass('filter');
})
window.onkeypress=function(e) {
  if (e.which == 13 && $('#instruction').css('display') == 'block') {
    $('.container').removeClass('filter');
    $('#instruction').css('display','none');
  }
}

var pane = $('#pipe-container'),
    box = $('#boy2'),
    w = pane.width() - box.width(),
    h = pane.height() - box.height(),
    d = {},
    x1 = 1,
    x2 = 3,
    y = 5;
function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x1 : 0) + (d[b] ? x1 : 0);
    return n < 0 ? 0 : n > w ? w : n;
}
function newv3(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x2 : 0) + (d[b] ? x2 : 0);
  return n < 0 ? 0 : n > w ? w : n;
}
function newv2(v,a,b) {
  var n = parseInt(v, 10) + (d[a] ? y : 0) - (d[b] ? y : 0);
  return n;
}
$(window).keydown(function(e) {
  // document.getElementById('myAudio').play();
   d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
  leftP = $('#pipe-img').position().left
  boyX = $('#boy2').position().left
  if(leftP > rightP && leftP <= 0){
    box.css({
      left: function(i,v) { return newv(v, 37, 39); },
    });
    $('#pipe-img').css({
      left:function(i,v) {return newv2(v,37,39)}
    })
  } else
  // else if (leftP <= rightP){
  //   box.css({
  //     left: function(i,v) { return newv3(v, 37, 39); },
  //   });
  //   console.log('work')
  // }
  if (boyX = stop1) {
    $('#opin-in').css('display','none')
    $('#ufo').fadeIn(1);
    $('#boy').fadeIn(1);
    box.css({
      left: $( window ).width()*0.815,
    });
    $('#pipe-container').fadeOut(1000)
    setTimeout(function(){
      $('#ufo').attr('src','./images/ufo.png')
    },1000)
    setTimeout(function(){
      $('#boy').addClass('upp')
    },3000)
    setTimeout(function(){
      $('#boy').appendTo($('#trash'));
    },3800)
    setTimeout(function(){
      $('#ufo').addClass('ufo2');
      $('#ufo').css({left:'70%',top:'50%',transform:'translate(0%,-50%) scale(2)'})
    },4000)
    // $('#c').delay(6000).fadeOut(1000)
    $('#caption').delay(6000).fadeIn(1000);
    setTimeout(function(){
      $('#caption p').each(function(i){
        $(this).delay(2000*i).fadeIn(1)
      })          
    },6000)
  }
}, 20);
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
      $('#boy2').attr('src','./images/boy.png');
      $('#boy2').css('width','6vw')
    }
    else if (e.keyCode == '40') {
      // down arrow
      $('#boy2').attr('src','./images/boy.png');
      $('#boy2').css('width','6vw')
    }
    else if (e.keyCode == '37') {
      $('#boy2').attr('src','./images/boy3.png');
      $('#boy2').css('width','5.5vw')
       // left arrow
    }
    else if (e.keyCode == '39') {
      $('#boy2').attr('src','./images/boy2.png');
      $('#boy2').css('width','5.5vw')
       // right arrow
    }
}


c.style.display = 'block';
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//english characters
var english = "10qwqerpoiuytlkj;'/.,mnhgbvfdcsxaz-=[]\!#@$%^&()*";
//converting the string into an array of single characters
english = english.split("");

var font_size = 15;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
drops[x] = 1; 

//drawing the characters
function draw()
{
//Black BG for the canvas
//translucent BG to show trail
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = "#0F0"; //green text
ctx.font = font_size + "px arial";
//looping over drops
for(var i = 0; i < drops.length; i++)
{
  //a random chinese character to print
  var text = english[Math.floor(Math.random()*english.length)];
  //x = i*font_size, y = value of drops[i]*font_size
  ctx.fillText(text, i*font_size, drops[i]*font_size);
  
  //sending the drop back to the top randomly after it has crossed the screen
  //adding a randomness to the reset to make the drops scattered on the Y axis
  if(drops[i]*font_size > c.height && Math.random() > 0.975)
    drops[i] = 0;
  
  //incrementing Y coordinate
  drops[i]++;
}
}

setInterval(draw, 33);

var isPlaying = true;
if(isPlaying == true){
  document.getElementById('myAudio').play();
}
$('#sound').click(function(){
  if(isPlaying == true){
      document.getElementById('myAudio').pause();
    $(this).attr('src','./images/soundoff.png')
    isPlaying = false;
  } else {
      document.getElementById('myAudio').play();
    isPlaying = true;
    $(this).attr('src','./images/soundon.png')
  }
});