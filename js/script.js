{
const playGame = function(playerInput) {
    clearMessages('messages');
    clearMessages('result');
    clearMessages('round');

    console.log('Gracz wpisał: ' + playerInput);

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.', 'messages');
            return 'nieznany ruch';
        }
    }

     const displayResult = function(argComputerMove, argPlayerMove) {

        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('wygrana', 'messages');
            pointsPlayer ++;
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('przegrana', 'messages');
            pointsComputer ++;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('remis', 'messages');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('wygrana', 'messages');
            pointsPlayer ++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('przegrana', 'messages');
            pointsComputer ++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('przegrana', 'messages');
            pointsComputer ++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('wygrana', 'messages');
            pointsPlayer ++;
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('przegrana', 'messages');
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage(computerMove, 'messages');

    const playerMove = getMoveName(playerInput);
    printMessage(playerMove, 'messages');

    displayResult(computerMove, playerMove);
    
    const score = (pointsComputer + ' - ' + pointsPlayer);
    printMessage(score, 'result');

    rounds ++;
    printMessage(rounds, 'round');
}

const startGame = function(move, idMove){
    document.getElementById(move).addEventListener('click', function(){
        playGame(idMove);
    });
}

let pointsComputer = 0,
    pointsPlayer = 0,
    rounds = 0;

const rock = startGame('play-rock', 1),
    paper = startGame('play-paper', 2),
    scissors = startGame('play-scissors', 3);

rock;
paper;
scissors;

// document.getElementById('play-rock').addEventListener('click', function(){
//     playGame(1);
// });

// document.getElementById('play-paper').addEventListener('click', function(){
//     playGame(2);
// });

// document.getElementById('play-scissors').addEventListener('click', function(){
//     playGame(3);
// });
}