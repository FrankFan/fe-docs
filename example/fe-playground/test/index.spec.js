import chai from 'chai';
import { describe, it } from 'mocha';
const expect = chai.expect;
import {
  unique,
  unique2,
  unique3,
  intersect,
  difference,
} from '../src/utis/arrayUtil';

const arrTest = [2, 4, 1, 5, 6, 2, 6, 5, 0];
const arrTest2 = [7, 6, 2, 0];
const arrTarget = [0, 1, 2, 4, 5, 6];
const arrTarget2 = [0, 2, 6];

describe('Array 数组操作', function() {
  describe('1.数组去重', function() {

    it('unique1: forEach+includes', () => {
      const result = unique(arrTest).sort();
      expect(result).to.eql(arrTarget); // loose equality .eql
    });

    it('unique2: forEach+indexOf', () => {
      const result = unique2(arrTest).sort();
      expect(result).to.eql(arrTarget);
    });

    it('unique2: forEach+filter', () => {
      const result = unique3(arrTest).sort();
      expect(result).to.eql(arrTarget);
    });
  });

  describe('2.数组求交集', function() {
    it('intersect: forEach twice', () => {
      const result = intersect(arrTest, arrTest2).sort();
      expect(result).to.eql(arrTarget2);
    });
  });

  describe('3.数组求差集', function() {
    it('difference: filter + includes', () => {
      const result = difference(arrTest, arrTest2).sort();
      expect(unique3(result)).to.eql([1,4,5]);
    });
  });
});