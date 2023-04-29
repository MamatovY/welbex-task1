const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timeInterval;

  return (seconds) => {
    clearInterval(timeInterval);

    const startTime = Date.now();
    const endTime = startTime + (seconds * 1000);

    timeInterval = setInterval(() => {
      const remainingTime = Math.round((endTime - Date.now()) / 1000);

      if (remainingTime >= 0) {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      } else {
        clearInterval(timeInterval);
        timerEl.textContent = '00:00:00';
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
