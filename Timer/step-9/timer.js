export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;

    function displayTime() {
        time--;
        timeView.innerText = time;

        if (time == 0)
            stopTimer();
    }


    function startTimer() {
        console.log('timer is started');
        setInterval(displayTime, 1000)
    }

    function deleteTimer() {
        timerElement.remove();
    }


    function createStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'start';
        startButton.addEventListener('click', startTimer);
        timerElement.appendChild(startButton);
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTimer);
        timerElement.appendChild(deleteButton);
    }

    function createTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView)
    }

    this.createTimer = function () {
        console.log('create timer', time);

        timerElement = document.createElement('div');
        timerElement.innerText = time

        createTimeView();
        timeView.innerText = time;

        createStartButton();
        createDeleteButton();


        document.querySelector('#timers-container').appendChild(timerElement);
    };
}
