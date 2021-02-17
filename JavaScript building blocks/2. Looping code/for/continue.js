'use strict';

const input = document.querySelector('input');
const btn   = document.querySelector('button');
const para  = document.querySelector('p');

btn.addEventListener('click', () => {
  let num = input.value;
  input.value = '';
  input.focus();

  for (let i = 0; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }

    para.textContent += `${i} `;
  }
});
