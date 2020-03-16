import readlineSync from 'readline-sync';
import greeting from './index.js';

const requiredSuccessAttempts = 3;

/**
 * Says something to user
 * @param {String} text
 */
const say = (text = '') => console.log(text);

/**
 * Starts new game
 * @param {String} description - description of the game
 * @param {Function} getData - returns question and correct result
 */
const start = (description, getData) => {
    const userName = greeting();

    say(description);

    const launch = (attempt) => {
        if (attempt === requiredSuccessAttempts) {
            say(`Congratulations, ${userName}!`);

            return;
        }

        const { question, answer } = getData();

        say(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== answer) {
            say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n`);
            say(`Let's try again, ${userName}!`);

            return;
        }

        say('Correct!');

        launch(attempt + 1);
    };

    launch(0);
};

export default start;
