import readlineSync from 'readline-sync';

/**
 * Gets user name
 */
const getUserName = () => readlineSync.question('May I have your name?');

export default getUserName;
