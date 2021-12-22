var streetWidth = $('#dessert-img').width(), streetHeight = $('#dessert-img').height(),gameOver = false;

$('#dessert-container').css({'width':streetWidth,'height':streetHeight});

setTimeout(function(){
  $("#boy").attr('src','./images/with-sword2.png')
  $("#boy").css({width:'9%'})
  $("#boy").animate({bottom: "30%",left:'86%'},1000);
},500)

setTimeout(function(){
  $("#boy").attr('src','./images/boy4.png')
  $("#boy").css({width:'7%'})
  $("#ghost").attr('src','./images/angel.png')
  $("#ghost").css({width:'7%',right:'5%',top:'45%'})
  $("#boy").animate({bottom: "25%",left:'90%'},500);
  $('#blood1').delay(500).fadeIn(1);
  $('#blood1').delay(600).fadeOut(1);
  $('#blood').delay(900).fadeIn(400);
},1500)

setTimeout(function(){
  $('#dessert-container').addClass('filter');
  $("#intro-conv").css('display','flex');
},2800)

function changepic(){
  if ($('#speaking-img3').attr('src') == './images/dialog-boy.png'){
    $('#speaking-img3').attr('src','./images/angel-conv.png')
  } else if ($('#speaking-img3').attr('src') == './images/angel-conv.png' || $('#speaking-img3').attr('src') == './images/angel-conv2.png'){
    $('#speaking-img3').attr('src','./images/dialog-boy.png')
  }
}

function changepic2(){
  if ($('#speaking-img4').attr('src') == './images/doctor1.png'){
    $('#speaking-img4').attr('src','./images/doctor2.png')
  } else if ($('#speaking-img4').attr('src') == './images/doctor2.png'){
    $('#speaking-img4').attr('src','./images/doctor1.png')
  }
}

var closeStatus = false;
var convstep = 0
window.onkeypress=function(e) {
  if(e.which == 13) {
    if ($("#intro-conv").css('display') == 'flex'){
      if(convstep == 0){
        convstep = 1
        changepic();
        document.getElementById('myAudio').play();
        $('#dialog-text3').html("ted! it's you killed all of us! i'll never forgive you")
      } else if (convstep == 1) {
        convstep = 2
        $('#speaking-img3').attr('src','./images/angel-conv2.png')
        $('#dialog-text3').html("you are the most selfish man i've ever seen. why you're the only one still alive...")
      } else if (convstep == 2) {
        convstep = 3
        changepic()
        $('#dialog-text3').html("i'm sorry, angelina...")
      } else if (convstep == 3) {
        convstep = 4
        changepic()
        $('#dialog-text3').html("my name is angel!!!")
      } else if (convstep == 4) {
        convstep = 5
        changepic()
        $('#dialog-text3').html("i'm sorry. i had no time. my girlfriend angelina was still waiting for me.")
      } else if (convstep == 5) {
        convstep = 6
        changepic()
        $('#dialog-text3').html("eh. another excuse? you're a liar like always!")
      } else if (convstep == 6) {
        convstep = 7
        $('#dialog-text3').html("And your girlfriend is angelina eh? that bitch was dead long time ago. you'll never see her again.")
      } else if (convstep == 7) {
        convstep = 8
        $('#dialog-text3').html("you would love to go to the hell with her right? I'll do you a favor")
      } else if (convstep == 8) {
        convstep = 9
        $('#intro-conv').fadeOut(1)
        $('#dessert-container').addClass('light');
        $('#ghost').addClass('grow')
        setTimeout(function(){$("#ghost").attr('src','./images/with-empty.png')},4500)
        setTimeout(function(){
          $("#boy").attr('src','./images/boy.png')
          $("#boy").addClass('rotate')
          $("#boy").animate({bottom: "8%",left:'62%'},500)
        },5100)
        setTimeout(function(){
          $('#ghost').attr('src','./images/with-filled.png');
          $("#boy").fadeOut(1)
          $('#dessert-container').delay(500).fadeOut(1000);
        },5700)
        setTimeout(function(){
          $('html').css('background-color','white');
          $("#hospital-container").fadeIn(1000)
          if(isPlaying == true){
            document.getElementById('myAudio').pause();
            document.getElementById('hos-sound').play();
          }
          $('#sound').addClass('invert');
          $('#sound').css('border','3px solid black;')
          soundchange = true;
        },7000)
        setTimeout(function(){
          $('#hos-conv').css('display','flex');
          $("#hospital-container").addClass('filter')
        },8500)
      }
    } else if ($("#hos-conv").css('display') == 'flex'){
      if(convstep == 9){
        convstep = 10
        changepic2()
        $('#dialog-text4').html("oh. have you filled out the death certificate and informed his family?")
      } else if (convstep == 10){
        convstep = 11
        changepic2()
        $('#dialog-text4').html("no...I...")
      } else if (convstep == 11){
        convstep = 12
        changepic2()
        $('#dialog-text4').html("i know, i know. it's not your fault. that's how life works Zach. in icu, this happens all the time.")
      } else if (convstep == 12){
        convstep = 13
        changepic2()
        $('#dialog-text4').html("I mean they haven't find anything to identify him. Nor did his family come.")
      }else if (convstep == 13){
        convstep = 14
        changepic2()
        $('#dialog-text4').html("what about the woman who died in the same car accident?")
      } else if (convstep == 14){
        convstep = 15
        changepic2()
        $('#dialog-text4').html("she's been sent to a funeral parlor already.")
      } else if (convstep == 15){
        convstep = 16
        changepic2()
        $('#dialog-text4').html("our work still continues Zach. Go fill out these documents for me by the end of the day.")
      } else if (convstep == 16){
        convstep = 17
        changepic2()
        $('#dialog-text4').html("Okay mr. Kaysen. it's just...he looks so regretful. he didn't even close his eyes when he died.")
      } else if (convstep == 17){
        convstep = 18
        $('#speaking-img4').attr('src','./images/dialog-boy.png')
        $('#dialog-text4').html("ending 1/3 coward")
        $('#continues').html(">> return to play again")
      } else if(convstep == 18){
        window.location.href = 'index.html';
      }
    }
  }
}

var isPlaying = true,soundchange=false;
$('#sound').click(function(){
  if(isPlaying == true){
    if(soundchange == false){
      document.getElementById('myAudio').pause();
    } else {
      document.getElementById('hos-sound').pause();
    }
    $(this).attr('src','./images/soundoff.png')
    isPlaying = false;
  } else {
    if(soundchange == false){
      document.getElementById('myAudio').play();
    } else {
      document.getElementById('hos-sound').play();
    }
    isPlaying = true;
    $(this).attr('src','./images/soundon.png')
  }
});