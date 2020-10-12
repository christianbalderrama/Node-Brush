const express = require('express');
const app = express();
const port = 1234;

/**
 * Here we started a simple http server in port `1234`
 * using `express` and we are declaring an endpoint `/`
 *
 * Don't worry if you don't understand http server or express
 * just remember that this just fires up a server that's it.
 * We'll dig about this stuff later on.
 *
 * When going to the browser and type `localhost:1234/`
 * you will see in the screen displaying `Hi` and
 * this also terminates the app.
 */

app.get('/', (_, res) => {
  res.send('Hi!');
  process.exit(0); // https://nodejs.org/api/process.html#process_exit_codes
});

app.listen(port, () => console.log(`Server is listening to port ${port}`));
