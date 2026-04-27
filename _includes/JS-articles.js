function t(c){
	const u=location.hash.slice(1);
	const r=(u==c)?"#topics":"#"+c;location.replace(r);
}