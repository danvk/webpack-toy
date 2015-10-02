import Bar from '../main/bar';
import {expect} from 'chai';

describe('Bar', () => {
  it('should add bar', () => {
    let b = new Bar('hello');
    expect(b.getText()).to.equal('bar hello bar');
  });
});
