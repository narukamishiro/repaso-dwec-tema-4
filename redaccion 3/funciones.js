function checkname(){
	var fltr=/'\D+'/;
	var pue=document.getElementById("nm").value;
	var res=fltr.test(pue);
	return res;
}
function checkApe(){
	var fltr=/'\D+'/;
	var pue=document.getElementById("ape").value;
	var res=fltr.test(pue);
	return res;
}
function checkDni(){
	var fltr=/'\d{8}\D{1}'/;
	var pue=document.getElementById("dni").value;
	var res=fltr.test(pue);
	return res;
}
function checktel(){
	var fltr=/'\d{9}'/;
	var pue=document.getElementById("tel").value;
	var res=fltr.test(pue);
	return res;
}
function checkUsu(){
var fltr=/'\d{8}/D/.'/;
	var pue=document.getElementById("usu").value;
	var res=fltr.test(pue);
	return res;
}
function trac(e){
	var i=e.target
	var id=i.id;
	var res;
	switch(id){
		case "nm":res=checkname();break;
		case "ape":res=checknApe();break;
		case "dni":res=checknDni();break;
		case "tel":res=checkTel();break;
		case "usu":res=checkUsu();break;
	}
	if(res){
		i.style.backgroundColor="#0CF908";
	}else{
		i.style.backgroundColor="#F91708";
	}
}
var lis=document.getElementsByTagName("input");
for(x=0;x<lis.length;x++){
	lis[x].blur=trac(event);
}
