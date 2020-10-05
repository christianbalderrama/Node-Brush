// const car = require('./files/lib2');
const {
  mclaren,
  porsche,
  ferrari,
  lamborghini,
  audi,
  bmw,
  maserati,
  test,
} = require('./files/lib');

console.log('McLaren: ', mclaren);
console.log('Porsche: ', porsche);
console.log('Ferrari: ', ferrari);
console.log('Lamborghini: ', lamborghini);
console.log('Audi: ', audi);
console.log('BMW: ', bmw);
console.log('Maserati: ', maserati);
console.log('Test: ', test);
// console.log('Car: ', car);

// Commenting the car references above and trying:
// const { car } = require('./files/lib2');
// console.log('It doesn\'t work this way: ', car);
