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
	var pue=document.getElementById("tel").value;
	var res=fltr.test(pue);
	return res;
}
