

function hide(){
	document.getElementById('no1Content').style.display="none";
	document.getElementById('no2Content').style.display="none";
	document.getElementById('no3Content').style.display="none";



}
var no1=false;
var no2=false;
var no3=false;
function displayNo1(divider){
	if(no1==false){
		no1=true;
		document.getElementById('no1Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
		document.getElementById('no1').classList.add('activeDivider');
		document.getElementById('topMargin1').classList.add('transitionUpSpecial');

		

	} else {
		no1=false;
		document.getElementById('no1Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
		document.getElementById('no1').classList.remove('activeDivider');
		document.getElementById('topMargin1').classList.remove('transitionUpSpecial');
		
		
	}
}


function displayNo2(){
	if(no2==false){
		no2=true;
		document.getElementById('no2Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no2Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin2').classList.add('transitionUp');
		document.getElementById('no2').classList.add('activeDivider');
		
	} else {
		no2=false
		document.getElementById('no2Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
		document.getElementById('no2').classList.remove('activeDivider');
		document.getElementById('topMargin2').classList.remove('transitionUp');


	}
}

function displayNo3(){
	if(no3==false){
		no3=true;
		document.getElementById('no3Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no3Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin3').classList.add('transitionUp');
		document.getElementById('no3').classList.add('activeDivider');
		
	} else {
		no3=false
		document.getElementById('no3Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
		document.getElementById('no3').classList.remove('activeDivider');
		document.getElementById('topMargin3').classList.remove('transitionUp');


	}
}
