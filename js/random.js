/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

 // Math.floor(Math.random() * (6 - 1 + 1)) + 1;

const randomNumber = (lower, upper) => {
  // Check if the input arguments are numbers
  // if ( isNaN(lower) || isNan(upper) ) {
  //   throw Error('Both arguments must be numbers.')
  // }
  const random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return random;
};


// Call the function and pass it different values
randomNumber(3,10);
randomNumber(50,100);

console.log( `${randomNumber(10,100)} is a random number between 10 and 100.`)
