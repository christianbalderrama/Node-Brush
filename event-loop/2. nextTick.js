/**
 * `process.nextTick()` is executed after the `Event Loop`
 * Example below executes the `foo()` function and logs `foo`
 * it then goes and execute the `process.nextTick()` before
 * `setTimeout()` function.
 *
 * Moving the `setTimeout()` does not matter as well.
 */
const foo = () => {
  console.log('foo');
};

process.nextTick(() => {
  console.log('I should come first before setTimeout()');
});

setTimeout(() => {
  console.log('I\'m set time out');
}, 0);

foo();
