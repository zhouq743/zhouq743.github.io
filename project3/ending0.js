
function changepic2(){
  if ($('#speaking-img4').attr('src') == './images/doctor1.png'){
    $('#speaking-img4').attr('src','./images/doctor2.png')
  } else if ($('#speaking-img4').attr('src') == './images/doctor2.png'){
    $('#speaking-img4').attr('src','./images/doctor1.png')
  }
}

setTimeout(function(){
  $("#hos-conv").css('display','flex')
  $('#hospital-container').addClass('filter')
},1000)

var closeStatus = false
var convstep = 9
window.onkeypress=function(e) {
  if(e.which == 13) {
    if ($("#hos-conv").css('display') == 'flex'){
      if(convstep == 9){
        document.getElementById('myAudio').play();
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
        $('#dialog-text4').html("i know, i know. it's not your fault. that's how life works frank. in icu, this happens all the time.")
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
        $('#dialog-text4').html("our work still continues frank. Go fill out these documents for me by the end of the day.")
      } else if (convstep == 16){
        convstep = 17
        changepic2()
        $('#dialog-text4').html("Okay mr. wilson. it's just...he looks so regretful. he didn't even close his eyes when he died.")
      } else if (convstep == 17){
        convstep = 18
        $('#speaking-img4').attr('src','./images/dialog-boy.png')
        $('#dialog-text4').html("ending 0/3 ???")
        $('#continues').html(">> return to play again")
      } else if(convstep == 18){
        window.location.href = 'index.html';
      }
    }
  }
}
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
