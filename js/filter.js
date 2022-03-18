function openClose(element) {
	let elem = document.getElementById(element).style.display;
	if (elem == 'block') document.getElementById(element).style.display = 'none';
	else document.getElementById(element).style.display = 'block';
}