'use strict';


const myMethods = module.exports = {};

myMethods.map = function (list, cb) {
  return Array.prototype.map.call(list, cb);
};

myMethods.filter = function (list, cb) {
  return Array.prototype.filter.call(list, cb);
};

myMethods.reduce = function (list, cb) {
  return Array.prototype.reduce.apply(list, cb);
};

myMethods.concat = function (arr1, arr2) {
  return Array.prototype.concat.apply(arr1, arr2);
};

myMethods.splice = function (list, cb) {
  return Array.prototype.splice.call(list, cb);
};
