import Bar from './bar';
import axios from 'axios';

export default function foo() {
  return axios.get('/data/test.txt')
    .then(response => {
      let b = new Bar(response);
      return b.getText();
    })
    .catch(err => { console.error(err); });
}

// XXX: what does axios use for Promises?
// --> native or polyfill
