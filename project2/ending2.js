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

//close overlays through enter key
$('#girl-1').css('display','block');
$('#girl-6').css('display','block');
$(document).on('keypress',function(e) {
  if(e.which == 13) {
    if($('#girl-1').css('display') == 'block'){
      $('#girl-1').fadeOut(1);
      $('#girl-2').css('display','block');
      console.log('0')
      document.getElementById('myAudio').play();
    } else if($('#girl-2').css('display') == 'block'){
      $('#girl-2').fadeOut(1);
      $('#fight').css('display','block');
    } else if($('#fight').css('display') == 'block'){
      $('#fight').css('display','none');
      $('#fight2').css('display','block');
    } else if($('#fight2').css('display') == 'block'){
      $('#fight2').css('display','none');
      $('#fight3').css('display','block');
    } else if($('#fight3').css('display') == 'block'){
      $('#fight3').css('display','none');
      $('#camp').css('display','block');
    } else if($('#camp').css('display') == 'block'){
      $('#camp').css('display','none');
      $('#girl-3').css('display','block');
    } else if($('#girl-3').css('display') == 'block'){
      $('#girl-3').css('display','none');
      $('#boy-1').css('display','block');
      $('#boy').css('display','block');
      $("#boy").animate({left: '710px'},1500);
      $('#profile-pic').attr('src','./images/dialog-boy.png');
    } else if($('#boy-1').css('display') == 'block'){
      $('#boy-1').css('display','none');
      $('#boy-2').css('display','block');
    } else if($('#boy-2').css('display') == 'block'){
      $('#boy-2').css('display','none');
      $('#girl-4').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
    } else if($('#girl-4').css('display') == 'block'){
      $('#girl-4').css('display','none');
      $('#boy-3').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-boy.png');
    } else if($('#boy-3').css('display') == 'block'){
      $('#boy-3').css('display','none');
      $('#girl-5').css('display','block');
      $('#profile-pic').attr('src','./images/dialog-girl.png');
    } else if($('#girl-5').css('display') == 'block'){
      location.href = './index.html';
    }
  }
})