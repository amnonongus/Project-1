//Array of loss condition messages that will be randomized
//when the timer runs out.
const lossMessages = [
    'lol how do you looooooose',
    'you realize this game is ez rite',
    '...bruh',
    'this is awkward',
    'ok maybe try another game',
    'My dad can do this and he\'s like 80.',
    '??????????',
];

//global variables
const score = document.querySelector('#point');
const birds = document.querySelector('#clickable');
const clickBirds = Array.from(document.querySelectorAll('.bird'))
const playBtn = document.querySelector('#play');
const bottomEls = document.querySelector('#timer');
const bottomEltwo = document.querySelector('#score');
const gameOver = document.querySelector('#tryAgain');
const loseMessage = document.querySelector('#loseMessage');
const winMessage = document.querySelector('#winMessage');
const instruct = document.querySelector('#instructions');
let intervalId;

    

//Start timer function, with loss conditions and a clear interval
//attached.
function startTimer(duration, display) {
    display.innerText = duration;
     intervalId = setInterval(function () {
        duration--
        display.innerText = duration;

        if (duration === 0){
            clearInterval(intervalId);
            gameOver.style.visibility = 'visible';
            loseMessage.style.visibility = 'visible';
            clickBirds.forEach(bird => bird.style.visibility = 'hidden');
            loseMessage.innerHTML = lossMessages[Math.floor(Math.random() * lossMessages.length)]
            
        }
    }, 1000);
}


//sets the timer value
function setTimer () {
    let fiveMinutes = 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
///End of timer function/////////


//set up eventlisteners  
document.querySelector('#clickable').addEventListener('click', handleClick);

function handleClick(e) {
    console.log(e.target.className);
    if (e.target.className === 'bird'){
        document.querySelector(`#${e.target.id}`).style.visibility = 'hidden';
    }
    checkWinner()
}


//This is the play button when screen is loaded
playBtn.addEventListener('click', init);
document.querySelector('#play').addEventListener('click', handleStart);

function handleStart(e) {
    console.log(e.target.tagName);
}


//Initialize function that renders the original state of the game.
function init(e){
    console.log('working');
        bottomEls.style.visibility = 'visible';
        // bottomEltwo.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
        clickBirds.forEach(bird => bird.style.visibility = 'visible');
        loseMessage.style.visibility = 'hidden';
        gameOver.style.visibility = 'hidden';
        winMessage.style.visibility = 'hidden';
        instruct.style.visibility = 'hidden';
        setTimer()     
    
};

//function that checks to see if all birds have been clicked. 
//If so, return win condition.
function checkWinner (){
    let hiddenBirds = 0
    for (i = 0; i <= clickBirds.length - 1; i++){
    if (clickBirds[i].style.visibility === 'hidden'){
        hiddenBirds += 1 
        console.log(hiddenBirds)
    } if (hiddenBirds === clickBirds.length){
        clearInterval(intervalId);
        gameOver.style.visibility = 'visible';
        winMessage.style.visibility = 'visible';
        

  }
 }
}

// onclick for "play again" button, returning to game to init state.
gameOver.addEventListener('click', init); 
