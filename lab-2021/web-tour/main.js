// here I defined an variable called centerr which is actually the class 'test2' in my html
var centerr = document.getElementsByClassName('test2');
// since there are more than 1 elements in centerr, for each item of centerr, add a new class called 'center' (here the variable i stands for the index of elements inside centerr)
for(var i=0; i<centerr.length; i++){
    centerr[i].classList.add('center');
}
// here I get the html element with the id 'test1'. Once I click on 'test1', call the function big
document.getElementById('test1').addEventListener('click',big);
// here i defined the function big
function big(){
    // first I created a new variable called lisst which is actually the class 'test' in my html
    var lisst = document.getElementsByClassName('test');
    //see if it's working by checking console.log
    console.log(lisst);
    // since there are more than 1 elements in lisst, for each item of lisst, add a new class called 'added' (here the variable i stands for the index of elements inside lisst)
    for (var i=0; i<lisst.length; i++){
        lisst[i].classList.add('added');
    }
}
// here I get the html element with the id 'button'. Once I click on 'button', call the function showing
document.getElementById('button').addEventListener('click', showimg);
// here i defined the function showing
function showimg(){
    // first I created a new variable called imgg which is actually all the img tags in html
    var imgg = document.getElementsByTagName('img');
    // since there are more than 1 elements in imgg, for each item of imgg, remove the class called 'noshow' (here the variable i stands for the index of elements inside imgg)
    for (var i=0; i<imgg.length; i++){
        imgg[i].classList.remove('noshow');
    }
    // also add a new class 'noshow' to the element with the id 'button'
    document.getElementById('button').classList.add('noshow');
}
// here I get the html element with the id 'hoverr'. Once I hover on 'hoverr', call the function fontChange
document.getElementById('hoverr').addEventListener('mouseover',fontChange);
// here i defined the function fontChange
function fontChange(){
    // first I created a new variable called text which is actually all the p tags in html
    var text = document.getElementsByTagName('p');
    // since there are more than 1 elements in text, for each item of text, add a new class called 'fontchange' (here the variable i stands for the index of elements inside text)
    for (var i=0; i<text.length; i++){
        text[0].classList.add('fontchange');
    }
}

// define a new variable slideIndex equals to 1
var slideIndex = 1;
// call the function showSlides. its variable equals to slideIndex
showSlides(slideIndex);

// define the function minusSlides
function minusSlides() {
    // see if it works
    console.log('working');
    // call the function showSlides using the viarable slideIndex. slideIndex at this moment equals to its original value minus 1
    showSlides(slideIndex += -1);
}
// define the function plusSlides
function plusSlides() {
    // see if it works
    console.log('working');
    // call the function showSlides using the viarable slideIndex. slideIndex at this moment equals to its original value plus 1
    showSlides(slideIndex += 1);
}

// define the function plusSlides
function showSlides(n) {
    // define the variable i
    var i;
      // define the variable slides which is elements with the class 'my-slides' (slides is an array)
    var slides = document.getElementsByClassName("my-slides");
    // if the given variable n is bigger than the number of items inside slides, slideIndex equals to 1 (this makes the index return to the first one)
    if (n > slides.length) {slideIndex = 1}
    // if the given variable n is smaller than 1, slideIndex equals to the number of items inside slides (this makes the index return to the last one)
    if (n < 1) {slideIndex = slides.length}
    // the two steps above make sure the slides is a loop

    // hide all the elements inside slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // show the element with the index equal to slideIndex-1 inside slides (because the original value of slideIndex is 1 and an array starts with the index 0)
    slides[slideIndex-1].style.display = "block";
}

// when click on the element with the id 'prev', call minusSlides function
document.getElementById('prev').addEventListener('click', minusSlides);
// when click on the element with the id 'next', call plusSlides function
document.getElementById('next').addEventListener('click', plusSlides);