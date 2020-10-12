let foo = null;
const bar = () => console.log('bar');
const baz = () => console.log('baz');

/**
 * Normal Event Loop that executes things line by line.
*/
// foo = () => {
//   console.log('foo');
//   bar();
//   baz();
// };
//
// foo();

/**
 * Event Loop + Message Queue
 * The `setTimeOut()` function is part of a `Message Queue`
 * and just like `Event Loop` it also have it's own stack.
 *
 * The difference is that the we don't have to wait for the
 * `setTimeout()` to finish, job of node is just to execute it.
 *
 * Key take away here is that the `setTimeout()` is an example
 * of `Message Queue` and it has it's own stack and node doesn't
 * care about it's stack. Node's job is to execute it, nothing more
 * nothing less, it doesn't care if it returns something or nothing.
 *
 * https://nodejs.dev/static/be55515b9343074d00b43de88c495331/966a0/call-stack-second-example.png
*/
// foo = () => {
//   console.log('foo');
//   setTimeout(bar, 0);
//   baz();
// };
//
// foo();

/**
 * Event Loop + Message Queue + ES6 Job Queue (Promises)
 *
 * Main reason why `Promises` are used is because the `Message Queue`
 * when it is executed, node doesn't give a damn when something is executed
 * if it returns something or it won't. `Promises` make sure that even if
 * something is executed in an `asynchronously` (fetching data, etc.)
 * It can still behave as if it is `synchronously`.
*/
foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) => {
    resolve('should be right after baz, before bar1');
  }).then((resolve) => console.log(resolve));
  baz();
};

foo();
