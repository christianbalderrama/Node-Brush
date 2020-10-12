const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
/**
 * Notes:
 * Running the file will result to variables using their defaults:
 * Where => PORT = 3000, NODE_ENV = 'development'
 *
 * Proper to provide the necessary values should be:
 * `PORT=9999 NODE_ENV=production node file.js`
 *
 * This assigns the values to `process.env` because `process.env` is an object
 * and can be accessed when `process` is started.
 *
 * Remember that the variables are case sensitive => node_env !== NODE_ENV
 */

if (env === 'production') {
  app.get('/production', (_, res) => {
    res.send('Production');
  });
} else {
  app.get('/development', (_, res) => {
    res.send('Development');
  });
}

app.listen(port, () => console.log(`Server is listening to port ${port}`));
