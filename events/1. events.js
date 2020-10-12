const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('add', (x, y) => {
  return console.log(x + y);
});

eventEmitter.emit('add', 1, 2);
