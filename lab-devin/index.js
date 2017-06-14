'use strict';

const fp = require('./lib/fp.js');

const main = module.exports = () => {
  let capIt = fp.map(process.argv, n => n.toUpperCase());
  console.log(capIt);
  return capIt;
};

main();
