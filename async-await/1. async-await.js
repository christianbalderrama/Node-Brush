/**
 * Standard `Promise` function that mimics an external request
 * and returns an array of numbers.
 * @return {[Int]}
 */
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 10000);
  });
};

/**
 * Instead of using `Promise.all()` to wait for a response.
 * We instead use async/await to this function.
 *
 * This means that it won't return `console.log(data)`
 * unless the `fetchData()` function don't return something/
 *
 * It waits for something before it execute return.
 */
const doSomething = async () => {
  const data = await fetchData();
  return console.log(data);
};

doSomething();
