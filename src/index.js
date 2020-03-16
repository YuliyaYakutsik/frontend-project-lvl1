import getUserName from './utils/getUserName.js';
import greeting from './utils/greeting.js';

/**
 * Launches game
 */
const launchGame = () => {
    console.log('Welcome to the Brain Games!');

    const userName = getUserName();

    greeting(userName);
};

export default launchGame;
