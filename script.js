
window.onresize=displayContent;


var no1=false;
var no2=false;
var no3=false;
var no4=false;
var firstClick=false;
var landscape = true;

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
function portrait(){
	document.getElementById('registration').classList.remove('focus');
	document.getElementById('nomination').classList.remove('focus');
	document.getElementById('startpage').classList.remove('focus');
	document.getElementById('noRegister').classList.add('focus');
}


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
		document.getElementById("logo").src="img/Logo5.png";	
	}else {
		document.getElementById("logo").src="img/Logo6.png";	
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
		portrait();
		document.getElementById('no1').classList.remove('active');
		document.getElementById('no2').classList.remove('active');
		document.getElementById('no3').classList.remove('active');
		document.getElementById('no4').classList.remove('active');


		all();
		document.getElementById('back1').classList.add('back');
		document.getElementById('back2').classList.add('back');
		document.getElementById('back3').classList.add('back');
		document.getElementById('back4').classList.add('back');

			document.getElementById('no1Content').classList.add('mobilestyle');
			document.getElementById('no2Content').classList.add('mobilestyle');
			document.getElementById('no3Content').classList.add('mobilestyle');
			document.getElementById('no4Content').classList.add('mobilestyle');

		document.getElementById('content1').classList.add('contentstyle');
		document.getElementById('content2').classList.add('contentstyle');
		document.getElementById('content3').classList.add('contentstyle');
		document.getElementById('content4').classList.add('contentstyle');

		
		document.getElementById('content1').style.backgroundColor="#C5E0DC";
		document.getElementById('content2').style.backgroundColor="#ECE5CE";
		document.getElementById('content3').style.backgroundColor="#F1D4AF";
		document.getElementById('content4').style.backgroundColor="#ecbaae";		

		document.getElementById('no1').style.display="initial";
		document.getElementById('no2').style.display="initial";
		document.getElementById('no3').style.display="initial";
		document.getElementById('no4').style.display="initial";
	}
	if(window.innerWidth>=window.innerHeight){

		
		if (landscape==false) {
			document.getElementById('noRegister').classList.remove('focus');
			back();
			landscape=true;
			firstClick=false;
			hide();
			if(no1){
				document.getElementById('no1Content').style.display="initial";
				document.getElementById('no1').classList.add('active');

			}
			else if(no2){
				document.getElementById('no2Content').style.display="initial";
				document.getElementById('no2').classList.add('active');
			}
			else if(no3){
				document.getElementById('no3Content').style.display="initial";
				document.getElementById('no3').classList.add('active');
			}
			else if(no4){
				document.getElementById('no4Content').style.display="initial";
				document.getElementById('no4').classList.add('active');
			}
			document.getElementById('back1').classList.remove('active');
			document.getElementById('back2').classList.remove('active');
			document.getElementById('back3').classList.remove('active');
			document.getElementById('back4').classList.remove('active');

			document.getElementById('back1').classList.remove('back');
			document.getElementById('back2').classList.remove('back');
			document.getElementById('back3').classList.remove('back');
			document.getElementById('back4').classList.remove('back');
			document.getElementById('no1Content').classList.remove('mobilestyle');
			document.getElementById('no2Content').classList.remove('mobilestyle');
			document.getElementById('no3Content').classList.remove('mobilestyle');
			document.getElementById('no4Content').classList.remove('mobilestyle');

			document.getElementById('content1').classList.remove('contentstyle');
			document.getElementById('content2').classList.remove('contentstyle');
			document.getElementById('content3').classList.remove('contentstyle');
			document.getElementById('content4').classList.remove('contentstyle');

			
			document.getElementById('content1').style.backgroundColor="initial";
			document.getElementById('content2').style.backgroundColor="initial";
			document.getElementById('content3').style.backgroundColor="initial";
			document.getElementById('content4').style.backgroundColor="initial";		

			document.getElementById('no1').style.display="initial";
			document.getElementById('no2').style.display="initial";
			document.getElementById('no3').style.display="initial";
			document.getElementById('no4').style.display="initial";
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
			hideNo2();
			hideNo3();
			hideNo4();
			document.getElementById('no1').classList.add('active');
			document.getElementById('no2').classList.remove('active');
			document.getElementById('no3').classList.remove('active');
			document.getElementById('no4').classList.remove('active');

			document.getElementById('back1').classList.add('active');
			document.getElementById('back2').classList.remove('active');
			document.getElementById('back3').classList.remove('active');
			document.getElementById('back4').classList.remove('active');

			document.getElementById('no1Content').style.overflowY="scroll";
			document.getElementById('no1Content').style.display="inline";
			window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
			document.getElementById('back1').classList.add('active');
			document.getElementById('topMargin1').classList.add('transitionUp');

	}

	
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
			hideNo1();
			hideNo3();
			hideNo4();
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
		} 
	}
	no2=true;
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
			
			hideNo1();
			hideNo2();
			hideNo4();
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
			
		} 
	}
	no3=true;
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
			
			hideNo1();
			hideNo2();
			hideNo3();
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
			
		} 
	}
	no4=true;
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
function portrait(){
	document.getElementById('registration').classList.remove('focus');
	document.getElementById('nomination').classList.remove('focus');
	document.getElementById('startpage').classList.remove('focus');
	document.getElementById('noRegister').classList.add('focus');
}
