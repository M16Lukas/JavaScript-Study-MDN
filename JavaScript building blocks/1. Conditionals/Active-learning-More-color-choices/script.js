'use strict';

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch(choice){
    case 'White':
      update('white', 'black');
      break;
    case 'Black':
      update('black', 'white');
      break;
    case 'Purple':
      update('purple', 'white');
      break;
    case 'Yellow':
      update('yellow', 'darkgray');
      break;
    case 'Psychedelic':
      update('lime', 'purple');
      break;
    default:
      update('white', 'black');
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}