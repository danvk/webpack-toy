import foo from '../main/foo';
import {expect} from 'chai';

describe('foo', () => {
  it('should request test.txt', () => {
    let out = foo();
    return out.then(text => {
      expect(text).to.equal('bar Hello World! bar');
    });
  });
});
