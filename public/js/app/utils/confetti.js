/*
* 🎉
* https://www.kirilv.com/canvas-confetti/
*/
import confetti from 'canvas-confetti';
import { assignIn, toNumber, get } from 'lodash';

const randomInRange = (min, max) => Math.random() * (max - min) + min;
const colourMap = {
  Red: '#FF0000',
  Black: '#000000',
  Blue: '#012b3a',
  Orange: 'f5b743',
};

export default (duration, colour) => {

  const confettiColour = colour ? [get(colourMap, colour)] : ['#012b3a', '#f5b743'];

  const parsedDuration = toNumber(duration) || 1000;
  const end = Date.now() + parsedDuration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 1301,
    colors: confettiColour,
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
