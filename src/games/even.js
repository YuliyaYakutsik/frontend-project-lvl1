import getRandomInteger from '../utils/getRandomInteger.js';
import start from '../start.js';

const description = 'Answer "yes" if number is even otherwise answer "no".';

/**
 * Checks if number is even
 * @param {Number} num
 * @returns {Boolean}
 */
const isEven = (num) => num % 2 === 0;

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
    const question = getRandomInteger(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    return { question, answer };
};

const even = () => start(description, getData);

export default even;
