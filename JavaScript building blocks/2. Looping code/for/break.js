'use strict';

const contants = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para  = document.querySelector('p');
const input = document.querySelector('input');
const btn   = document.querySelector('button');

btn.addEventListener('click', () => {
  let searchName = input.value;
  input.value = '';
  input.focus();

  for (let i = 0; i < contants.length; i++) {
    let splitContants = contants[i].split(':');
    if (splitContants[0] === searchName) {
      para.textContent = `${splitContants[0]} \'s number is ${splitContants[1]}.`;
      break;
    } else {
      para.textContent = 'Contact not found';
    }
  }
});