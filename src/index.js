import readlineSync from 'readline-sync';

/**
 * Greets user
 */
const greeting = () => {
    const name = readlineSync.question('May I have your name?');

    console.log(`Hello, ${name}!`);

    return name;
};

export default greeting;
