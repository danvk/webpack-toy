import foo from 'main/Foo';

document.querySelector('button').on('click', () => {
  foo().then(text => alert(text));
});
