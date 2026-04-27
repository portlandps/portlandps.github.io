function o(){
	const a=document.getElementById("email");
	const h=encodeURIComponent(location.hash);
	const b="&body={{site.data.x.url_titlecase}}%2Fsuccess"+h+"%20did%20not%20work%20as%20expected.%0A%0A";
	a.href=a.href.replace(/&body=.*/g,b);
}