import exprEval from 'expr-eval';
import getRandomInteger from '../utils/getRandomInteger.js';
import start from '../start.js';

const description = 'What is the result of the expression?';

/**
 * Generates maths sign
 * @param {Number} number
 * @returns {String}
 */
const getRandomSign = (number) => {
    switch (number) {
    case 1:
        return '+';

    case 2:
        return '-';

    case 3:
        return '*';

    default:
        return false;
    }
};

/**
 * Generates maths expression
 * @returns {String}
 */
const getExpression = () => {
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 100);
    const signId = getRandomInteger(1, 3);
    const sign = getRandomSign(signId);

    return `${num1} ${sign} ${num2}`;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
    const question = getExpression();
    const { Parser } = exprEval;
    const parser = new Parser();
    const expression = parser.parse(question);
    const answer = expression.evaluate().toString();

    return { question, answer };
};

const calc = () => start(description, getData);

export default calc;
