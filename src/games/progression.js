import getRandomInteger from '../utils/getRandomInteger.js';
import playGame from '../playGame.js';

const description = 'What number is missing in the progression?';
const progressLength = 10;

/**
 * Calculates nth symbol of progression
 * param {Number} startNum
 * parama {Number} dif
 * parama {Number} idx
 * @returns {Number}
 */
const getProgressionSymbol = (startNum, dif, idx) => startNum + dif * (idx - 1);

/**
 * Generates progression string
 * param {Number} startNum
 * parama {Number} dif
 * parama {Number} missedIdx
 * parama {Number} quantity
 * @returns {String}
 */
const getProgression = (startNum, dif, quantity) => {
  const progression = [];

  for (let i = 1; i <= quantity; i += 1) {
    const symbolValue = getProgressionSymbol(startNum, dif, i);

    progression.push(symbolValue);
  }

  return progression;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const progressDif = getRandomInteger(1, 7);
  const progressStart = getRandomInteger(1, 25);
  const progressMissedIdx = getRandomInteger(1, progressLength);
  const progression = getProgression(progressStart, progressDif, progressLength);

  progression[progressMissedIdx - 1] = '..';

  const question = progression.join(' ');
  const answer = getProgressionSymbol(progressStart, progressDif, progressMissedIdx).toString();

  return { question, answer };
};

const progression = () => playGame(description, getData);

export default progression;
