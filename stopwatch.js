let seconds = 0;
let tens = 0;
let timerId;

function startTimer() {
  timerId = setInterval(function() {
    seconds++;
    if (seconds >= 10) {
      seconds = 0;
      tens++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  seconds = 0;
  tens = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("tens").innerHTML = tens;
}

window.onload = function() {
  startTimer();
};