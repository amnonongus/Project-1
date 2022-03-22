// Make class 'Birds' as BUTTONS and have them appear 
//and disappear from screen

//Play button to start the game. Reset the score and restart timer.

//global variables
const score = 0;
const timer = 30;
const winningScore = 10;
const birds = document.querySelector('#clickable');
const playBtn = document.querySelector('#play');
const bottomEls = document.querySelector('#timer');
const bottomEltwo = document.querySelector('#score');




// Function that runs the timer////////
function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer % 2, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = ":" + seconds;

        if (--timer < 0) {
            timer = 0; 
            
        }
    }, 1000);
}



playBtn.onclick = function () {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
///End of timer function/////////


//set up eventlisteners  
document.querySelector('#clickable').addEventListener('click', handleClick);

function handleClick(e) {
    console.log(e.target.tagName);
}


playBtn.addEventListener('click', init);

document.querySelector('#play').addEventListener('click', handleStart);

function handleStart(e) {
    console.log(e.target.tagName);
}

function init(e){
    console.log('working');
    playBtn.onclick = function () {
        bottomEls.style.visibility = 'visible';
        bottomEltwo.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
        
      
    }
};

// function renderMessage(winner){
//     if(bottomEltwo === 10){
//         return 'Wow you r so guud'
//     } else {
//         return 'hOw Do yOu LooOoOoOosE!'
//     }
// }

// function checkWinner (){
//     if(score === 10){
//         return true
//     } else if (bottomEls === 0){
//         return false
//     }


//PLAY button needs to start the game.

//player presses play, timer starts and birds start appearing.


// I need the birds(buttons) that appear and disappear off the scree
//incrementally. 

// need an if / else. IF the player clicks bird get point.
//ELSE if they miss lose point. 

//IF a player gets 10 points before timer runs out..WIN
//ELSE no 10 points before timer runs out...LOSE


    





