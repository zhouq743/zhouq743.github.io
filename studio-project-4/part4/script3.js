var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key5F266aCXJ7Wc7M'}).base('appbORQUQ1NNb40zS');
base("omikuji").select({}).eachPage(gotItems, gotAllItems);
const items = [];
function gotItems(records, fetchNextPage) {
  items.push(...records);
  fetchNextPage();
}
function gotAllItems(err) {
  if (err) {
    console.log("error!");
    return;
  }
  showItems();
}
var x = window.matchMedia("(max-width: 480px)")

// first open instruciton
$('#open-instruction').one('click',function(){
    $(this).addClass('move1');
    // $(this).css('top','calc(50vh + 7vw)');
    $('#instruction').delay(1000).fadeIn(2000);
});   


//start the game
$('#open-instruction').click(function(){
    if(document.querySelector('#instruction').style.display == 'block'){
        $('#open-instruction').removeClass('add-gradient');
        $('#open-instruction').removeClass('move1');
        $('#open-instruction').addClass('move2');
        $('#open-instruction').css('cursor','default');
        setTimeout(function(){
            $('#compass-container').fadeIn(3000).css('display','grid');
            $('#eyeball-container').fadeIn(1000);
            $('#open-instruction').removeClass('move2');
            if(x.matches) {
                $('#open-instruction').css('top','calc(50vh - 10vw)');
                $('#open-instruction').css('z-index','100');
            } else {
                $('#open-instruction').css('top','calc(50vh - 3vw)');
                setTimeout(function(){
                    $('#open-instruction').removeClass('open-instruction');
                    $('#open-instruction').appendTo('#eye-container');
                    $('#open-instruction').css('top','0');
                    $('#open-instruction').addClass('moving-ball');
                },1000)
            }
        },1000);
        $('#instruction').fadeOut(1000);
    }
});

//eye following effect
if(x.matches) {console.log('match')} else {
    document.querySelector('body').addEventListener('mousemove', function(event) {
        var eye = document.querySelector("#eye-container");
        var x = (eye.offsetLeft) + (eye.offsetWidth / 2);
        var y = (eye.offsetTop) + (eye.offsetHeight / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) +180;
        eye.style['-webkit-transform'] = 'rotate(' + rot + 'deg)';
        eye.style['-moz-transform'] = 'rotate(' + rot + 'deg)';
        eye.style['-ms-transform'] = 'rotate(' + rot + 'deg)';
        eye.style['transform'] = 'rotate(' + rot + 'deg)';
    });
}

//select one of the four directions
$('.parts').click(function(){
    $('#submit').appendTo('body');
    if(x.matches){
        $('#submit').css('top','calc(90vh - 7.5vw)');
    } else {
        $('#submit').css('top','calc(50vh + 7vw)');
    }
    $('#submit').addClass('move1');
    setTimeout(function(){
        $('#submit').appendTo('form');
        $('#submit').css('cursor','pointer');
        $('#submit').removeClass('move1');
        $('#submit').css('top','16.6vw');
        if(x.matches){
            $('#submit').css('top','calc(80vh - 8.5vw)');
        }
    },3000)
    $('#eyeball-container').css('display','none');
    $('#open-instruction').css('display','none');
    $('#compass-container').addClass('turn-blue');
    $('.parts').each(function(){
        $('.parts').removeClass('parts-with-hover');
    })
    $('#compass-container').css('display','none');
    $('body').css('background','white');
    $('#input-container').delay(1000).fadeIn(2000);
})
if(x.matches) {
    document.getElementById("input-question").rows = "25";
}

var d = new Date();
var today = d.getDate();
if (today<8){
    document.querySelector('#top-left').style.order = '1';
    document.querySelector('#top-right').style.order = '2';
    document.querySelector('#bottom-left').style.order = '3';
    document.querySelector('#bottom-right').style.order = '4';
} else if (today<16 && today>7){
    document.querySelector('#top-left').style.order = '2';
    document.querySelector('#top-right').style.order = '3';
    document.querySelector('#bottom-left').style.order = '4';
    document.querySelector('#bottom-right').style.order = '1';
} else if (today>15 && today<24){
    document.querySelector('#top-left').style.order = '3';
    document.querySelector('#top-right').style.order = '4';
    document.querySelector('#bottom-left').style.order = '1';
    document.querySelector('#bottom-right').style.order = '2';
} else if (today>23){
    document.querySelector('#top-left').style.order = '4';
    document.querySelector('#top-right').style.order = '1';
    document.querySelector('#bottom-left').style.order = '2';
    document.querySelector('#bottom-right').style.order = '3';
}
var clicked;
document.querySelector('#top-left').addEventListener('click',function(){
    clicked='top-left';
    console.log(clicked);
});
document.querySelector('#top-right').addEventListener('click',function(){
    clicked='top-right';
    console.log(clicked);
});
document.querySelector('#bottom-left').addEventListener('click',function(){
    clicked='bottom-left';
    console.log(clicked);
});
document.querySelector('#bottom-right').addEventListener('click',function(){
    clicked='bottom-right';
    console.log(clicked);
});


//submit the question

function str_split(string) {
    string += '';
    var chunks = [],
      pos = 0,
      len = string.length;
    while (pos < len) {
      chunks.push(string.slice(pos, pos += 1));
    }
    return chunks;
}
function count(string){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var splitted_string = str_split(string);
    var count = 0;
    for (i = 0; i < splitted_string.length; i++) { 
        var letterPosition = alphabet.indexOf(splitted_string[i])+1;
        count = count + letterPosition;}
    return count;
}

var sumLetters;
var typed;
// check if it's empty
$('#input-question').keyup(function(){
    var question = $('#input-question').val();
    if (question.length<=0) {
        $('#submit').prop('disabled',true);
    } else {
        $('#submit').addClass('add-gradient');
        $('#submit').css('cursor','pointer');
        $('#submit').prop('disabled',false);
    }
});

$('form').submit(function(event){
    event.preventDefault();
    $('#result-container').delay(500).fadeIn(1000);
    $('#last-button').delay(2000).fadeIn(1);
    $('#submit').delay(2000).fadeOut(1);
    $('#submit').prop('disabled',true);
    $('#submit').appendTo('body');
    $('form').fadeOut(500);
    if(x.matches){
        $('#submit').css('top','calc(90vh - 7.5vw)');
    } else {
        $('#submit').addClass('move-down3');
    }
    var question = $('#input-question').val().toLowerCase();
    question = question.replace(/\s/g, '');
    question = question.replace(/[.,\/#!$?@%\^&\*;:{}=\-_`~()]/g,"");
    sumLetters = count(question);
    if (sumLetters%2 == 0){typed = true} else {typed = false};
    console.log(typed);
});
function filter(){
    var myfilter;
    if (clicked == 'top-left' && typed == true){
        myfilter = 1;
    } else if (clicked == 'top-left' && typed == false){
        myfilter = 8;
    } else if (clicked == 'top-right' && typed == true){
        myfilter = 2;
    } else if (clicked == 'top-right' && typed == false){
        myfilter = 7;
    } else if (clicked == 'bottom-left' && typed == true){
        myfilter = 3;
    } else if (clicked == 'bottom-left' && typed == false){
        myfilter = 6;
    } else if (clicked == 'bottom-right' && typed == true){
        myfilter = 4;
    } else if (clicked == 'bottom-right' && typed == false){
        myfilter = 5;
    }
    return myfilter;
}
function showItems() {
    items.forEach((item) => {
        var japaneseContainer = document.createElement('h1');
        japaneseContainer.innerText = item.fields.japanese;
        document.querySelector('#result').append(japaneseContainer);
        japaneseContainer.style.display = 'none';
        
        var englishContainer = document.createElement('h3');
        englishContainer.innerText = item.fields.english;
        document.querySelector('#result').append(englishContainer);
        englishContainer.style.display = 'none';

        var desContainer = document.createElement('span');
        desContainer.innerText = item.fields.description;
        document.querySelector('#description-container').append(desContainer);
        desContainer.style.display = 'none';

        var number1 = item.fields.numberj;
        number1.forEach(function (c) {
          japaneseContainer.classList.add(c);
        });

        var number2 = item.fields.numbere;
        number2.forEach(function (c) {
          englishContainer.classList.add(c);
        });

        var number3 = item.fields.numberd;
        number3.forEach(function (c) {
          desContainer.classList.add(c);
        });

        $('form').submit(function(event){
            var finalFilter = filter();
            console.log(finalFilter);
            if (finalFilter == 1) {
                $('.1j').css('display','block');
                $('.1e').css('display','block');
                $('.1d').css('display','block');
            } else if (finalFilter == 2) {
                $('.2j').css('display','block');
                $('.2e').css('display','block');
                $('.2d').css('display','block');
            } else if (finalFilter == 3) {
                $('.3j').css('display','block');
                $('.3e').css('display','block');
                $('.3d').css('display','block');
            } else if (finalFilter == 4) {
                $('.4j').css('display','block');
                $('.4e').css('display','block');
                $('.4d').css('display','block');
            } else if (finalFilter == 5) {
                $('.5j').css('display','block');
                $('.5e').css('display','block');
                $('.5d').css('display','block');
            } else if (finalFilter == 6) {
                $('.6j').css('display','block');
                $('.6e').css('display','block');
                $('.6d').css('display','block');
            } else if (finalFilter == 7) {
                $('.7j').css('display','block');
                $('.7e').css('display','block');
                $('.7d').css('display','block');
            } else if (finalFilter == 8) {
                $('.8j').css('display','block');
                $('.8e').css('display','block');
                $('.8d').css('display','block');
            }

            if (finalFilter <= 5) {
                $('#description-container').css('background','#a51d31');
                $('#result-container').css('background','#a51d31');
                $('#result').css('color','#a51d31');
                $('span').css('color','#a51d31');
                setTimeout(function(){
                    $('body').css('background','#a51d31');
                },1000)
            } else {
                $('#description-container').css('background','#1c1f6e');
                $('#result-container').css('background','#1c1f6e');
                $('#result').css('color','#1c1f6e');
                $('span').css('color','#1c1f6e');
                setTimeout(function(){
                    $('body').css('background','#1c1f6e');
                },1000)
            }
        })
    });
};

//show description
function openDes(){
    //hide result container animation first, show description append 
    $('#result-container').fadeOut(1000);
    $('#description-container').fadeIn(500);
    // $('#last-button').css('top','calc(50vh - 13vw)');
    // $('#last-button').css('left','calc(50vw - 40vh)');
}


function closeDes(){
    window.location.replace("https://zhouq743.github.io/");
}

var counts = 0;
$("#last-button").click(function() {
    counts++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(counts) === false) {
        openDes();
    } else if (isEven(counts) === true) {
        closeDes();
    }
});




