let countdownInterval;
let countDownDate;

// Get the timer value elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Get the button elements
const setTimerBtn = document.getElementById("set-timer-btn");
const resetTimerBtn = document.getElementById("reset-timer-btn");

// Set the click event listeners for the buttons
setTimerBtn.addEventListener("click", setTimer);
resetTimerBtn.addEventListener("click", resetTimer);

function setTimer() {
  const days = parseInt(prompt("Enter the number of days:")) || 0;
  const hours = parseInt(prompt("Enter the number of hours:")) || 0;
  const minutes = parseInt(prompt("Enter the number of minutes:")) || 0;
  const seconds = parseInt(prompt("Enter the number of seconds:")) || 0;

  // Set the countdown date
  countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + days);
  countDownDate.setHours(countDownDate.getHours() + hours);
  countDownDate.setMinutes(countDownDate.getMinutes() + minutes);
  countDownDate.setSeconds(countDownDate.getSeconds() + seconds);

  // Update the countdown every second
  countdownInterval = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countDownDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the time remaining
    daysElement.innerText = daysRemaining.toString().padStart(2, "0");
    hoursElement.innerText = hoursRemaining.toString().padStart(2, "0");
    minutesElement.innerText = minutesRemaining.toString().padStart(2, "0");
    secondsElement.innerText = secondsRemaining.toString().padStart(2, "0");

    // Check if the countdown is finished
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      daysElement.innerText = "00";
      hoursElement.innerText = "00";
      minutesElement.innerText = "00";
      secondsElement.innerText = "00";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(countdownInterval);
  daysElement.innerText = "00";
  hoursElement.innerText = "00";
  minutesElement.innerText = "00";
  secondsElement.innerText = "00";
}
