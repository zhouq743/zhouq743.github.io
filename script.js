function getNumber() {
  var min = 0,
      max = 4,
      random;
  do {
      random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  return random;
};
function pj1() {
  var min = 1,
      max = 5,
      random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  document.getElementById("project1-img").src="images/pj1-"+random+".png";
}
function pj2() {
  var min = 1,
      max = 4,
      random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  document.getElementById("project2-img").src="images/pj2-"+random+".png";
}
function pj3() {
  var min = 1,
      max = 4,
      random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  document.getElementById("project3-img").src="images/pj3-"+random+".png";
}
function pj4() {
  var min = 1,
      max = 6,
      random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  document.getElementById("project4-img").src="images/pj4-"+random+".png";
}
function workshop() {
  var min = 1,
      max = 11,
      random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  document.getElementById("workshop-img").src="images/workshops/"+random+".png";
  $('ul li:nth-child('+random+')').css('filter','brightness(100%)');
  $('ul li:nth-child('+random+')').addClass('target');
  $('ul li:not(.target)').css('filter','brightness(40%)');

  $('#workshop-img').click(function(){
    if (random === 1) {window.location.href = 'https://ca.slack-edge.com/T01GEBJQNES-U01JPE3BLBG-ca3619d6dcdb-512'}
    else if (random === 2) {window.location.href = './studio-workshops/screen-time.html'}
    else if (random === 3) {window.location.href = 'https://drive.google.com/drive/folders/1ezJlVbf5nwEvzXL4wdBdiWlVXqG8156W?usp=sharing'}
    else if (random === 4) {window.location.href = 'https://docs.google.com/document/d/1ARmLsxGjdbOMLvs0hdZwtCcMpWOd19axIHXKuIqKA-M/edit?usp=sharing'}
    else if (random === 5) {window.location.href = 'https://docs.google.com/document/d/1LRptBAmSwiVQVV1guj1yr5-cDslIMKNvQoE172sbFMo/edit?usp=sharing'}
    else if (random === 6) {window.location.href = './studio-workshops/hover/index.html'}
    else if (random === 7) {window.location.href = './studio-workshops/flexbox/index.html'}
    else if (random === 8) {window.location.href = './studio-workshops/filter/index.html'}
    else if (random === 9) {window.location.href = 'https://drive.google.com/file/d/1KLUq6nb_go6FKETpWqmP995o1S43JybZ/view?usp=sharing'}
    else if (random === 10) {window.location.href = './studio-workshops/text-generator/index.html'}
  })
}

$(document).ready(function() {
  document.querySelector('#project1-img').src='images/pj1-1.png';
  document.querySelector('#project2-img').src='images/pj2-1.png';
  document.querySelector('#project3-img').src='images/pj3-1.png';
  document.querySelector('#project4-img').src='images/pj4-1.png';
  document.querySelector('#workshop-img').src='images/workshops/1.png';
  $('ul li:nth-child(1)').css('filter','brightness(100%)');
});

$('#project1-img').mouseover(function(){
  $('#project1-title').css('display','block')
});
$('#project1-img').mouseout(function(){
  $('#project1-title').css('display','none')
});
$('#project2-img').mouseover(function(){
  $('#project2-title').css('display','block')
});
$('#project2-img').mouseout(function(){
  $('#project2-title').css('display','none')
});
$('#project3-img').mouseover(function(){
  $('#project3-title').css('display','block')
});
$('#project3-img').mouseout(function(){
  $('#project3-title').css('display','none')
});
$('#project4-img').mouseover(function(){
  $('#project4-title').css('display','block')
});
$('#project4-img').mouseout(function(){
  $('#project4-title').css('display','none')
});
setInterval(pj1,1000);
setInterval(pj2,1000);
setInterval(pj3,1000);
setInterval(pj4,1000);
setInterval(workshop,1000);
setInterval(function(){
  $('ul li').removeClass('target');
},1000)

$('#studio').click(function(){
  $('#projects-container').css('display','flex');
  $('#workshops-container').css('display','none');
  $('#lab-container').css('display','none');
  $('#about-container').css('display','none');
})
$('#workshops').click(function(){
  $('#projects-container').css('display','none');
  $('#lab-container').css('display','none');
  $('#workshops-container').css('display','block');
  $('#about-container').css('display','none');
})
$('#lab').click(function(){
  $('#projects-container').css('display','none');
  $('#lab-container').css('display','block');
  $('#workshops-container').css('display','none');
  $('#about-container').css('display','none');
});
$('#about').click(function(){
  $('#projects-container').css('display','none');
  $('#lab-container').css('display','none');
  $('#workshops-container').css('display','none');
  $('#about-container').css('display','block');
});
$('#mobile-menu').click(function(){
  $('#menu-background').css('display','block');
  $('.menu-option').css('display','block');
  $('.menu-option').css('font-size','6vw');
  document.getElementById("my-logo").src='images/logo2.png';
  $('#my-logo').appendTo('#menu-background');
  $('#my-logo').addClass('logo-drop');
  $('.menu-option').appendTo('#menu-background');

})
$('#menu-background').click(function(){
  $(this).css('display','none');
  document.getElementById("my-logo").src='images/logo.png';
  $('#my-logo').appendTo('header');
  $('#my-logo').removeClass('logo-drop');
})