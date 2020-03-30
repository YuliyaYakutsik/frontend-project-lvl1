import getRandomInteger from '../utils/getRandomInteger.js';
import playGame from '../playGame.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

/**
 * Generates maths expression
 * @param {Number} num1
 * @param {Number} num2
 * @param {Number} signType
 * @returns {Object}
 */
const getExpression = (num1, num2, signType) => {
  switch (signType) {
    case 1:
      return {
        question: `${num1} + ${num2}`,
        result: num1 + num2,
      };

    case 2:
      return {
        question: `${num1} - ${num2}`,
        result: num1 - num2,
      };

    case 3:
      return {
        question: `${num1} * ${num2}`,
        result: num1 * num2,
      };

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
  const signId = getRandomInteger(1, operations.length);
  const expression = getExpression(num1, num2, signId);
  const { question } = expression;
  const answer = expression.result.toString();

  return { question, answer };
};

const calc = () => playGame(description, getData);

export default calc;
