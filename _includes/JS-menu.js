function m(x,e){
	if(e&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey))e.preventDefault();
	document.getElementById("menubutton").setAttribute("aria-expanded",document.getElementById("menu").classList.toggle("open",x))}