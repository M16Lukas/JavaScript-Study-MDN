'use strict';

// Function : creates a new paragraph and append it to the bottum of the HTML body.
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

/*
    1. Get references to all the buttons on the page and sort them in an array.
    2. Loop through all the buttons and add a click event listener to each one.

    When any button is pressed, the createParagraph() function will be run.
*/

// 모든 <button>태그를 List 형태로 buttons 변수에 저장한다.
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}
