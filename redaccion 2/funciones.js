function estNormal(){
	document.body.style.backgroundColor="";//claro
	document.getElementById("enl").style.border = "solid #000000";
	document.getElementById("enl").style.backgroundColor = "3371FF";//azul
	document.getElementById("mra").style.border = "solid #000000";
	document.getElementById("mra").style.backgroundColor = "#F6FF33";//amarillo
	
}
function estmini(){
	document.body.style.backgroundColor="";//claro
	document.getElementById("enl").style.border = "";
	document.getElementById("enl").style.backgroundColor = "#FFFFFF";//blanco
	document.getElementById("mra").style.border = "#FFFFFF";
	document.getElementById("mra").style.backgroundColor = "#FFFFFF";//blanco
	document.getElementById("mra").style.visibility="hidden";
}
estNormal();
document.getElementById("nm").click=estNormal();
document.getElementById("mn").click=estmini();