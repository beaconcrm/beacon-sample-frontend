/*
* 🎉
* https://www.kirilv.com/canvas-confetti/
*/
import confetti from 'canvas-confetti';
import { assignIn, toNumber } from 'lodash';

const randomInRange = (min, max) => Math.random() * (max - min) + min;

export default (duration) => {

  const parsedDuration = toNumber(duration);
  const end = Date.now() + parsedDuration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 1301,
    colors: ['#012b3a', '#f5b743'],
  };

  const interval = setInterval(() => {
    const timeLeft = end - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / parsedDuration);

    confetti(assignIn({}, defaults, { particleCount, origin: { x: randomInRange(0.0, 0.5), y: Math.random() - 0.2 } }));
    confetti(assignIn({}, defaults, { particleCount, origin: { x: randomInRange(0.5, 1.0), y: Math.random() - 0.2 } }));
  }, 250);
};
