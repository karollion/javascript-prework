const printMessage = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const printResult = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

const clearResult = function(){
	document.getElementById('result').innerHTML = '';
}

const printRound = function(msg){
	let div = document.createElement('p');
	div.innerHTML = msg;
	document.getElementById('round').appendChild(div);
}

const clearRound = function(){
	document.getElementById('round').innerHTML = '';
}