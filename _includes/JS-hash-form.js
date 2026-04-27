const inputOther=document.getElementById("inputother");
function other(required){inputOther.disabled=!required;};
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
	const keys=["f","l","b","i","a"];
	keys.forEach(key=>{
		let value=hP.get(key);
		if(key==="i"){
			if(value==="United"){document.getElementById("Radio_1").checked=true;}
			else if(value==="other"){document.getElementById("Radio_others").checked=true;other(true);}
			else if(value==="no"){document.getElementById("Radio_2").checked=true;}
		}
		else{
			const input=document.getElementById(key);
			if(value&&input){
				if(key==="b"&&value.includes("-")){
					const parts=value.split("-");
					if(parts.length===3){
						const[m,d,y]=parts;
						value=`${y}-${m}-${d}`;
					}
				}
				input.value=value;
			}
		}
	});
}
const today=new Date();
today.setHours(0,0,0,0);
const month=today.getMonth()+1;
const summer=document.getElementById("summer");
if(month===5||month===6){summer.textContent="Select the grade in the past school year.";}
	else if(month===7||month===8){summer.textContent="Select the grade for the upcoming school year.";}
const b=document.getElementById("b");
const eO=document.getElementById("eO");
const e=document.getElementById("e");
const parentOptional=document.getElementById("parentOptional");
const pay=document.getElementById("pay");
const pf=document.getElementById("pf");
const pl=document.getElementById("pl");
const pe=document.getElementById("pe");
const parentsO=document.getElementById("parentsO");
const parents=document.getElementById("parents");
const anotherOptional=document.getElementById("anotherOptional");
const another=document.getElementById("another");
const of=document.getElementById("of");
const ol=document.getElementById("ol");
const oe=document.getElementById("oe");
const ageSpan=document.getElementById("age");
const ageEqual=document.getElementById("ageequal");
function age(){
	let isAdult=false;
	let isChild=false;
	if(b.value){
		const [y,m,d]=b.value.split("-");
		const bDate=new Date(+y,+m-1,+d);
		let ageInYears=today.getFullYear()-bDate.getFullYear();
		const monthDiff=today.getMonth()-bDate.getMonth();
		if (monthDiff<0||(monthDiff===0&&today.getDate()<bDate.getDate())){ageInYears--;}
		ageSpan.textContent = ageInYears;
		ageEqual.style.display = "block";
		const child=new Date(bDate.getFullYear()+14,bDate.getMonth(),bDate.getDate());
		const majority=new Date(bDate.getFullYear()+18,bDate.getMonth(),bDate.getDate());
		isAdult=today>=majority;
		isChild=today<child;
	}
	else{ageEqual.style.display="none";}
	e.required=isAdult;
	e.placeholder=isAdult?"email":"email (optional)";
	eO.hidden=isChild;
	eO.disabled=isChild;
	pf.required=!isAdult;
	pl.required=!isAdult;
	pe.required=!isAdult;
	parentsO.hidden=isAdult;
	parents.disabled=isAdult;
	of.required=!isAdult&&parents.value==="1";
	ol.required=!isAdult&&parents.value==="1";
	oe.required=!isAdult&&parents.value==="1";
	parentOptional.textContent=isAdult?" (Optional)":"";
	pay.textContent=isAdult?"Required if your parent is\u00A0paying\u00A0for\u00A0services.":"";
	anotherOptional.textContent=isAdult?" (Optional)":"";
	another.hidden=!isAdult&&["X","0"].includes(parents.value);
	another.disabled=!isAdult&&["X","0"].includes(parents.value);
}
b.addEventListener("change",age);
parents.addEventListener("change",age);
age();

document.getElementById("form").addEventListener("submit",function(e){
	const bV=document.getElementById("b").value;
	if(bV){
		const [bVY,bVM,bVD]=bV.split("-");
		document.getElementById("date").value=`${bVM}-${bVD}-${bVY}`;
	}
	const emails=[document.getElementById("e"),document.getElementById("pe"),document.getElementById("oe")];
	const values=emails.map(email=>email ? email.value.trim().toLowerCase() : "");
	let hasDup=false;
	emails.forEach((email,index)=>{
		if(!email)return;
		const val=values[index];
		const isDup=val&&values.some((otherV,otherI)=>index!==otherI&&val===otherV);
		if(isDup){
			email.setCustomValidity("Portland Psychological Services requires email addresses to be unique for each person.");
			hasDup=true;}
		else{email.setCustomValidity("");}
	});
	if(hasDup){
		this.reportValidity();
		e.preventDefault();
	}
});
["e","pe","oe"].forEach(id=>{
	const u=document.getElementById(id);
	if(u){
		u.addEventListener("input",function(){
			["e","pe","oe"].forEach(uId=>{ 
				const w=document.getElementById(uId); 
				if(w)w.setCustomValidity(""); 
			});
		});
	}
});