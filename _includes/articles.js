function t(c){
	const m=document.querySelector("main"),n=(m.dataset.f??location.hash.slice(1))===c?"":c;
	m.dataset.f=n;
	if(location.hash)location.replace("#_");
	history.replaceState(null,"",n?"#"+n:location.pathname+location.search);}