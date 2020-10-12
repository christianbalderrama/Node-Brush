/**
 * `Promises` are created to avoid callback hell.
 *
 * In order to use `Promise` we have create an instance of it
 * that takes a function as it's parameter which consist of
 * `resolve` and `reject` which are also both functions.
 *
 * `resolve` - means that you are telling to the `Promise` that
 *             you are fulfilling the promise you made successfully.
 * `reject` - means that probably there's something wrong and you
 *            are not able to fulfill the promise.
 */
new Promise((resolve, reject) => {
  const done = true;
  if (done) {
    resolve(console.log('done'));
  } else {
    reject(console.log('not done'));
  }
});

/**
 * We first create variable done that takes boolean.
 * `checkDone` is a Promise variable and inside checks if
 * the `done` is `true` or `false`.
 *
 * If `done` is true it `resolves` else `rejects`
 */
const done = true;
const checkDone = new Promise((resolve, reject) => {
  let reason = '';
  if (done) {
    reason = 'Done';
    resolve(reason);
  } else {
    reason = 'Still working on something';
    reject(reason);
  }
});

/**
 * We then execute the callback functions `.then()` and `.catch()`
 * which is always given for `Promise`.
 *
 * If it goes to `.then()` it means that the Promise is fulfilled.
 * If it goes to the `.catch()` it means that there's something wrong.
 */
checkDone
    .then((value) => console.log('Value: ', value))
    .catch((error) => console.log('Error: ', error));


/**
 * `Promise` can also be combined with `Promise.all([])` and
 * takes an array of `Promises` as well as return an array
 * of `Promises` as well.
 *
 * `Promise.all()` is useful for scenarios such as:
 * You may want to wait all the request to finish before displaying
 * data in the screen.
 */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise2');
    resolve(1);
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('promise2');
    resolve(2);
  }, 5000);
});

Promise.all([promise1, promise2]).then(([res1, res2]) => {
  console.log('Results: ', res1, res2);
});
