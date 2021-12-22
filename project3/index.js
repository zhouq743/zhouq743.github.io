var streetWidth = $('#street-img').width(), streetHeight = $('#street-img').height(),gameOver = false,girlTalked = false,girlSaved = false;
var boyWidth = $('#boy2').width(), boyHeight = $('#boy2').height(),startGame = false
$('#street-container').css({'width':streetWidth,'height':streetHeight});
function diffrence (a, b) {
  return Math.abs(a - b); 
}
var intro1 = true, intro2 = intro3 =introdone= false;
numberKeys = [48,49,50,51,52,53,54,55,56,57]
var fill1=fill2=fill3=fill4 = false

zombie = $('#zombie');
var zomWidth = $('#zombie').width(),zomHeight = $('#zombie').height();
zombie.attr('src','./images/zombie.png');

$('#open-in').click(function(){
  $('#instruction').fadeIn(1,0);
  $('.container').addClass('filter');
})
var leftvalues = [],topvalues = [],widthvalues = [],heightvalues = [],rightvalues=[],bottomvalues=[],tooldict={};
$('.reference-box').each(function(){
  var lefts = Math.round($(this).position().left), tops = Math.round($(this).position().top), widths = Math.round($(this).width()), heights = Math.round($(this).height());
  leftvalues.push(lefts);
  topvalues.push(tops);
  widthvalues.push(widths);
  heightvalues.push(heights);
  $(this).after('<blockquote class="f">F</blockquote>')
})
$.each($('blockquote'),function(k,v){
  $('blockquote').eq(k).attr('id','fkey-'+k)
})
$.each(leftvalues,function(i,v){
  var xarea = widthvalues[i] + leftvalues[i], yarea = heightvalues[i] + topvalues[i];
  rightvalues.push(xarea);
  bottomvalues.push(yarea);
  window['toolshopstate' + i] = false;
})
setInterval(function(){
  var boyX = $('#boy2').position().left, boyY = $('#boy2').position().top;
  $.each(leftvalues,function(i,v){
    if (boyX >= leftvalues[i]-boyWidth && boyX <= rightvalues[i] && boyY >= topvalues[i]-boyHeight && boyY <= bottomvalues[i]){
      $('#fkey-'+i).css('display','block');
      window['toolshopstate' + i] = true;
    } else {
      $('#fkey-'+i).css('display','none');
      window['toolshopstate' + i] = false;
    }
  })
},20)
$('#fkey-4').css('opacity','0')
function showdialogbear (){
  $('#bear-conv').css('display','flex');
  $('.container').addClass('filter');
}
function showdialogtear (){
  $('#girl-conv').css('display','flex');
  $('.container').addClass('filter');
}
function hidedialog (){
  var test = $('.dialog-container');var test2=[];
  test.each(function(i,v){
    test.css('display',"none")
  })
  $('.container').removeClass('filter');
}

var pressed = {},press = 0;
var breadGot=weaponGot=heartGot=coffinOpen=tearGot=ladderGot=sword1Got=sword2Got=sword3Got=sword4Got=sword1status=sword2status=sword3status=sword4status=closeStatus=bearStatus=bearStatus2=girlStatus=girlStatus2=girlStatus3=girlStatus4=girlStatus5=girlStatus6 = false;
var bearDone = false,signopened=false
window.onkeypress=function(e) {
  // console.log(e)
  //f
  if(e.which == 102) {
    if (toolshopstate0 == true && weaponGot == false) {
        weaponGot = true;
        $('#chain-container').css('display','grid');
        $('#fkey-0').appendTo($('#trash'))
        $('#chain-card').addClass('fade-title');
        $('#weapon-box').fadeOut(1);
    } else if (toolshopstate1 == true && breadGot == false) {
        if(weaponGot==true) {
          breadGot = true;
          $('#bread-container').css('display','grid');
          $('#fkey-1').appendTo($('#trash'));
          $('#bread-card').addClass('fade-title');
        } else {
          showdialogbear();
          closeStatus = true;
          $('#speaking-img').attr('src','./images/dialog-boy.png')
          $('#dialog-text').html('The lock is broken. I gotta find something to smash it')
        } 
    } else if (toolshopstate2 == true && heartGot == false){
        $('#speaking-img').attr('src','./images/bear.png')
        $('#dialog-text').html('Everything comes at a price...')
        showdialogbear();
        if(breadGot==true) {
          bearStatus = true;
        } else {
          bearStatus = false;
        }
    } else if (toolshopstate3 == true && tearGot == false){
      girlTalked = true;
        showdialogtear();
        if(heartGot==true) {
          girlSaved = true;
          $('#mission3').css('color','green');
          $('#open-m').css('color','green');
          $('#speaking-img2').attr('src','./images/dialog-boy.png')
          $('#dialog-text2').html('who are you?')
          $('#heart-container').css('display','none');
          girlStatus = true
        } else {
          $('#speaking-img2').attr('src','./images/girl-conv.png')
          $('#dialog-text2').html('....... .... ...... ...... .............')
          girlStatus5 = true;
        }
    } else if (toolshopstate4 == true && ladderGot == false && coffinOpen == true){
        $('#keyboard').css('display','flex');
        $('.container').addClass('filter');
    } else if (toolshopstate5 == true && sword1Got == false){
      if ($('#coffin-box').attr('src') == './images/coffin.png'){
        coffinOpen = true
        if(isPlaying == true){
          document.getElementById('myAudio').pause();
          document.getElementById('zombie-sound').play();
        }
        $('#tool-shop-container').addClass('light')
        $('#coffin-box').attr('src','./images/coffin2.png')
        $('#sword1').fadeIn(1)
      } else {
        sword1Got = true
        $('#sword1-card').addClass('fade-title');
        $('#sword1-container').css('display','grid');
        $('#sword-piece1').fadeIn(1);
        swordcount = swordcount+1
        $('#fkey-5').appendTo('#trash');
        $('#sword1').appendTo('#trash');
      }
    } else if (toolshopstate6 == true){
        if(ladderGot == false){
          $('body').prepend('<h1 class="fade-title">i cannot get there</h1>')
        } else {
          $('#pipe-box').attr('src','./images/window2.png')
          $('#ladder').fadeIn(1);
          $('#boy2').attr('src','./images/boy4.png');
          $('body').prepend('<h1 class="fade-title">ted climbs into the hole</h1>')
          $('#tool-shop-container').delay(2000).fadeOut(1000)
          setTimeout(function(){window.location.href = "ending4.html";},3000)
        }
    } else if (toolshopstate7 == true){
      $('#tool-shop-container').fadeOut(1)
      $('#street-container').fadeIn(1)
      $('#boy2').appendTo('#street-container')
      $('#boy2').css('left','10%');
      $('#boy2').css('bottom','10px');
      console.log('1')
    } else if (toolshopstate8 == true){
      $('#street-container').fadeOut(1)
      $('#tool-shop-container').fadeIn(1);
      $('#mission3').css('display','block');
      $('#open-m').css('color','red');
      $('#boy2').appendTo('#tool-shop-container');
      $('#boy2').css('left','72%');
      $('#boy2').css('bottom','0px');
      var toolWidth = $('#tool-shop-img').width(), toolHeight = $('#tool-shop-img').height();
      $('#tool-shop-container').css({'width':toolWidth,'height':toolHeight});
      var posx = (Math.random() * (toolWidth - zomWidth)).toFixed();
      var posy = (Math.random() * (toolHeight - zomHeight)).toFixed();
      setInterval(function(){
        posx = (Math.random() * (toolWidth - zomWidth)).toFixed();
        posy = (Math.random() * (toolHeight - zomHeight)).toFixed();
      },1502)
      leftvalues.length = 0; topvalues.length = 0; widthvalues.length = 0; heightvalues.length = 0; rightvalues.length = 0; bottomvalues.length = 0;
      $('.reference-box').each(function(){
        var lefts = Math.round($(this).position().left), tops = Math.round($(this).position().top), widths = Math.round($(this).width()), heights = Math.round($(this).height());
        leftvalues.push(lefts);
        topvalues.push(tops);
        widthvalues.push(widths);
        heightvalues.push(heights);
      })
      $.each(leftvalues,function(i,v){
        var xarea = widthvalues[i] + leftvalues[i], yarea = heightvalues[i] + topvalues[i];
        rightvalues.push(xarea);
        bottomvalues.push(yarea);
        window['toolshopstate' + i] = false;
      })
      setInterval(function(){
        if(coffinOpen == true) {
          zombie.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
          });
          zombie.appendTo('#tool-shop-container').delay(1000).fadeIn(1).delay(500).fadeOut(1);
        }
      },1502);
      setInterval(function(){
        boyx = parseInt(box.css('left'),10);
        boyy = parseInt(box.css('top'),10);
        if(diffrence(boyx,posx)<= 40 && diffrence(boyy,posy) <= 80 && coffinOpen == true && $('#tool-shop-container').css('display') == 'block' && hardmode == true){
          gameOver = true;
          $('#time-conv').css('display','flex');
          $('.container').addClass('filter');
          $('#dialog-text5').html("Angelina, I...")
          $('#boy2').attr('src','./images/dead.png')
          $('#boy2').css('width','7.5vw')
          $('#speaking-img5').attr('src','./images/time2.png')
          $('.container').delay(3000).fadeOut(1000)
          setTimeout(function(){window.location.href = "ending0.html";},5000)
          // $('#zombie-card').css('opacity','1');
        }
      },20)
    } else if (toolshopstate9 == true) {
      if(swordcount < 1.5){
        $('#dessert-conv').css('display','flex');
        $('#mission2').css('display','block');
        $('#open-m').css('color','red');
        $('#puzzle').css('display','grid');
        $('.container').addClass('filter');
        closeStatus = true
      } else if (swordcount == 2){
        if(girlSaved == true){
          window.location.href = 'ending1.html';
        } else {
          window.location.href = 'ending0.html';
        }
      } else if (swordcount == 3){
        if(girlSaved == true){
          window.location.href = 'ending2.html';
        } else {
          window.location.href = 'ending0.html';
        }
      } else if (swordcount == 4){
        window.location.href = 'ending3.html';
      }
    } else if (toolshopstate10 == true && signopened == false){
      $('#sign-sign').css('display','flex')
      signopened = true
      sword4status = true
    } else if (sword3status == true && sword3Got == false) {
      sword3Got = true
      swordcount = swordcount+1
      $('#sword-piece3').fadeIn(1);
      $('#sword3-card').addClass('fade-title');
      $('#sword3-container').css('display','grid');
      $('#sword-f-1').appendTo('#trash');
      $('#sword3').appendTo('#trash');
    } else if (sword4status == true && sword4Got == false && $('#sign-sign').css('display') == 'flex' && $('#street-container').css('display') == 'block'){
      swordcount = swordcount+1;
      sword4Got = true
      $('#sword-piece4').fadeIn(1);
      $('#sword4-card').addClass('fade-title');
      $('#sword4-container').css('display','grid');
      $('#sword-f-4').appendTo('#trash');
      $('#accidant').attr('src','./images/accidant.png')
    }
  } else if (e.which == 113) {
    // bag
    if ($('#my-bag').css('display') == 'none') {
      $('.container').addClass('filter');
      $('#my-bag').css('display','flex')
    } else {
      $('#my-bag').css('display','none');
      $('.container').removeClass('filter');
    }
  } else if (e.which == 109) {
    // mission
    if ($('#mission-card').css('display') == 'none') {
      $('#open-m').css('color','white');
      $('.container').addClass('filter');
      $('#mission-card').css('display','flex')
    } else {
      $('#mission-card').css('display','none');
      $('.container').removeClass('filter');
    }
  } else if (e.which == 13) {
    var opened=false;
    test = $('.dialog-container')
    for (let i=0;i<test.length;i++){
      if(test[i].style.display == 'flex'){
        opened = true;
        break;
      }
    }
    if (gameOver == true) {
      window.location.reload();
    }
    //intro
    if (intro1 == true && introdone == false && agepath == true){
      intro1 = false;
      $('#dialog-text3').html('Some day you’ll understand. It’s all for you and me. we can be together here forever')
      intro2 = true
      console.log('re')
    } else if (intro2 == true && intro3 == false && introdone == false) {
      $('#dialog-text3').html('now I need to find some food for her.')
      intro3 = true
      console.log('we')
    } else if (intro3 == true && introdone == false){
      closeStatus = true;
      setTimeout(function(){$('#instruction').css('display','block');},500)
      console.log('te')
      introdone = true;
      startGame = true
    }
    if ($('#my-bag').css('display') == 'flex') {
      $('#my-bag').css('display','none');
      $('.container').removeClass('filter');
    } else if ($('#mission-card').css('display') == 'flex') {
      $('#mission-card').css('display','none');
      $('.container').removeClass('filter');
    } else if ($('#instruction').css('display') == 'block'){
      $('.container').removeClass('filter');
      $('#instruction').css('display','none');
      console.log('inst close')
    } else if($('#sign-sign').css('display') == 'flex'){
      $('#sign-sign').fadeOut(1)
      signopened = false
    }
     else if ($('#keyboard').css('display') == 'flex'){
      $('.container').removeClass('filter');
      $('#keyboard').css('display','none');
    } else if (opened == true && closeStatus == true){
      hidedialog();
      closeStatus = false;
      console.log('0')
    } else if (bearStatus == false && $('#bear-conv').css('display') == 'flex'){
      $('#dialog-text').html('Teddy bear is hungry...he wants some carbs...')
      closeStatus = true
      console.log('1')
    } else if (bearStatus == true && bearStatus2 == false && bearDone == false){
      $('#dialog-text').html('Tha..Thank you so much for your bread. but I...I have nothing valueble for you')
      bearStatus2 = true;
      console.log('2')
    } else if (bearStatus2 == true){
      $('#dialog-text').html('Here it is...that is all i have');
      bearStatus2 = false;
      bearDone = true;
      coffinOpen = true;
      if(isPlaying == true){
        document.getElementById('myAudio').pause();
        document.getElementById('zombie-sound').play();
      }
      heartGot = true;
      $('#sword1').fadeIn(1)
      setTimeout(function(){$('#tool-shop-container').addClass('light')},3700)
      $('#coffin-box').attr('src','./images/coffin2.png')
      $('#heart-container').css('display','grid');
      $('#bread-container').css('display','none');
      $('#fkey-2').appendTo($('#trash'));
      $('#heart-card').addClass('fade-title');
      $('#bear-box').attr('src','./images/bear2.png');
      $('#fox').fadeOut(1)
      closeStatus = true;
      $('#fkey-4').css('opacity','1')
      console.log('3')
    }else if($('#girl-conv').css('display') == 'flex' && girlStatus == false){
      $('#speaking-img2').attr('src','./images/dialog-boy.png')
      $('#dialog-text2').html('how familiar she is. what is missing from her?')
      closeStatus = true;
      console.log('4')
    } else if (girlStatus == true && girlStatus2 == false && bearDone == true){
      $('#speaking-img2').attr('src','./images/girl-conv2.png')
      $('#dialog-text2').html('Ted i am angel. how can you forget me?')
      girlStatus2 = true;
      console.log('5')
    } else if (girlStatus2 == true && girlStatus3 == false){
      $('#dialog-text2').html('i am sorry. i know someone who looks like you. she is my girlfriend.')
      girlStatus3 = true;
      $('#speaking-img2').attr('src','./images/dialog-boy.png')
      console.log('6')
    } else if (girlStatus3 == true && girlStatus4 == false){
      $('#dialog-text2').html('How does that have anything to do with me? here is not where you belong. you better leave this world.')
      girlStatus4 = true;
      $('#speaking-img2').attr('src','./images/girl-conv2.png')
      $('#head-box').fadeOut(1);
      $('#fkey-3').appendTo($('#trash'))
      closeStatus = true;
      $('#potion-container').css('display','grid');
      $('#tear-card').addClass('fade-title');
      console.log('7')
    }
  } else if (jQuery.inArray(e.which,numberKeys) !== -1) {
    if(fill1 == false){
      $('#digit1').html(e.key)
      fill1 = true
    } else if (fill2 == false){
      $('#digit2').html(e.key)
      fill2 = true
    } else if (fill3 == false){
      $('#digit3').html(e.key)
      fill3 = true
    } else if (fill4 == false){
      $('#digit4').html(e.key)
      if ($('#digit1').html() == '1' && $('#digit2').html() == '0' && $('#digit3').html() == '1' && $('#digit4').html() == '0'){
        fill1=fill2=fill3=fill4=true;
        setTimeout(function(){
          $('.container').removeClass('filter');
          $('#keyboard').css('display','none');
          ladderGot = true;
          $('#ladder-container').css('display','grid');
          $('#fkey-4').appendTo($('#trash'))
          $('#ladder-card').addClass('fade-title');
        },500)
        $('.digit').css('color','yellow')
      } else {
        setTimeout(function(){
          fill1=fill2=fill3=fill4=false;
          $('.digit').html('&nbsp;')
        },500)
      }
    }
  }
}
$('#potion-container').click(function(){
  $('#sword2-container').css('display','grid')
  $('#potion-container').css('display','none')
  $('body').prepend('<h1 id="sword2-got" class="fade-title">Ted drinks the liquid</h1>')
  sword2Got = true;
  $('#sword-piece2').fadeIn(1);
  swordcount = swordcount+1
})
//move inside tool shop
var pane2 = $('#street-container')
    box = $('#boy2'),
    w2 = pane2.width() - box.width(),
    h2 = pane2.height() - box.height(),
    d = {},
    x = 3;

function newv3(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > w2 ? w2 : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    var pane = $('#tool-shop-container'),
    w = pane.width() - box.width(),
    h = pane.height() - box.height()
  function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
  }
  function newv2(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > h ? h : n;
  }
  if (gameOver == false && $('#tool-shop-container').css('display') == 'block'){
    if (startGame == true){
      box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv2(v, 38, 40); }
      });
    }
  } else if (gameOver == false && $('#street-container').css('display') == 'block'){
    if (startGame == true){
      box.css({
        left: function(i,v) { return newv3(v, 37, 39); },
      });
    }
  }
}, 20);
document.onkeydown = checkKey;
function checkKey(e) {
  if (startGame == true){
    e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
      $('#boy2').attr('src','./images/boy4.png');
      $('#boy2').css('width','4.5vw')
    }
    else if (e.keyCode == '40') {
      // down arrow
      $('#boy2').attr('src','./images/boy.png');
      if (timercount==3){
        $('#boy2').attr('src','./images/boy-blood0.png');
      } else if (timercount > 3){
        $('#boy2').attr('src','./images/boy-blood.png');
      }
      $('#boy2').css('width','4.5vw')
    }
    else if (e.keyCode == '37') {
      $('#boy2').attr('src','./images/boy3.png');
      $('#boy2').css('width','4vw')
       // left arrow
    }
    else if (e.keyCode == '39') {
      $('#boy2').attr('src','./images/boy2.png');
      $('#boy2').css('width','4vw')
       // right arrow
    }
  }
}
setInterval(function(){
  if(sword1Got == true && sword2Got==true&& sword3Got==true&& sword4Got==true){
    $('#sword-container').css('display','grid');
    $('#sword1-container').css('display','none');
    $('#sword2-container').css('display','none');
    $('#sword3-container').css('display','none');
    $('#sword4-container').css('display','none');
    $('#mission2').css('color','green');
    $('#open-m').css('color','green');
  }
  if (toolshopstate8 == true){
    $('#tool-sign').css('display','flex')
  } else {
    $('#tool-sign').css('display','none')
  }
  if (toolshopstate9 == true){
    $('#cookie-sign').css('display','flex')
  } else {
    $('#cookie-sign').css('display','none')
  }
  if (toolshopstate11 == true){
    $('#office-sign').css('display','flex')
  } else {
    $('#office-sign').css('display','none')
  }
  boyx = parseInt(box.css('left'),10);
  boyy = parseInt(box.css('top'),10);
  var toolWidth = parseInt($('#tool-shop-img').width(),10), toolHeight = parseInt($('#tool-shop-img').height(),10);
  
  if($('#tool-shop-container').css('display')=='block'){
    var bloodleft = toolWidth*0.1,bloodright = toolWidth*0.3,bloodtop = toolHeight*0.28,bloodbottom = toolHeight*0.55;
    window.onkeydown = function(e) {
      if ( pressed[e.which] ) return;
      pressed[e.which] = e.timeStamp;
    };  
    window.onkeyup = function(e) {
      if ( !pressed[e.which] ) return;
      var duration = ( e.timeStamp - pressed[e.which] ) / 1000;
      pressed[e.which] = 0;
      whatKey.push(e.which);
      durations.push(duration)
    }
    if(boyy > bloodtop && boyy < bloodbottom && boyx > bloodleft && boyx < bloodright){
      console.log(boyy,boyx,bloodleft,bloodright,bloodtop,bloodbottom,testa)
    } else { durations.length=0 }
          testa=0
          for (let i=0; i<durations.length; i++) {
            testa = testa+durations[i]  
          }
          if(testa<=1){
            $('#blood').css('opacity','1')
          } else if (testa>1 && testa<2){
            $('#blood').css('opacity','.8')
          } else if(testa>2 && testa<3.5){
            $('#blood').css('opacity','.6')
          } else if(testa>3.5 && testa<5){
            $('#blood').css('opacity','.4')
          } else if(testa>5 && testa<7){
            $('#blood').css('opacity','.2')
          } else if(testa>7){
            $('#blood').css('opacity','0')
            $('#blood').appendTo('#trash')
            $('#sword3').fadeIn(1);
            $('#sword-f-1').css('display','block');
            sword3status = true
          }
  }
},20)
var pressed = {}, whatKey = [],durations = [],testa=0, hardmode = false,swordcount = 0,timercount=0;

var agepath = false;
$('#age-17n').click(function(){
  $('#age span').fadeIn(1)
  $('#age p').each(function(){$(this).fadeOut(1)})
})
$('#age-17').click(function(){
  agepath = true
  $('#age').fadeOut(1)
  $('#intro-conv').css('display','flex')
  document.getElementById('myAudio').play();
  setInterval(function() {
    var opened=false;
      test = $('.dialog-container')
      for (let i=0;i<test.length;i++){
        if(test[i].style.display == 'flex'){
          opened = true;
          break;
        }
      }
      if (timercount == 0){
        timercount = 1
      } else if (timercount == 1){
        timercount = 2
      } else if (timercount == 2) {
        timercount = 3
      } else if (timercount == 3) {
        timercount = 4
      } else if (timercount == 4) {
        timercount = 5
      } else if (timercount == 5) {
        timercount = 6
      }
    if(opened == false){
      $('#time-conv').css('display','flex');
      $('.container').addClass('filter');
      closeStatus = true;
      if (timercount == 1){
        $('#dialog-text5').html("I have to be quick. I can't leave angelina alone for so long.<br><span>Time remaining: 4 min</span>")
      } else if (timercount == 2){
        $('#dialog-text5').html('I miss those old days when she baked me cookies, but we can never go back.<br><span>Time remaining: 3 min</span>')
      } else if (timercount == 3) {
        $('#speaking-img5').attr('src','./images/time1.png')
        x = 2.5;
        $('#dialog-text5').html("Even fragmented weapon can give me power. I'm invincible in this world <br><span>Time remaining: 2 min</span>")
      } else if (timercount == 4) {
        $('#speaking-img5').attr('src','./images/time2.png')
        x = 1.5;
        $('#dialog-text5').html("ahh, my head hurts...I need some rest as soon as possible. be quick! <br><span>Time remaining: 1 min</span>")
      } else if (timercount == 5) {
        $('#dialog-text5').html("Angelina, I...")
        startGame = false;
        $('#boy2').attr('src','./images/dead.png')
        $('#boy2').css('width','7.5vw')
        $('#speaking-img5').attr('src','./images/time2.png')
        $('.container').delay(3000).fadeOut(1000)
        setTimeout(function(){window.location.href = "ending0.html";},5000)
      } else if (timercount == 6){
        $('#time-conv').appendTo($('#trash'))
        $('.container').removeClass('filter');
      }
    } 
  }, 62000); 
})

var isPlaying = true;
$('#sound').click(function(){
  if(isPlaying == true){
    if(coffinOpen == false){
      document.getElementById('myAudio').pause();
    } else {
      document.getElementById('zombie-sound').pause();
    }
    $(this).attr('src','./images/soundoff.png')
    isPlaying = false;
  } else {
    if(coffinOpen == false){
      document.getElementById('myAudio').play();
    } else {
      document.getElementById('zombie-sound').play();
    }
    isPlaying = true;
    $(this).attr('src','./images/soundon.png')
  }
});