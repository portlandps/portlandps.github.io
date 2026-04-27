const h=window.location.hash;
if(h&&h.length>1){
	const hP=new URLSearchParams(h.substring(1));
	const links=document.querySelectorAll("a[data-p]");
	links.forEach(link=>{
		try{
			let linkURL=new URL(link.href);
			const includeAttr=link.getAttribute("data-p");
			if(includeAttr){
				const allowedKeys=includeAttr.split(",").map(key=>key.trim());
				allowedKeys.forEach(key=>{if(hP.has(key)){linkURL.searchParams.set(key,hP.get(key));}});
			} 
			else{hP.forEach((value,key)=>{linkURL.searchParams.set(key,value);});}
			link.href=linkURL.toString();}
		catch(error){}
	});
}