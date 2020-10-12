
/**
 * `setImmediate()` is similar to `setTimeout()` in execution.
 * They both run after the Event Loop and `process.nexTick()`
 *
 * However, `setTimeout()` always comes first before `setImmediate()`
 * assuming that the passed value to `setTimeout()` is `0`
 *
 * Based from my testing, `setTimeout()` always comes first before
 * `setImmediate()` if the value being passed is < 10ms.
 */
const foo = () => {
  console.log('foo');
};

process.nextTick(() => {
  console.log('nextTick()');
});

setTimeout(() => {
  console.log('setTimeout()');
}, 10);

setImmediate(() => {
  console.log('setImmediate()');
});

foo();
