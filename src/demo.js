import foo from 'main/Foo';

document.querySelector('button').onclick = () => {
  foo().then(text => alert(text));
};
