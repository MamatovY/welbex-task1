const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function createTimerAnimator() {
  if (seconds >= 0) {
    --seconds
    if (minute >= 0 && seconds < 0) {
      seconds = 59;
      minute -= 1;
    }

    if (hours >= 0 && minute < 0) {
      minute = 59;
      hours -= 1;
    }
  }
  timerEl.textContent = zeroPadding(hours, 2) + ':' + zeroPadding(minute, 2) + ':' + zeroPadding(seconds, 2);

};

let hours = 1
let minute = 1
let seconds = 2
let timer

buttonEl.addEventListener('click', () => {
  clearInterval(timer)
  const inputEl = document.querySelector('input').value
  hours = Math.floor(inputEl / 60 / 60)
  minute = Math.floor(inputEl / 60) - (hours * 60)
  seconds = inputEl % 60
  timer = setInterval(createTimerAnimator, 1000)
})


createTimerAnimator()



function zeroPadding(num, digit) {
  var zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}