const hourEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hourEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
