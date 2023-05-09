const printMessage = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(elementId){
	document.getElementById(elementId).innerHTML = '';
}

const printResult = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

const printRound = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('round').appendChild(div);
}