import getRandomInteger from '../utils/getRandomInteger.js';
import playGame from '../playGame.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

/**
 * Calculates maths expression
 * @param {Number} num1
 * @param {Number} num2
 * @param {Number} signType
 * @returns {Object}
 */
const calculateExpression = (num1, num2, signType) => {
  switch (signType) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      return null;
  }
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const signId = getRandomInteger(0, operations.length - 1);
  const signType = operations[signId];
  const question = `${num1} ${signType} ${num2}`;
  const answer = calculateExpression(num1, num2, signType).toString();

  return { question, answer };
};

const startCalcGame = () => playGame(description, getData);

export default startCalcGame;
