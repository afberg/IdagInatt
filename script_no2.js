

function hide(){
	document.getElementById('no1Content').style.display="none";
	document.getElementById('no2Content').style.display="none";
	document.getElementById('no3Content').style.display="none";



}
var no1=false;
var no2=false;
var no3=false;
var no4=false;
function displayNo1(){
	if(no1==false){
		no1=true;
		document.getElementById('no1Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no1Content').classList.add('opacityUp')},10);
		document.getElementById('no1').classList.add('activeDivider');
		document.getElementById('topMargin1').classList.add('transitionUpSpecial');

		inactivateOthers('no1');
		
	} else {
		no1=false;
		document.getElementById('no1Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
		document.getElementById('no1').classList.remove('activeDivider');
		document.getElementById('topMargin1').classList.remove('transitionUpSpecial');

		reactivateOthers('no1');
		
		
	}
}

function inactivateOthers(divider){
	if (divider!='no1'){
		document.getElementById('no1').classList.add('inactiveDivider');
		if(no1==true){
			document.getElementById('no1Content').classList.remove('opacityUp');
			window.setTimeout(function(){document.getElementById('no1Content').style.display="none"},500);
			document.getElementById('no1').classList.remove('activeDivider');
			document.getElementById('topMargin1').classList.remove('transitionUpSpecial');
			no1=false;
		}
	}
	if (divider!='no2'){
		document.getElementById('no2').classList.add('inactiveDivider');
		
		if(no2==true){
			document.getElementById('no2Content').classList.remove('opacityUp');
			window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
			document.getElementById('no2').classList.remove('activeDivider');
			document.getElementById('topMargin2').classList.remove('transitionUp');
			no2=false;
		}
	} 
	if (divider!='no3'){
		document.getElementById('no3').classList.add('inactiveDivider');

		if(no3==true){
			document.getElementById('no3Content').classList.remove('opacityUp');
			window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
			document.getElementById('no3').classList.remove('activeDivider');
			document.getElementById('topMargin3').classList.remove('transitionUp');
			no3=false
		}

	}
	if (divider!='no4'){
		document.getElementById('no4').classList.add('inactiveDivider');
	}
}

function reactivateOthers(divider){
	if (divider!='no1'){
		document.getElementById('no1').classList.remove('inactiveDivider');
	}
	if (divider!='no2'){
		document.getElementById('no2').classList.remove('inactiveDivider');
	} 
	if (divider!='no3'){
		document.getElementById('no3').classList.remove('inactiveDivider');
	}
	if (divider!='no4'){
		document.getElementById('no4').classList.remove('inactiveDivider');
	}
}


function displayNo2(){
	if(no2==false){
		no2=true;
		document.getElementById('no2Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no2Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin2').classList.add('transitionUp');
		document.getElementById('no2').classList.add('activeDivider');
		inactivateOthers('no2');
		
	} else {
		no2=false;
		document.getElementById('no2Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no2Content').style.display="none"},500);
		document.getElementById('no2').classList.remove('activeDivider');
		document.getElementById('topMargin2').classList.remove('transitionUp');
		reactivateOthers('no2');
		

	}
}

function displayNo3(){
	if(no3==false){
		no3=true;
		document.getElementById('no3Content').style.display="inline";
		window.setTimeout(function(){document.getElementById('no3Content').classList.add('opacityUp')},10);
		document.getElementById('topMargin3').classList.add('transitionUp');
		document.getElementById('no3').classList.add('activeDivider');
		inactivateOthers('no3');
		
	} else {
		no3=false;
		document.getElementById('no3Content').classList.remove('opacityUp');
		window.setTimeout(function(){document.getElementById('no3Content').style.display="none"},500);
		document.getElementById('no3').classList.remove('activeDivider');
		document.getElementById('topMargin3').classList.remove('transitionUp');
		reactivateOthers('no3');
		

	}
}
