function corr(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}
function mktab(){
	var pd=document.getElementById("tab");
	var msj='<table id="tab">';
	var x;
	var y;
	for(x=0;x<100;x++){
		msj.concat("<tr>");
		for(y=0;y<100;y++){
			msj.concat("<td>   </td>");	
		}
		msj.concat("</tr>");
	}
	pd.innerHTML=msj;
}
function colo(e){
	if(e.ctrlKey){
		e.target.backgroundColor="#DC143C";
	}
	if(e.shiftKey){
		e.target.backgroundColor="#2E9AFE";
	}
}
function colo2(e){
	if(e.ctrlKey){
		e.target.backgroundColor="#DC143C";
	}
	if(e.shiftKey){
		e.target.backgroundColor="#2E9AFE";
	}
	if(e.keyCode==67){
		e.target.backgroundColor="#FFFFFF";
	}
	if(e.keyCode==68){
		var list=document.getElementsByTagName("<td>");
		list.forEach(function(item){item.backgroundColor="#000000"});
	}
}
function helptext(e){
	var tg=e.target.id;
	var ms=document.getElementById("demo");
	switch(id){
		case "nom": ms.text="nombre completo"; break;
		case "email": ms.text="correo electronico"; break;
		case "com": ms.text="comentario"; break;
		case "res": ms.text="boton de reseteo"; break;
		case "bor": ms.text="boton de borrado"; break;
	}
}
function clr(e){
	var ms=document.getElementById("demo");
	ms.innerHTML=" ";
}
//ejercicio 2
//document.body.addEventListener("mousemove",corr);
//ejercicio 4
/*mktab();
var list=document.getElementsByTagName("<td>");
list.forEach(function(item){item.onmousemove=function(event){colo(event)}});
*/
//ejercicio 5
/*
mktab();
var list=document.getElementsByTagName("<td>");
list.forEach(function(item){item.onmousemove=function(event){colo2(event)}});
*/
//ejercicio 7
var list=document.getElementsByTagName("input");
list.forEach(function(item){item.focus=helptext(event)};
list.forEach(function(item){item.onblur=clr(event)};
