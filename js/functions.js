const printMessage = function(msg, elementId){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById(elementId).appendChild(div);
}

const clearMessages = function(elementId){
	document.getElementById(elementId).innerHTML = '';
}