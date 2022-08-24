function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timersContainers = document.querySelector('#timers-container');

        const timerElement = document.createElement('div');
        timerElement.innerText = 'new timer with create element';

        timersContainers.appendChild(timerElement);
        // timersContainers.innerHTML += '<div>new timer</div>';
        // console.log('create timer');
    }
}

export default Timer;