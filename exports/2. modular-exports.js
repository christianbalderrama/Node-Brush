const {
  porsche,
  ferrari,
  ...rest
} = require('./files/lib');

/**
 * Here, we are trying to import things when we want to, there's still other
 * stuffs inside the file but we don't get them.
 *
 * Logging the `rest` using the spread operator then shows the other car
 * manufacturer informations inside the file which is also exported.
 * @type {String}
 */
console.log('Ferrari: ', ferrari);
console.log('Porsche: ', porsche);
console.log('Rest: ', rest);
