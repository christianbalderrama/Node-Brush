/*
 * Requiring `dotenv` immediately is the first thing you need to do before
 * other things happen to your app.
 *
 * What this does when you require it is executes a command that gets the `.env`
 * file within the working directory and add it to the `process.env`
 */

require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  console.log('Production', process.env.NODE_ENV);
} else {
  console.log('Development', process.env.NODE_ENV);
}
