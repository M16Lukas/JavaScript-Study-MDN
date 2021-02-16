'use strict';

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  // A real examples : if...elseif...else
  
  if (choice === 'sunny') {
    para.textContent = 'sunny day';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down';
  } else if (choice === 'overcast') {
    para.textContent = 'It ins\'t raining';
  } else {
    para.textContent = '';
  }
}
