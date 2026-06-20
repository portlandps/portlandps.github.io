function m(x){
	const menu=document.getElementById("menu");
	if(x===undefined){menu.classList.toggle("open");}
	else{menu.classList.toggle("open",x);}
}