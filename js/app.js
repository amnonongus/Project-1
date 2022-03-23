// Make class 'Birds' as BUTTONS and have them appear 
//and disappear from screen

//Play button to start the game. Reset the score and restart timer.

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








// Function that runs the timer////////
function startTimer(duration, display) {
    display.innerText = duration;
     intervalId = setInterval(function () {
        duration--
        display.innerText = duration;

        if (duration === 0){
            clearInterval(intervalId);
            gameOver.style.visibility = 'visible';
            loseMessage.style.visibility = 'visible';
            
        }
       
        
    }, 1000);
}


// clickBirds.onclick = function (e) {
//     console.log(e.target);
//     document.querySelector(`#${e.target.id}`).style.visibility = 'hidden';
    
// }


            
        




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


playBtn.addEventListener('click', init);

document.querySelector('#play').addEventListener('click', handleStart);

function handleStart(e) {
    console.log(e.target.tagName);
}

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


gameOver.addEventListener('click', init); 



//PLAY button needs to start the game.

//player presses play, timer starts and birds start appearing.


// I need the birds(buttons) that appear and disappear off the scree
//incrementally. 

// need an if / else. IF the player clicks bird get point.
//ELSE if they miss lose point. 

//IF a player gets 10 points before timer runs out..WIN
//ELSE no 10 points before timer runs out...LOSE


//function that knows IF all the divs inside #clickable are clikced then you win 