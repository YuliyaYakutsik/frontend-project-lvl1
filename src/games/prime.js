import getRandomInteger from '../utils/getRandomInteger.js';
import start from '../start.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;

/**
 * Checks if number is prime
 * param {Number} num
 * @returns {Boolean}
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const question = getRandomInteger(minNumber, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const progression = () => start(description, getData);

export default progression;
