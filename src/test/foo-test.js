import foo from '../main/foo';

describe('foo', () => {
  it('should request test.txt', () => {
    let out = foo();
    return out.then(text => {
      expect(text).to.equal('bar Hello World! bar');
    });
  });
});
