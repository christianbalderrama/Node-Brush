const express = require('express');
const app = express();
const port = 1234;

app.get('/', (_, res) => {
  res.send('Hi!');
  process.exit(0); // https://nodejs.org/api/process.html#process_exit_codes
});

app.listen(port, () => console.log(`Server is listening to port ${port}`));
