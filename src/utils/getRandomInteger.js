/**
 * Generates random number
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};

export default getRandomInteger;
