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


});
