let toastTimeout;
const h=window.location.hash;
let hP=null;
if(h&&h.length>1){hP=new URLSearchParams(h.substring(1));}
const links=document.querySelectorAll("[data-p]");
links.forEach(link=>{
	try{
		const hrefValue=link.tagName==='A'?link.href:link.getAttribute("href");
		let linkURL=new URL(hrefValue);
		if(hP){
			const includeAttr=link.getAttribute("data-p");
			if(includeAttr){
				const allowedKeys=includeAttr.split(",").map(key=>key.trim());
				allowedKeys.forEach(key=>{if(hP.has(key)){linkURL.searchParams.set(key,hP.get(key));}});
			} 
			else{hP.forEach((value,key)=>{linkURL.searchParams.set(key,value);});}}
		const linkHash=linkURL.toString();
		if(link.tagName==='A'){link.href=linkHash;}
		else if(link.tagName==='DIV'){
			link.textContent=linkHash;
			link.addEventListener("click",()=>{
                navigator.clipboard.writeText(linkHash)
                    .then(() => {
                        const toast=document.getElementById("toast");
                        toast.classList.add("show");
                        clearTimeout(toastTimeout);
                        toastTimeout=setTimeout(()=>{toast.classList.remove("show");},2500);})
                    .catch(err=>console.error("Failed to copy:",err));
            });
        }
    }
	catch(error){}
});