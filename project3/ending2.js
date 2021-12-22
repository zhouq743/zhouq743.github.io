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
  $("#ghost").attr('src','./images/girl2.png')
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
    $('#speaking-img3').attr('src','./images/girl-conv-e.png')
  } else if ($('#speaking-img3').attr('src') == './images/girl-conv-e.png'){
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

var closeStatus = false
var convstep = 0
window.onkeypress=function(e) {
  if(e.which == 13) {
    if ($("#intro-conv").css('display') == 'flex'){
      if(convstep == 0){
        convstep = 1
        changepic();
        document.getElementById('myAudio').play();
        $('#dialog-text3').html("don't call me darlin. you've spent a long time alone with angel don't you?")
      } else if (convstep == 1) {
        convstep = 2
        changepic()
        $('#dialog-text3').html("no it's not what you think angelina. you always get angry at these small things.")
      } else if (convstep == 2) {
        convstep = 3
        $('#speaking-img3').attr('src','./images/girl-conv-e2.png')
        $('#dialog-text3').html("you still talk to me like this... even...")
      } else if (convstep == 3) {
        convstep = 4
        $('#speaking-img3').attr('src','./images/dialog-boy.png')
        $('#dialog-text3').html("no i didn't mean it. i never wanted to hurt you...")
      } else if (convstep == 4) {
        convstep = 5
        changepic()
        $('#dialog-text3').html("me neither... ted I'm sorry i thought you hated me.")
      } else if (convstep == 5) {
        convstep = 6
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("no of course not. i'm the one should apologize. I wish...i could die for you.")
      } else if (convstep == 6) {
        convstep = 7
        $('#speaking-img3').attr('src','./images/girl-conv-e2.png')
        $('#dialog-text3').html("don't say that ted. it is what it is. ")
      } else if (convstep == 7) {
        convstep = 8.1
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("angelina I still love you. i'll do whatever i can as long as we are together, as i promised")
      } else if (convstep == 8.1) {
        convstep = 8.2
        $('#speaking-img3').attr('src','./images/girl-conv-e2.png')
        $('#dialog-text3').html("don't be silly ted. it is too late. you should leave here and start a new life. ")
      } else if (convstep == 8.2) {
        convstep = 8.3
        $('#dialog-text3').html("i look so ugly right now. you'll hate me someday. i don't want that happens.")
      } else if (convstep == 8.3) {
        convstep = 8.4
        $('#dialog-text3').html("so just leave me now.")
      } else if (convstep == 8.4) {
        convstep = 8.5
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("no i'll protect you even the world is falling apart.")
      } else if (convstep == 8.5) {
        convstep = 8.6
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("i don't want to go back without you...")
      } else if (convstep == 8.6) {
        convstep = 9
        $('#intro-conv').fadeOut(1)
        $('#fight').fadeIn(1)
        setTimeout(function(){
          $('#fight').attr('src','./images/fight-scene2.png')
        },1001)
        setTimeout(function(){
          $('#fight').attr('src','./images/fight-scene3.png')
          $('#fight').delay(1000).fadeOut(1)
        },2002)
        $('#dessert-container').delay(3004).fadeOut(1000)
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
        },4000)
        setTimeout(function(){
          $('#hos-conv').css('display','flex');
          $("#hospital-container").addClass('filter')
        },4500)
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
        $('#dialog-text4').html("i know, i know. it's not your fault. that's how life works Zack. in icu, this happens all the time.")
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
        $('#dialog-text4').html("our work still continues Zack. Go fill out these documents for me by the end of the day.")
      } else if (convstep == 16){
        convstep = 17
        changepic2()
        $('#dialog-text4').html("Okay mr. Kaysen. he died with a smile. may he rest in peace")
      } else if (convstep == 17){
        convstep = 18
        $('#speaking-img4').attr('src','./images/dialog-boy.png')
        $('#dialog-text4').html("ending 2/3 penitent")
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
