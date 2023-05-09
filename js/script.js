{
function playGame(playerInput) {
    clearMessages();
    clearResult();
    clearRound();

    console.log('Gracz wpisał: ' + playerInput);

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {

        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('wygrana');
            pointsPlayer ++;
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('przegrana');
            pointsComputer ++;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('wygrana');
            pointsPlayer ++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('przegrana');
            pointsComputer ++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('przegrana');
            pointsComputer ++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('wygrana');
            pointsPlayer ++;
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('przegrana');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    printMessage(computerMove);

    let playerMove = getMoveName(playerInput);
    printMessage(playerMove);

    displayResult(computerMove, playerMove);
    
    let score = (pointsComputer + ' - ' + pointsPlayer);
    printResult(score);

    rounds ++;
    printRound(rounds);
}

let pointsComputer = 0;
let pointsPlayer = 0;

let rounds = 0;


document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
}