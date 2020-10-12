const ferrari = {
  country: 'Italy',
  founder: 'Enzo Ferrari',
};

const lamborghini = {
  country: 'Italy',
  founder: 'Ferruccio Lamborghini',
};

const bmw = {
  country: 'Germany',
  founder: [
    'Rapp Motorenwerke',
    'Bayerische Flugzeugwerke',
    'Fahrzeugfabrik Eisenach',
  ],
};

const audi = {
  country: 'Germany',
  founder: 'August Horch',
};

const maserati = {
  country: 'Italy',
  founder: 'Alfieri Maserati',
};

const mclaren = {
  country: 'United Kingdom',
  founder: 'Bruce McLaren',
};

const porsche = {
  country: 'Germany',
  founder: 'Ferdinand Porsche',
};

/*
 * 2 ways of exporting multiple variables/functions
 *
 * 1. Exporting as whole object and assigning the properties.
 * 2. Assigning property literally to the exports module.
 *
 * I think the difference here is first we are assigning the properties
 * before exporting them, and the other one is assigning the properties
 * literally one by one to the `exports` module.
 *
 * My personal preference is using the `module.exports` when exporting.
 * Mainly because of code readability and I rarely see the other implementation.
*/
module.exports = {
  mclaren,
  porsche,
  ferrari,
  lamborghini,
  bmw,
  audi,
  maserati,
  test: {},
};

// exports.mclaren = mclaren;
// exports.ferrari = ferrari;
// exports.porsche = porsche;
// exports.maserati = maserati;
// exports.bmw = bmw;
// exports.lamborghini = lamborghini;
// exports.audi = audi;
// exports.test = {};
