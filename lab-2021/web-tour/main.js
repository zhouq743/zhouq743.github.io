var centerr = document.getElementsByClassName('test2');
for(var i=0; i<centerr.length; i++){
    centerr[i].classList.add('center');
}
document.getElementById('test1').addEventListener('click',big);
function big(){
    var lisst = document.getElementsByClassName('test');
    console.log(lisst);
    for (var i=0; i<lisst.length; i++){
        lisst[i].classList.add('added');
    }
}
document.getElementById('button').addEventListener('click', showimg)
function showimg(){
    var imgg = document.getElementsByTagName('img');
    for (var i=0; i<imgg.length; i++){
        imgg[i].classList.remove('noshow');
    }
    document.getElementById('button').classList.add('noshow');
}

document.getElementById('hoverr').addEventListener('mouseover',fontchange)
function fontchange(){
    var text = document.getElementsByTagName('p');
    for (var i=0; i<text.length; i++){
        text[0].classList.add('fontchange');
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.getElementById('prev').addEventListener('click',plusSlides(-1));