function shake(){
    document.getElementById('test1').className ='classname';
	  document.getElementById('test2').className ='classname2';
}
function showline1(){
    document.getElementById('l4').className ='lines';
    document.getElementById('l5').className ='lines';
}
function showline2(){
  document.getElementById('l6').className ='lines';
  document.getElementById('l7').className ='lines';
}
function showline3(){
  document.getElementById('l8').className ='lines';
  document.getElementById('l9').className ='lines';
}

function removeshake(){
  document.getElementById('test1').classList.remove('classname');
	document.getElementById('test2').classList.remove('classname2');
}

function glow1(){
	document.getElementById('test3').className = 'test-hover';
}
function glow2(){
  document.getElementById('test4').className = 'test-hover';
}
function glow3(){
  document.getElementById('test5').className = 'test-hover';
}
function removeglow1(){
	document.getElementById('test3').classList.remove('test-hover');
}
function removeglow2(){
  document.getElementById('test4').classList.remove('test-hover');
}
function removeglow3(){
  document.getElementById('test5').classList.remove('test-hover');
}