import { langArray } from './languages.js';

let $language = document.querySelectorAll('input[name="lang"]');

for (let key of $language) {
  key.addEventListener('click', (e) => {
    let language = document
      .querySelector('input[name="lang"]:checked')
      .getAttribute('id')
      .toString();

    changeLanguage(language);
  });
}

function changeLanguage(language) {
  for (let key in langArray) {
    let elem = document.querySelector('.' + key);
    if (elem) {
      if (elem.getAttribute('value')) {
        elem.setAttribute('value', langArray[key][language])
      } else {
        elem.innerHTML = langArray[key][language];
      }
    }
  }
}
