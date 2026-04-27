function m(x){
	const m=document.getElementById("menu");
	if(x===undefined){m.classList.toggle("open");}
	else{m.classList.toggle("open",x);}
};