const o=document.getElementById("o");
function showother(required){o.disabled=!required;}
const h=window.location.hash;
if(h&&h.length>1){
	if(h.startsWith("#?")){
		const successSVG=document.getElementById("success");
		if(successSVG){successSVG.style.display="block";}}
	const hP=new URLSearchParams(h.substring(1));
	const bF=hP.get("customer_first_name")||hP.get("bf");
	const bL=hP.get("customer_last_name")||hP.get("bl");
	const bE=hP.get("customer_email")||hP.get("be");
	const cF=hP.get("Client's_Legal_First_Name_(Child\u00A0or\u00A0Young\u00A0Adult)")||hP.get("cf");
	const cL=hP.get("Client's_Legal_Last_Name_(Child\u00A0or\u00A0Young\u00A0Adult)")||hP.get("cl");
	if(bF!==null||bL!==null||bE!==null){
		if(bF===cF&&bL===cL){
			if(bF){
				const f=document.getElementById("f");
				if(f){f.value=bF;}}
			if(bL){
				const l=document.getElementById("l");
				if(l){l.value=bL;}}
			if(bE){
				const e=document.getElementById("e");
				if(e){e.value=bE;}}}
		else{
			if(cF){
				const f=document.getElementById("f");
				if(f){f.value=cF;}}
			if(cL){
				const l=document.getElementById("l");
				if(l){l.value=cL;}}
			if(bF){
				const pf=document.getElementById("pf");
				if(pf){pf.value=bF;}}
			if(bL){
				const pl=document.getElementById("pl");
				if(pl){pl.value=bL;}}
			if(bE){
				const pe=document.getElementById("pe");
				if(pe){pe.value = bE;}}}
	}
	const pMap={
		"f":"f",
		"l":"l",
		"n":"n",
		"b":"b",
		"g":"g",
		"e":"e",
		"i":"i",
		"o":"o",
		"a":"a",	
		"pf":"pf",
		"pl":"pl",
		"pn":"pn",
		"pe":"pe",
		"p":"p",
		"of":"of",
		"ol":"ol",
		"on":"on",
		"oe":"oe"	
	};
	Object.keys(pMap).forEach(key=>{
		let value=hP.get(key);
		const elementId = pMap[key];
		if(elementId==="i"){
			if(value==="United"){document.getElementById("United").checked=true;}
			else if(value==="other"){document.getElementById("other").checked=true;showother(true);}
			else if(value==="no"){document.getElementById("no").checked=true;}}
		else if(elementId==="g"&&["D","P","0","1","2","3","4","5","6","7","8","9","10","11","12","C","N"].includes(value)){
			document.getElementById("g" + value).selected = true;}
		else{
			const input=document.getElementById(elementId);
			if(value&&input){
				if(elementId==="b"&&value.includes("-")){
					const parts=value.split("-");
					if(parts.length===3&&parts[0].length<=2){
						const[m,d,y]=parts;
						value=`${y}-${m}-${d}`;}}
				input.value=value;}}
	});
}
const today=new Date();
today.setHours(0,0,0,0);
const month=today.getMonth()+1;
const year=today.getFullYear();
const gy=document.getElementById("gy");
if(month<=6){gy.value=year;
	if(month===5||month===6){
		document.getElementById("summer").textContent="Select the grade in the school year that is ending in May or June.";}}
else{gy.value=year+1;
	if(month===7||month===8){
		document.getElementById("summer").textContent="Select the grade for the upcoming school year.";}}
const b=document.getElementById("b");
const e_=document.getElementById("e_");
const e=document.getElementById("e");
const parentOptional=document.getElementById("parentOptional");
const pay=document.getElementById("pay");
const pf=document.getElementById("pf");
const pl=document.getElementById("pl");
const pe=document.getElementById("pe");
const p_=document.getElementById("p_");
const p=document.getElementById("p");
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
	e_.hidden=isChild;
	e.disabled=isChild;
	pf.required=!isAdult;
	pl.required=!isAdult;
	pe.required=!isAdult;
	p_.hidden=isAdult;
	p.disabled=isAdult;
	of.required=!isAdult&&p.value==="another parent.";
	ol.required=!isAdult&&p.value==="another parent.";
	oe.required=!isAdult&&p.value==="another parent.";
	parentOptional.textContent=isAdult?" (Optional)":"";
	pay.textContent=isAdult?"Required if your parent is\u00A0paying\u00A0for\u00A0services.":"";
	anotherOptional.textContent=isAdult?" (Optional)":"";
	another.hidden=!isAdult&&["another parent who is now deceased.","never had another parent."].includes(p.value);
	another.disabled=!isAdult&&["another parent who is now deceased.","never had another parent."].includes(p.value);
}
b.addEventListener("change",age);
p.addEventListener("change",age);
age();

document.getElementById("form").addEventListener("submit",function(event){
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
			email.setCustomValidity("Portland Psychological Services needs email addresses to be unique for each person.");
			hasDup=true;}
		else{email.setCustomValidity("");}
	});
	if(hasDup){
		this.reportValidity();
		event.preventDefault();
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
window.addEventListener("pageshow",function(event){
	if(typeof age==="function"){age();}
    const otherRadio=document.getElementById("other");
    if(otherRadio){showother(otherRadio.checked);}});