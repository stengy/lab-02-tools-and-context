'use strict';

const expect = require('expect');
const functo = require('../lib/fp.js');

describe('method tests', () => {

  describe('map test', () => {
    it('should return [4,6,8]', () => {
      let result = functo.map([2,3,4], n => n *2);
      expect(result).toEqual([4,6,8]);
    });

    it('should return [1,2,3]', () => {
      let result = functo.map([2,4,6], n => n / 2);
      expect(result).toEqual([1,2,3]);
    });
  });

  describe('filter tests', () => {
    it('should return [love]', () => {
      let result = functo.filter(['sad','day','but','love'], n => n.length > 3);
      expect(result).toEqual(['love']);
    });

    it('should return [45]', () => {
      let result = functo.filter([23,45,454,4564,90,0], n => n > 30 && n < 50);
      expect(result).toEqual([45]);
    });
  });

  describe('reduce tests', () => {
    it('should return 420', () => {
      let result = functo.reduce([210,2], [(a,c) => a * c]);
      expect(result).toEqual(420);
    });

    it('should return 1337', () => {
      let result = functo.reduce([500,2], [(a,c) => a * c + 337]);
      expect(result).toEqual(1337);
    });
  });

  describe('concat tests', () => {
    it('should return [1,2,3,4,5,6]', () => {
      let result = functo.concat([1,2,3], [4,5,6]);
      expect(result).toEqual([1,2,3,4,5,6]);
    });

    it('should return ["happy", "go", "lucky"]', () => {
      let result = functo.concat(['happy','go'], ['lucky']);
      expect(result).toEqual(['happy', 'go', 'lucky']);
    });
  });

});
