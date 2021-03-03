


function redc(){
    document.querySelectorAll('.cs').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.c').forEach(item => {
        item.classList.add('test2');
    });
}
function redh(){
    document.querySelectorAll('.hs').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.h').forEach(item => {
        item.classList.add('test2');
    });
}
function redo(){
    document.querySelectorAll('.os').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.o').forEach(item => {
        item.classList.add('test2');
    });
}
function haha(){
    document.querySelectorAll('.cs').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.c').forEach(item => {
        item.classList.add('test2');
    });
    document.querySelectorAll('.hs').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.h').forEach(item => {
        item.classList.add('test2');
    });
    document.querySelectorAll('.os').forEach(item => {
        item.classList.add('test');
    });
    document.querySelectorAll('.o').forEach(item => {
        item.classList.add('test2');
    });
}
function nono(){
    document.querySelectorAll('.test').forEach(item => {
        item.classList.remove('test');
    });
    document.querySelectorAll('.test2').forEach(item => {
        item.classList.remove('test2');
    });
}

function swtch(){
    document.getElementById('shape-wrapper').classList.add('noshow');
    document.getElementById('shape-wrapper2').classList.remove('noshow');
    document.body.style.backgroundColor = 'black';
    document.getElementById('main').style.color = 'white';
    document.getElementById('title').style.color = 'white';
    document.getElementById('author').style.color = 'white';
    document.getElementById('me').style.color = 'white';
    document.getElementById('shape-wrapper2').style.color = 'white';
}
function swtch2(){
    document.getElementById('shape-wrapper2').classList.add('noshow');
    document.getElementById('shape-wrapper').classList.remove('noshow');
    document.body.style.backgroundColor = 'white';
    document.getElementById('main').style.color = 'black';
    document.getElementById('title').style.color = 'black';
    document.getElementById('author').style.color = 'black';
    document.getElementById('me').style.color = 'black';
    document.getElementById('shape-wrapper2').style.color = 'black';
}
function turntos(){
    document.getElementById('shape-wrapper').classList.remove('noshow');
    document.getElementById('container').style.display = 'none';
    document.getElementById('main').classList.remove('goup');
    document.getElementById('main').classList.remove('noshow');
    document.getElementById('me').classList.remove('noshow');
}
function turntopr(){
    document.body.style.backgroundColor = 'black';
    document.getElementById('main').style.color = 'white';
    document.getElementById('title').style.color = 'white';
    document.getElementById('author').style.color = 'white';
    document.getElementById('me').style.color = 'white';
    document.getElementById('shape-wrapper2').style.color = 'white';
    document.getElementById('shape-wrapper2').classList.remove('noshow');
    document.getElementById('container').style.display = 'none';
    document.getElementById('main').classList.remove('goup');
    document.getElementById('main').classList.remove('noshow');
    document.getElementById('me').classList.remove('noshow');
}