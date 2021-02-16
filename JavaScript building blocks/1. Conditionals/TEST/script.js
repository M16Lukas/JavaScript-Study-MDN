'use strict';

const section = document.querySelector('section');
let season = 'summer';
let response;

// Add your code here
if (season === 'summer'){
  response = 'Summer!!!';
} else {
  response = 'We don\'t know what season it is';
}
// Don't edit the code below here!

section.innerHTML = '';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);