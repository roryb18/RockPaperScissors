function getcomputerChoice1(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return ('Rock')
    }else if(result === 1){
        return ('Paper')
    }else if(result === 2){
        return ('Scissors')
    }
}


function gethumanChoice1(){
    let result = prompt(['Rock', ' Paper', ' Scissors']);
    if(result === 'Rock' || result === 'rock'){
        return ('Rock')
    }else if(result === 'Paper' || result === 'paper'){
        return ('Paper')
    }else if(result === 'Scissors' || result === 'scissors'){
        return ('Scissors')
    }
}
function getcomputerChoice2(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return ('Rock')
    }else if(result === 1){
        return ('Paper')
    }else if(result === 2){
        return ('Scissors')
    }
}


function gethumanChoice2(){
    let result = prompt(['Rock', ' Paper', ' Scissors']);
    if(result === 'Rock' || result === 'rock'){
        return ('Rock')
    }else if(result === 'Paper' || result === 'paper'){
        return ('Paper')
    }else if(result === 'Scissors' || result === 'scissors'){
        return ('Scissors')
    }
}
function getcomputerChoice3(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return ('Rock')
    }else if(result === 1){
        return ('Paper')
    }else if(result === 2){
        return ('Scissors')
    }
}


function gethumanChoice3(){
    let result = prompt(['Rock', ' Paper', ' Scissors']);
    if(result === 'Rock' || result === 'rock'){
        return ('Rock')
    }else if(result === 'Paper' || result === 'paper'){
        return ('Paper')
    }else if(result === 'Scissors' || result === 'scissors'){
        return ('Scissors')
    }
}
function getcomputerChoice4(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return ('Rock')
    }else if(result === 1){
        return ('Paper')
    }else if(result === 2){
        return ('Scissors')
    }
}


function gethumanChoice4(){
    let result = prompt(['Rock', ' Paper', ' Scissors']);
    if(result === 'Rock' || result === 'rock'){
        return ('Rock')
    }else if(result === 'Paper' || result === 'paper'){
        return ('Paper')
    }else if(result === 'Scissors' || result === 'scissors'){
        return ('Scissors')
    }
}
function getcomputerChoice5(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return ('Rock')
    }else if(result === 1){
        return ('Paper')
    }else if(result === 2){
        return ('Scissors')
    }
}


function gethumanChoice5(){
    let result = prompt(['Rock', ' Paper', ' Scissors']);
    if(result === 'Rock' || result === 'rock'){
        return ('Rock')
    }else if(result === 'Paper' || result === 'paper'){
        return ('Paper')
    }else if(result === 'Scissors' || result === 'scissors'){
        return ('Scissors')
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
        
    function playRound(humanChoice1, computerChoice1){
    if(humanChoice1 === computerChoice1){
        console.log('This round is a tie!')
    }else if(            
        (humanChoice1 === 'Rock' && computerChoice1 === 'Scissors')||
        (humanChoice1 === 'Scissors' && computerChoice1 ==='Paper')||
        (humanChoice1 === 'Paper' && computerChoice1 === 'Rock')
    ) {
        console.log('You win!!');
        humanScore++;
        console.log('Your score is : ' + humanScore);
    }else{
        console.log('You lose!!')
        computerScore++;
        console.log('Computers score is : ' + computerScore);
    }
}
// function gameWinner(computerScore, humanScore){
//     if(humanScore > computerScore){
//         console.log('You win the game!!')
//     }else if(computerScore > humanScore){
//         console.log('You lose the game!!')
//     }
// }

playRound(humanSelection1, computerSelection1);
playRound(humanSelection2, computerSelection2);
playRound(humanSelection3, computerSelection3);
playRound(humanSelection4, computerSelection4);
playRound(humanSelection5, computerSelection5);
}

const humanSelection1 = gethumanChoice1();
const computerSelection1 = getcomputerChoice1();
const humanSelection2 = gethumanChoice2();
const computerSelection2 = getcomputerChoice2();
const humanSelection3 = gethumanChoice3();
const computerSelection3 = getcomputerChoice3();
const humanSelection4 = gethumanChoice4();
const computerSelection4 = getcomputerChoice4();
const humanSelection5 = gethumanChoice5();
const computerSelection5 = getcomputerChoice5();


playGame();