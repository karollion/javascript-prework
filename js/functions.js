function printMessage(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function clearResult(){
	document.getElementById('result').innerHTML = '';
}

function printRound(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('round').appendChild(div);
}

function clearRound(){
	document.getElementById('round').innerHTML = '';
}