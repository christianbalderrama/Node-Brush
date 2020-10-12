/**
 * Terminating the app using `process.exit()`
 * will exit the app as you can see here.
 *
 * You will not see the last console.log('foo')
 * in the terminal because the program is already
 * terminated.
 */
console.log('starting the app');

console.log('terminating ...');

process.exit(0);

console.log('Foo');
