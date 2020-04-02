import readlineSync from 'readline-sync';

const attemptsCount = 3;

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
const playGame = (description, getData) => {
  say('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');

  say(`Hello, ${userName}!`);

  say(description);

  const playRound = (attempt) => {
    if (attempt === attemptsCount) {
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

    playRound(attempt + 1);
  };

  playRound(0);
};

export default playGame;
