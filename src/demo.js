import foo from 'Foo';

document.querySelector('button').on('click', () => {
  foo().then(text => alert(text));
});
