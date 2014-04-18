
window.onresize=displayContent;

var no1=false;
var no2=false;
var no3=false;
var no4=false;
var portrait=false;
var firstClick=false;
function hide(){
	/*document.getElementById('no1').classList.add('active');*/
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
	displayNo1();
	firstClick=true;
	
}

function displayContent(){
	if(window.innerWidth<window.innerHeight){
		no1=false;
		no2=false;
		no3=false;
		no4=false;
		firstClick=false;
		displayNo1();
		displayNo2();
		displayNo3();
		displayNo4();
		portrait=true;
	}

	if(window.innerWidth>=window.innerHeight){
		portrait=false;
		if(no1==true){

		}
	}
}



function displayNo1(){
	if(!portrait){
			if(firstClick){
					document.getElementById('no1').classList.add('focustrans');
					document.getElementById('no2').classList.add('focustrans');
					document.getElementById('no3').classList.add('focustrans');
					document.getElementById('no4').classList.add('focustrans');
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
			document.getElementById('topMargin1').classList.add('transitionUpSpecial');

			hideNo2();
			hideNo3();
			hideNo4();

		} 
	}
}
function hideNo1() {
	if(!portrait){
		no1=false;
		document.getElementById('no1Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
		document.getElementById('no1').classList.remove('activeDivider');
		document.getElementById('topMargin1').classList.remove('transitionUpSpecial');
	}
	
}


function displayNo2(){
	if(!portrait){
			if(firstClick){
				document.getElementById('no1').classList.add('focustrans');
				document.getElementById('no2').classList.add('focustrans');
				document.getElementById('no3').classList.add('focustrans');
				document.getElementById('no4').classList.add('focustrans');
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
	if(!portrait){
		no2=false;
		document.getElementById('no2Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
		document.getElementById('no2').classList.remove('activeDivider');
		document.getElementById('topMargin2').classList.remove('transitionUp');
	}


	
}

function displayNo3(){
	if(!portrait){
		if(firstClick){
				document.getElementById('no1').classList.add('focustrans');
				document.getElementById('no2').classList.add('focustrans');
				document.getElementById('no3').classList.add('focustrans');
				document.getElementById('no4').classList.add('focustrans');
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
	if(!portrait){
		no3=false;
		document.getElementById('no3Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
		document.getElementById('no3').classList.remove('activeDivider');
		document.getElementById('topMargin3').classList.remove('transitionUp');
	}	
}


function displayNo4(){
	if(!portrait){
		if(firstClick){
				document.getElementById('no1').classList.add('focustrans');
				document.getElementById('no2').classList.add('focustrans');
				document.getElementById('no3').classList.add('focustrans');
				document.getElementById('no4').classList.add('focustrans');
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
	if(!portrait){
		no4=false;
		document.getElementById('no4Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no4Content').style.display="none"},500);
		document.getElementById('no4').classList.remove('activeDivider');
		document.getElementById('topMargin4').classList.remove('transitionUp');
	}
}
