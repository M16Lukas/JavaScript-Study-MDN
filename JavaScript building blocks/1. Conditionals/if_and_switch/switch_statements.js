'use strict';

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  // A real examples : if...elseif...else
  switch(choice) {
    case 'sunny':
      para.textContent = 'sunny day';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down';
      break;
    case 'overcast':
      para.textContent = 'It ins\'t raining';
      break;
    default:
      para.textContent = '';
  }
}
