function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timersContainers = document.querySelector('#timers-container');

        timersContainers.innerHTML += '<div>new timer</div>';
        console.log('create timer');
    }
}

export default Timer;