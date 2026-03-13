const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    //if not running
    if(!isRunning) {
        startTime = Date.now() - elapsedTime; //start the stopwatch from where it stopped (prevents time after being stopped from going to 0 after starting again)
        timer = setInterval(update, 10); //repeat every 10ms
        isRunning = true; //mark as running
    }
}

function stop() {
    // if currently running
    if(isRunning) {
        clearInterval(timer); //stop counting
        elapsedTime = Date.now() - startTime; //calculates how long the stopwatch has run
        isRunning = false; //mark as not running
    }
}

function reset() {
    clearInterval(timer); //stop counting
    startTime = 0; //reset start time
    elapsedTime = 0; //reset elapsed time
    isRunning = false; //mark not running
    display.textContent = "00:00:00:00" 
    
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; //how much time has passed since the stopwatch started

    //converting milliseconds into real time
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    //ensures numbers have 2 digits
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    
}