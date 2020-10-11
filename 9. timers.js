// Prints `2000` after 2 seconds.
setTimeout(() => {
  console.log('2000');
}, 2000);

const id = setTimeout(() => {
  console.log('hey');
  clearTimeout(id);
}, 2000);

/**
 * Most of the time `setInterval()` is being used when doing something
 * for a period of time but terminating it as well.
 *
 * For example, you are doing a timer app and waiting for the user
 * to click a button and you stop the counting.
 */
const test = setInterval(() => {
  let x = 0;
  while (x < 10) {
    x++;
    console.log('Value of x: ', x);
    if (x === 10) {
      return clearInterval(test);
    }
  }
}, 1000);
