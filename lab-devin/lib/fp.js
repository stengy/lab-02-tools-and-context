'use strict';


const myMethods = module.exports = {};

myMethods.map = function (list, cb) {
  return Array.prototype.map.call(list, cb);
};

myMethods.filter = function (list, cb) {
  return Array.prototype.filter.call(list, cb);
};
