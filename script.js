
window.onresize=displayContent;

var no1=false;
var no2=false;
var no3=false;
function hide(){
	if(window.innerWidth>window.innerHeight){
		
		document.getElementById('no1Content').style.display="none";
		document.getElementById('no2Content').style.display="none";
		document.getElementById('no3Content').style.display="none";
		document.getElementById('no1Content').classList.add('contentHide');
		document.getElementById('no2Content').classList.add('contentHide');
		document.getElementById('no3Content').classList.add('contentHide');



	}
}

function displayContent(){
	if(window.innerWidth<window.innerHeight){
		no1=false;
		no2=false;
		no3=false;
		displayNo1();
		displayNo2();
		displayNo3();
	}

	if(window.innerWidth>=window.innerHeight){
		if(no1==true){

		}
	}
}



function displayNo1(){
	if(no1==false){
		no1=true;
		/*
		document.getElementById('no1').style.width="50%";
		document.getElementById('no1').style.width="25%";
		document.getElementById('no1').style.width="25%";*/
		document.getElementById('no1').classList.add('active');
		document.getElementById('no2').classList.remove('active');
		document.getElementById('no3').classList.remove('active');
		document.getElementById('no4').classList.remove('active');
		
		document.getElementById('no1Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
		document.getElementById('no1').classList.add('activeDivider');
		document.getElementById('topMargin1').classList.add('transitionUpSpecial');

		hideNo2();
		hideNo3();

	} 
}
function hideNo1() {
		no1=false;
		document.getElementById('no1Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
		document.getElementById('no1').classList.remove('activeDivider');
		document.getElementById('topMargin1').classList.remove('transitionUpSpecial');
	
}


function displayNo2(){
	if(no2==false){
		no2=true;
		document.getElementById('no1').classList.remove('active');
		document.getElementById('no2').classList.add('active');
		document.getElementById('no3').classList.remove('active');
		document.getElementById('no4').classList.remove('active');
		/*document.getElementById('no2Content').style.width="50%";*/

		document.getElementById('no2Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no2Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin2').classList.add('transitionUp');
		document.getElementById('no2').classList.add('activeDivider');
		hideNo1();
		hideNo3();
	} 
	}
function hideNo2() {
		no2=false
		document.getElementById('no2Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
		document.getElementById('no2').classList.remove('activeDivider');
		document.getElementById('topMargin2').classList.remove('transitionUp');


	
}

function displayNo3(){
	if(no3==false){
		no3=true;
		
		document.getElementById('no1').classList.remove('active');
		document.getElementById('no2').classList.remove('active');
		document.getElementById('no3').classList.add('active');
		document.getElementById('no4').classList.remove('active');

		document.getElementById('no3Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no3Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin3').classList.add('transitionUp');
		document.getElementById('no3').classList.add('activeDivider');
		hideNo1();
		hideNo2();
	} 
}
function hideNo3(){
		
		no3=false
		document.getElementById('no3Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
		document.getElementById('no3').classList.remove('activeDivider');
		document.getElementById('topMargin3').classList.remove('transitionUp');


	
}


function displayNo4(){
	if(no4==false){
		no4=true;
		
		document.getElementById('no1').classList.remove('active');
		document.getElementById('no2').classList.remove('active');
		document.getElementById('no3').classList.remove('active');
		document.getElementById('no4').classList.add('active');
		
		document.getElementById('no4Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no4Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin4').classList.add('transitionUp');
		document.getElementById('no4').classList.add('activeDivider');
		hideNo1();
		hideNo2();
	} 
}
function hideNo4(){
		
		no4=false
		document.getElementById('no4Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no4Content').style.display="none"},500);
		document.getElementById('no4').classList.remove('activeDivider');
		document.getElementById('topMargin4').classList.remove('transitionUp');


	
}
