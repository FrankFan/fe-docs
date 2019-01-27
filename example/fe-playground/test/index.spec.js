import chai from 'chai';
import { describe, it } from 'mocha';
const expect = chai.expect;
import {
  unique,
  unique2,
  unique3,
  intersect,
  difference,
} from '../src/utils/arrayUtil';

import {
  getMaxDuplicate,
  hiuwen,
  fibonacci,
  getMaxDiff,
  getRandomStrByNum,
} from '../src/utils/algorithm';

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

describe('算法题', function() {
  describe('1.寻找出现次数做多的元素', function() {
    it('getMaxDuplicate', () => {
      const result = getMaxDuplicate('abz901idad8anziaqa2a');
      expect(result).to.equal(6);
    });
  });

  describe('2.判断是不是回文', () => {
    it('hiuwen', () => {
      // const huiwenStr = 'madam';
      const huiwenStr = '奶牛奶';
      const result = hiuwen(huiwenStr);
      expect(result).to.be.true;
    });
  });

  describe('3. fibonacci', () => {
    it('N 阶 fibonacci', () => {
      const target = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ];
      const result  = fibonacci(10);
      expect(result).to.eql(target);
    });
  });

  describe('4. getMaxDiff', () => {
    it('求一个正数组中的最大差值', () => {
      let arr = [8,9,1,2,1,0,6];
      const result = getMaxDiff(arr);
      console.log(result);
      expect(result).to.equal(9);
    });
  });

  describe('5. getRandomStrByNum', () => {
    it('随机生成指定长度的字符串', () => {
      const result = getRandomStrByNum(8);
      expect(result.length).to.equal(8);
      console.log(result);
    });
  });


});
