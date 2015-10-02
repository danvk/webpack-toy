import foo from 'main/foo';

document.querySelector('button').onclick = () => {
  foo().then(text => alert(text));
};
