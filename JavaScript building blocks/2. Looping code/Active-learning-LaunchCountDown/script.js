'use strict';

const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
for(i ; i >= 0; i--){
  const para = document.createElement('p');
  if (i === 0){
    para.textContent = 'Blast off!!';
  } else {
    para.textContent = `카운트 다운 : ${i}`;
  }
  output.appendChild(para);
}