let startTime, elapsedTime, timerInterval;
let running = false;

function startStop() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
    document.getElementById("startStop").innerText = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    running = true;
    document.getElementById("startStop").innerText = "Stop";
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  if (running) {
    let lapTime = elapsedTime;
    let lapItem = document.createElement("li");
    lapItem.innerText = formatTime(lapTime);
    document.getElementById("lapList").appendChild(lapItem);
  }
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  document.getElementById("display").innerText = formatTime(elapsedTime);
}

function formatTime(time) {
  let ms = time % 1000;
  time = (time - ms) / 1000;
  let secs = time % 60;
  time = (time - secs) / 60;
  let mins = time % 60;
  let hrs = (time - mins) / 60;

  return (
    pad(hrs) + ":" + pad(mins) + ":" + pad(secs)
  );
}

function pad(num) {
  return ("0" + num).slice(-2);
}
