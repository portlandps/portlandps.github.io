const o=document.getElementById("o");
function showother(required){o.disabled=!required;};
const h=window.location.hash;
if(h&&h.length>1){
	if(h.startsWith("#?")){
        const successSVG=document.getElementById("success");
        if(successSVG){successSVG.style.display="block";}
    }
	const hP=new URLSearchParams(h.substring(1));
	const bST=hP.get("booking_start_time");
    if(bST&&new Date()<new Date(bST)){
		document.getElementById("concerns").hidden=false;
		document.getElementById("concerns").disabled=false;
		document.getElementById("concernsLabel").hidden=false;}
	const cuF=hP.get("customer_first_name");
	const cuL=hP.get("customer_last_name");
	const cuE=hP.get("customer_email");
	const clF=hP.get("Client's_Legal_First_Name_(Child\u00A0or\u00A0Young\u00A0Adult)");
	const clL=hP.get("Client's_Legal_Last_Name_(Child\u00A0or\u00A0Young\u00A0Adult)");
	if(cuF!==null||cuL!==null||cuE!==null){
		if(cuF===clF&&cuL===clL){
			if(cuF){
				const fInput=document.getElementById("f");
				if(fInput){fInput.value=cuF;}}
			if(cuL){
				const lInput=document.getElementById("l");
				if(lInput){lInput.value=cuL;}}
			if(cuE){
				const eInput=document.getElementById("e");
				if(eInput){eInput.value=cuE;}}}
		else{
			if(clF){
				const fInput=document.getElementById("f");
				if(fInput){fInput.value=clF;}}
			if(clL){
				const lInput=document.getElementById("l");
				if(lInput){lInput.value=clL;}}
			if(cuF){
				const pfInput=document.getElementById("pf");
				if(pfInput){pfInput.value=cuF;}}
			if(cuL){
				const plInput=document.getElementById("pl");
				if(plInput){plInput.value=cuL;}}
            if(cuE){
				const peInput=document.getElementById("pe");
				if(peInput){peInput.value = cuE;}}}
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
		"p":"parents",
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
			else if(value==="no"){document.getElementById("no").checked=true;}
		}
		else if(elementId==="g"&&["D","P","K","1","2","3","4","5","6","7","8","9","10","11","12","C","N"].includes(value)){
			document.getElementById("g" + value).selected = true;
		}
		else{
			const input=document.getElementById(elementId);
			if(value&&input){
				if(elementId==="b"&&value.includes("-")){
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
const year=today.getFullYear();
const summer=document.getElementById("summer");
const gy=document.getElementById("gy");
if(month<=6){gy.value=year;
	if(month===5||month===6){summer.textContent="Select the grade in the past school year.";}}
else{gy.value=year+1;
	if(month===7||month===8){summer.textContent="Select the grade for the upcoming school year.";}}
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
	e.disabled=isChild;
	pf.required=!isAdult;
	pl.required=!isAdult;
	pe.required=!isAdult;
	parentsO.hidden=isAdult;
	parents.disabled=isAdult;
	of.required=!isAdult&&parents.value==="another parent.";
	ol.required=!isAdult&&parents.value==="another parent.";
	oe.required=!isAdult&&parents.value==="another parent.";
	parentOptional.textContent=isAdult?" (Optional)":"";
	pay.textContent=isAdult?"Required if your parent is\u00A0paying\u00A0for\u00A0services.":"";
	anotherOptional.textContent=isAdult?" (Optional)":"";
	another.hidden=!isAdult&&["another parent who is now deceased.","never had another parent."].includes(parents.value);
	another.disabled=!isAdult&&["another parent who is now deceased.","never had another parent."].includes(parents.value);
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