
window.onresize=displayContent;


var no1=false;
var no2=false;
var no3=false;
var no4=false;
var firstClick=false;
var landscape = true;
function hide(){
	/*document.getElementById('no1').classList.add('active');*/
	displayContent();
	if(window.innerWidth>window.innerHeight){
			
		document.getElementById('no1Content').style.display="none";
		document.getElementById('no2Content').style.display="none";
		document.getElementById('no3Content').style.display="none";
		document.getElementById('no4Content').style.display="none";
		document.getElementById('no1Content').classList.add('contentHide');
		document.getElementById('no2Content').classList.add('contentHide');
		document.getElementById('no3Content').classList.add('contentHide');
		document.getElementById('no4Content').classList.add('contentHide');
		

	
	
	}
	//displayNo1();
	firstClick=true;
	window.setTimeout(runIntro(),4000);
}


function runIntro(){
	//choose random logo
	var rand = Math.floor((Math.random()*10)+1);
	if(rand<=5){
		document.getElementById("logo").src="img/Logo3.png";	
	}else{
		document.getElementById("logo").src="img/Logo4.png";	
	}

	//do animations
	window.setTimeout(function(){document.getElementById('introText').style.opacity="1"},500);
	//document.getElementById('intro').classList.remove('killintro');
	window.setTimeout(function(){document.getElementById('intro').classList.add('fadeout')},3000);
	window.setTimeout(function(){document.getElementById('introText').style.opacity="0"},2500);
	window.setTimeout(function(){document.getElementById('intro').classList.add('killintro')}, 5500);	
	//document.getElementById('intro').classList.remove('fadeout');
	//document.getElementById('intro').style.opacity = "1";
	
}

function all(){
			document.getElementById('no1Content').style.display="inline";
			document.getElementById('no2Content').style.display="inline";
			document.getElementById('no3Content').style.display="inline";
			document.getElementById('no4Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
			window.setTimeout(function(){document.getElementById('no2Content').classList.add('opacityUp')},10);
			window.setTimeout(function(){document.getElementById('no3Content').classList.add('opacityUp')},10);
			window.setTimeout(function(){document.getElementById('no4Content').classList.add('opacityUp')},10);
			document.getElementById('back1').classList.add('active');
			document.getElementById('back2').classList.add('active');
			document.getElementById('back3').classList.add('active');
			document.getElementById('back4').classList.add('active');
}
function displayContent(){
	
	if(window.innerWidth<window.innerHeight){
		landscape=false;
		no1=true;
		no2=false;
		no3=false;
		no4=false;
		all();

	}
	if(window.innerWidth>=window.innerHeight){

		
		if (landscape==false) {
			no1=false;
			no4=false;
			no3=false;
			no2=false;
			landscape=true;
			firstClick=false;
			hide();
		};
		landscape=true;
		
	}
}



function displayNo1(){
	if(landscape==true){
		if(firstClick){
			document.getElementById('no1').classList.add('focustrans');
			document.getElementById('no2').classList.add('focustrans');
			document.getElementById('no3').classList.add('focustrans');
			document.getElementById('no4').classList.add('focustrans');
			document.getElementById('no1').classList.remove('initialSize');
			document.getElementById('no2').classList.remove('initialSize');
			document.getElementById('no3').classList.remove('initialSize');
			document.getElementById('no4').classList.remove('initialSize');

			firstClick=false;
		}

		if(no1==false){
			no1=true;
			
			document.getElementById('no1').classList.add('active');
			document.getElementById('no2').classList.remove('active');
			document.getElementById('no3').classList.remove('active');
			document.getElementById('no4').classList.remove('active');

			document.getElementById('back1').classList.add('active');
			document.getElementById('back2').classList.remove('active');
			document.getElementById('back3').classList.remove('active');
			document.getElementById('back4').classList.remove('active');

			document.getElementById('no1Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
			document.getElementById('back1').classList.add('active');
			document.getElementById('topMargin1').classList.add('transitionUp');

			hideNo2();
			hideNo3();
			hideNo4();
		} 
		else{

		}
	}else{
		
			document.getElementById('no1').classList.add('active');
			document.getElementById('no2').classList.add('active');
			document.getElementById('no3').classList.add('active');
			document.getElementById('no4').classList.add('active');

			document.getElementById('back1').classList.add('active');
			document.getElementById('back2').classList.add('active');
			document.getElementById('back3').classList.add('active');
			document.getElementById('back4').classList.add('active');
	}

	
}
function hideNo1() {
	if(landscape){
		no1=false;
		document.getElementById('no1Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
		document.getElementById('no1').classList.remove('activeDivider');
		document.getElementById('topMargin1').classList.remove('transitionUp');
	
}
}


function displayNo2(){

	
	if (landscape) {

		if(firstClick){
			document.getElementById('no1').classList.add('focustrans');
			document.getElementById('no2').classList.add('focustrans');
			document.getElementById('no3').classList.add('focustrans');
			document.getElementById('no4').classList.add('focustrans');
			document.getElementById('no1').classList.remove('initialSize');
			document.getElementById('no2').classList.remove('initialSize');
			document.getElementById('no3').classList.remove('initialSize');
			document.getElementById('no4').classList.remove('initialSize');
			firstClick=false;
		}
		if(no2==false){
			no2=true;
			document.getElementById('no1').classList.remove('active');
			document.getElementById('no2').classList.add('active');
			document.getElementById('no3').classList.remove('active');
			document.getElementById('no4').classList.remove('active');
			/*document.getElementById('no2Content').style.width="50%";*/
			
			document.getElementById('back1').classList.remove('active');
			document.getElementById('back2').classList.add('active');
			document.getElementById('back3').classList.remove('active');
			document.getElementById('back4').classList.remove('active');

			document.getElementById('no2Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no2Content').classList.add('opacityUp')},10);
			document.getElementById('topMargin2').classList.add('transitionUp');
			document.getElementById('no2').classList.add('activeDivider');
			hideNo1();
			hideNo3();
			hideNo4();
		} 
	}
}
function hideNo2() {
		no2=false;
		document.getElementById('no2Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
		document.getElementById('no2').classList.remove('activeDivider');
		document.getElementById('topMargin2').classList.remove('transitionUp');


	
}

function displayNo3(){
	if(landscape){
		if(firstClick){
			document.getElementById('no1').classList.add('focustrans');
			document.getElementById('no2').classList.add('focustrans');
			document.getElementById('no3').classList.add('focustrans');
			document.getElementById('no4').classList.add('focustrans');
			document.getElementById('no1').classList.remove('initialSize');
			document.getElementById('no2').classList.remove('initialSize');
			document.getElementById('no3').classList.remove('initialSize');
			document.getElementById('no4').classList.remove('initialSize');
			firstClick=false;
		}

		if(no3==false){
			no3=true;
			
			document.getElementById('no1').classList.remove('active');
			document.getElementById('no2').classList.remove('active');
			document.getElementById('no3').classList.add('active');
			document.getElementById('no4').classList.remove('active');

			document.getElementById('back1').classList.remove('active');
			document.getElementById('back2').classList.remove('active');
			document.getElementById('back3').classList.add('active');
			document.getElementById('back4').classList.remove('active');


			document.getElementById('no3Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no3Content').classList.add('opacityUp')},10);
			document.getElementById('topMargin3').classList.add('transitionUp');
			document.getElementById('no3').classList.add('activeDivider');
			hideNo1();
			hideNo2();
			hideNo4();
		} 
	}
}
function hideNo3(){
		
		no3=false;
		document.getElementById('no3Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
		document.getElementById('no3').classList.remove('activeDivider');
		document.getElementById('topMargin3').classList.remove('transitionUp');


	
}


function displayNo4(){
	if(landscape){
		if(firstClick){
			document.getElementById('no1').classList.add('focustrans');
			document.getElementById('no2').classList.add('focustrans');
			document.getElementById('no3').classList.add('focustrans');
			document.getElementById('no4').classList.add('focustrans');
			document.getElementById('no1').classList.remove('initialSize');
			document.getElementById('no2').classList.remove('initialSize');
			document.getElementById('no3').classList.remove('initialSize');
			document.getElementById('no4').classList.remove('initialSize');
			firstClick=false;
		
		}
			
		if(no4==false){
			no4=true;
			
			document.getElementById('no1').classList.remove('active');
			document.getElementById('no2').classList.remove('active');
			document.getElementById('no3').classList.remove('active');
			document.getElementById('no4').classList.add('active');

			document.getElementById('no1').classList.add('contanier.active');
			
			document.getElementById('back1').classList.remove('active');
			document.getElementById('back2').classList.remove('active');
			document.getElementById('back3').classList.remove('active');
			document.getElementById('back4').classList.add('active');

			document.getElementById('no4Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no4Content').classList.add('opacityUp')},10);
			document.getElementById('topMargin4').classList.add('transitionUp');
			document.getElementById('no4').classList.add('activeDivider');
			hideNo1();
			hideNo2();
			hideNo3();
		} 
	}
}
function hideNo4(){
		
		no4=false;
		document.getElementById('no4Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no4Content').style.display="none"},500);
		document.getElementById('no4').classList.remove('activeDivider');
		document.getElementById('topMargin4').classList.remove('transitionUp');


	
}
function openReg(){
	document.getElementById('registration').classList.add('focus');
	document.getElementById('startpage').classList.remove('focus');
}
function openNom(){
	document.getElementById('nomination').classList.add('focus');
	document.getElementById('startpage').classList.remove('focus');
}
function back(){
	document.getElementById('registration').classList.remove('focus');
	document.getElementById('nomination').classList.remove('focus');
	document.getElementById('startpage').classList.add('focus');
}