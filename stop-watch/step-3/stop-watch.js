const stopWatchView = document.querySelector('#stop-watch-view');

let hundredth = 0;
let seconds = 0;
let minutes = 0;



function displayTime() {
    let secondString = seconds;
    if (seconds < 10) {
        secondString = '0' + seconds;
    }
    let minutesString = minutes;
    if (minutes < 10) {
        minutesString = '0' + minutes;
    }

    // stopWatchView.innerHTML = minutes + ':' + seconds + ':' + hundredth
    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundredth}`;
};


function handleTimeChange() {
    hundredth++;
    if (hundredth > 99) {
        hundredth = 0;
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
    }
    displayTime();
}

function startStopWatch() {
    setInterval(handleTimeChange, 10);
}

