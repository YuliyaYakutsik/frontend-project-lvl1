import getRandomInteger from '../utils/getRandomInteger.js';
import start from '../start.js';

const description = 'Find the greatest common divisor of given numbers.';

/**
 * Calculates the greatest common divisor
 * param {Number} num1
 * parama {Number} num2
 * @returns {String}
 */
const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;

  while (y) {
    const tempNum = y;
    y = x % y;
    x = tempNum;
  }

  return x;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2).toString();

  return { question, answer };
};

const gcd = () => start(description, getData);

export default gcd;
