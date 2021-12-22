var streetWidth = $('#dessert-img').width(), streetHeight = $('#dessert-img').height(),gameOver = false;

$('#dessert-container').css({'width':streetWidth,'height':streetHeight});

setTimeout(function(){
  $("#boy").attr('src','./images/with-sword.png')
  $("#boy").css({width:'9%'})
  $("#boy").animate({bottom: "30%",left:'86%'},1000);
},500)

setTimeout(function(){
  // $("#boy").attr('src','./images/boy4.png')
  $("#ghost").attr('src','./images/girl.png')
  $("#ghost").css({width:'7%',right:'5%',top:'45%'})
  $("#boy").animate({bottom: "25%",left:'90%'},500);
},1500)

setTimeout(function(){
  $('#dessert-container').addClass('filter');
  $("#intro-conv").css('display','flex');
},2800)

function changepic(){
  if ($('#speaking-img3').attr('src') == './images/dialog-boy.png'){
    $('#speaking-img3').attr('src','./images/dialog-girl.png')
  } else if ($('#speaking-img3').attr('src') == './images/dialog-girl.png' || $('#speaking-img3').attr('src') == './images/angel-conv2.png'){
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
        $('#dialog-text3').html("ted where did you go? i..i...i miss you")
      } else if (convstep == 1) {
        convstep = 2
        changepic();
        $("#boy").animate({bottom: "34%",left:'88%'},500);
        $('#dialog-text3').html("i'll never leave you again darlin")
      } else if (convstep == 2) {
        convstep = 3
        changepic()
        $("#ghost").animate({right:'15%'},500);
        $("#ghost").attr('src','./images/girlp.png')
        $("#ghost").css('z-index','100')
        $('#dialog-text3').html("no ted. it's too late. we can't go back any more.")
      } else if (convstep == 3) {
        convstep = 4
        $("#boy").attr('src','./images/with-sw.png')
        $("#boy").animate({left:'85%',bottom:'38.5%'},500);
        $("#boy").css({width:'9%'})
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("I'm sorry angelina. I wish...i could die for you.")
      } else if (convstep == 4) {
        convstep = 5
        $('#speaking-img3').attr('src','./images/dialog-girl.png')
        $('#dialog-text3').html("don't say that ted. it is what it is. you should leave and start a new life.")
      } else if (convstep == 5) {
        convstep = 6
        $('#dialog-text3').html("kill me. everything will ends. you'll be safe too")
      } else if (convstep == 6) {
        convstep = 7
        $('#speaking-img3').attr('src','./images/crying.png')
        $('#dialog-text3').html("no, no, nononono...i..")
      } else if (convstep == 7) {
        $('#dessert-container').removeClass('filter');
        $("#intro-conv").css('display','none');
        setTimeout(function(){
          $("#ghost").animate({right:'11%'},400);
          $('#blood1').delay(400).fadeIn(1)
          $('#blood1').delay(600).fadeOut(1)
          $('#blood').delay(600).fadeIn(1)
        },500)
        setTimeout(function(){
          $("#ghost").attr('src','./images/dead-girl.png')
          $("#boy").attr('src','./images/boy3.png')
          $("#boy").css({width:'7%',left:'86%'})
          $("#ghost").css({width:'17%',top:'49.5%'})
        },1600)
        setTimeout(function(){
          $('#dessert-container').addClass('filter');
          $("#intro-conv").css('display','flex');
          convstep = 8.1
        },2000)
        $('#speaking-img3').attr('src','./images/deadprofile.png')
        $('#dialog-text3').html("Ted that's the last thing i can give you")
      } else if (convstep == 8.1) {
        convstep = 8.2
        $('#dialog-text3').html("angelina, why do you leave me again?")
        $('#speaking-img3').attr('src','./images/crying.png')
      } else if (convstep == 8.2) {
      $('#intro-conv').fadeOut(1)
      $('#dessert-container').fadeOut(1000);
      $('html').css('background-color','white');
      $("#hospital-container").delay(500).fadeIn(1000);
      if(isPlaying == true){
        document.getElementById('myAudio').pause();
        document.getElementById('hos-sound').play();
      }
      $('#sound').addClass('invert');
      $('#sound').css('border','3px solid black;')
      soundchange = true;
      setTimeout(function(){
        var hosWidth = $('#clinic').width(), hosHeight = $('#clinic').height()
        $('#hospital-container').css({'width':hosWidth,'height':hosHeight});
      },1500)
      setTimeout(function(){
        $('#hos-conv').css('display','flex');
        $("#hospital-container").addClass('filter')
        convstep = 9
      },10000)
    }
  } else if ($("#hos-conv").css('display') == 'flex'){
      if(convstep == 9){
        convstep = 10
        changepic2()
        $('#dialog-text4').html("oh. that's great. you did a great job frank! Another life is saved.")
      } else if (convstep == 10){
        convstep = 11
        changepic2()
        $('#dialog-text4').html("I'll take him to the general ward...")
      } else if (convstep == 11){
        $("#hos-conv").css('opacity','0')
        $('#gif').delay(500).fadeIn(1)
        $('#gif').delay(4000).fadeOut(100)
        $('#hospital-container').removeClass('filter');
        setTimeout(function(){
          $("#hos-conv").css('opacity','1')
          $('#speaking-img4').attr('src','./images/crying.png')
          $('#hospital-container').addClass('filter');
          $('#dialog-text4').html("angelina...")
          convstep = 12
        },4100)
      } else if (convstep == 12){
        convstep = 13
        $("#hos-conv").css('opacity','0')
        $('#hospital-container').fadeOut(1000)
        $('.ocean').delay(1000).fadeIn(1000)
        $('.sun-container').delay(1000).fadeIn(1000)
        $('#caption').delay(1000).fadeIn(1000);
        setTimeout(function(){
          $('#caption p').each(function(i){
            $(this).delay(2000*i).fadeIn(1000)
          })          
          $('html').addClass('day-night')
        },1000)
      } else if (convstep == 13){
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
        $('#dialog-text4').html("our work still continues frank. Go fill out these documents for me by the end of the day.")
      } else if (convstep == 16){
        convstep = 17
        changepic2()
        $('#dialog-text4').html("Okay mr. wilson. it's just...he looks so regretful. he didn't even close his eyes when he died.")
      } else if (convstep == 17){
        convstep = 18
        $('#speaking-img4').attr('src','./images/dialog-boy.png')
        $('#dialog-text4').html("ending1/3 ")
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