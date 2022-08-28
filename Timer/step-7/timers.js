function timer(initialTime) {
    let timerElement;

    this.initialTime = initialTime;

    this.deleteTimer = function () {
        console.log('you want to delete somthing', timerElement);
        timerElement.remove();
    }

    this.createTimer = function () {
        const timersContainers = document.querySelector('#timers-container');

        this.timerElement = document.createElement('div');

        const startButton = document.createElement('button')
        startButton.innerText = 'Start';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', this.deleteTimer)

        timerElement.innerText = 'this.initialTime';
        timerElement.appendChild(startButton);
        timerElement.appendChild(deleteButton);
        timerElement.appendChild(timerElement);


        // timersContainers.innerHTML += '<div>new timer</div>';
        // console.log('create timer');
    }
}

export default timer;