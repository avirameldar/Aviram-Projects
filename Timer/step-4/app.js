import Timer from './timers.js';

// const t1 = new Timer(50);
// console.log('timer', t1);

document.querySelector('#create-timer').addEventListener('click', addTimer)
const timerInput = document.querySelector('#time-input')
function addTimer() {
    console.log('add new timer');
    const initialTime = document.querySelector('#time-input').value;
    console.log('value from input', initialTime);
}