let toastTimeout;
const toast=document.getElementById("toast");
const links=document.querySelectorAll("[data-p]");
function showToast(msg){
	toast.textContent=msg;
	toast.classList.add("show");
	clearTimeout(toastTimeout);
	toastTimeout=setTimeout(()=>toast.classList.remove("show"),3500);}
links.forEach(link=>{
	if(link.classList.contains("copy-link")){
		link.addEventListener("click",()=>{
			navigator.clipboard.writeText(link.textContent)
			.then(()=>showToast("Link copied to clipboard!"))
			.catch(()=>showToast("Select the link and copy it."));});}});
function updateLinks(){
	const params=new URLSearchParams(location.hash.slice(1));
	links.forEach(link=>{try{
		const raw=link.tagName==="A"?link.href:link.getAttribute("data-href");
		const url=new URL(raw);
		url.search="";
		const attr=link.getAttribute("data-p");
		const keys=attr?attr.split(",").map(k=>k.trim()).filter(Boolean):[...params.keys()];
		keys.forEach(k=>{if(params.has(k))url.searchParams.set(k,params.get(k));});
		const next=url.toString();
		if(link.tagName==="A")link.href=next;
		else if(link.classList.contains("copy-link"))link.textContent=next;}
		catch{}});}
updateLinks();
addEventListener("hashchange", updateLinks);