import Bar from '../main/bar';

describe('Bar', () => {
  it('should add bar', () => {
    let b = new Bar('hello');
    expect(b.getText()).to.equal('bar hello bar');
  });
});
