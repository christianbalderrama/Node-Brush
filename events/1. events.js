const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/**
 * We declare an event called `add` that if there's an event
 * fired name `add` we execute this callback/function that has
 * 2 parameters which is x and y that returns the sum of numbers.
 */
eventEmitter.on('add', (x, y) => {
  return console.log(x + y);
});

/**
 * We emit an event named `add` using the `emit` keyword from the
 * `eventEmitter` which executes the function above.
 */
eventEmitter.emit('add', 1, 2);
