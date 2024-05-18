import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button[data-start]');
const inputWindow = document.querySelector('#datetime-picker');
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');

let countdown;
const DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topCenter',
        backgroundColor: 'red',
        messageColor: 'white',
        messageSize: '20',
      });
      btnStart.disabled = true;
    } else {
      countdown = selectedDates[0] - new Date();
      btnStart.disabled = false;
    }
  },
};
flatpickr(inputWindow, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', startCount);

function startCount() {
  btnStart.disabled = true;
  btnStart.style.background = 'black';
  btnStart.style.color = 'gray';
  inputWindow.disabled = true;

  const timerId = setInterval(() => {
    if (countdown >= 1000) {
      countdown -= 1000;
      let timeObject = convertMs(countdown);
      updateDisplay(timeObject);
    } else {
      clearInterval(timerId);
      iziToast.show({
        message: 'Time is up!',
        position: 'topCenter',
        backgroundColor: 'green',
        messageColor: 'white',
        messageSize: '20',
      });
      btnStart.disabled = false;
      inputWindow.disabled = false;
    }
  }, DELAY);
}

function updateDisplay(timeObject) {
  daysElement.textContent = String(timeObject.days).padStart(2, '0');
  hoursElement.textContent = String(timeObject.hours).padStart(2, '0');
  minutesElement.textContent = String(timeObject.minutes).padStart(2, '0');
  secondsElement.textContent = String(timeObject.seconds).padStart(2, '0');
}
