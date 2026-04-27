function timeAgo(date,id){
	const months=Math.floor((new Date()-new Date(date.replace(/-/g,"/")))/2629800000);
	const i=document.getElementById(id);
	if(months>=24){i.textContent=Math.floor(months/12)+" years ago";}
	else if(months>=12){i.textContent="a year ago";}
	else if(months>1){i.textContent=months+" months ago";}
	else if(months===1){i.textContent="a month ago";}
	else{i.textContent="less than a month ago";}
};