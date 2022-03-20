// Make class 'Birds' as BUTTONS and have them appear 
//and disappear from screen

//Play button to start the game. Reset the score and restart timer.

//ti

let score; //score based on button clicks
let timer; //timer that starts @ 20 seconds and counts down


const madeShot = document.querySelector('#score');
const replayBtn = document.querySelector('#play"')


//setup event listeners

document.querySelector('#play').addEventListener('click', handleClick);
