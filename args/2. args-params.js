/**
 * Now you'll probably asking why this is important.
 *
 * In the server/deployment environment everything runs
 * in the cli (Command Line Interface) or just the terminal.
 *
 * If everything can only be run via terminal then the only way
 * to pass information is via the terminal as well.
 *
 * And the intuition is to pass important informations that
 * can be processed further when they are received.
 */

const args = process.argv;
const nodePath = args[0];
const filePath = args[1];
const params = args[2];

console.log('Node path: ', nodePath);
console.log('File path: ', filePath);
console.log('Parameters: ', params);

/**
 * You can put params as follows:
 * `node file.js x=100 y=200`
 *
 * It should log the parameters x and y respectively.
 */
