import getRandomInteger from '../utils/getRandomInteger.js';
import playGame from '../playGame.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

/**
 * Calculates nth element of progression
 * param {Number} startElement
 * parama {Number} step
 * parama {Number} idx
 * @returns {Number}
 */
const getProgressionElement = (startElement, step, idx) => startElement + step * idx;

/**
 * Generates progression string
 * param {Number} startElement
 * parama {Number} step
 * parama {Number} missedIdx
 * parama {Number} quantity
 * @returns {String}
 */
const getProgression = (startElement, step, quantity) => {
  const progression = [];

  for (let i = 0; i < quantity; i += 1) {
    const elementValue = getProgressionElement(startElement, step, i);

    progression.push(elementValue);
  }

  return progression;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const progressionStep = getRandomInteger(1, 7);
  const progressionStartElement = getRandomInteger(1, 25);
  const progressionMissedIdx = getRandomInteger(0, progressionLength - 1);
  const progression = getProgression(progressionStartElement, progressionStep, progressionLength);

  progression[progressionMissedIdx] = '..';

  const question = progression.join(' ');
  const answer = getProgressionElement(
    progressionStartElement,
    progressionStep,
    progressionMissedIdx,
  ).toString();

  return { question, answer };
};

const progression = () => playGame(description, getData);

export default progression;
