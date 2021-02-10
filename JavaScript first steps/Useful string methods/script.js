'use strict';

let list = document.querySelector('.output ul');
list.innerHTML = '';

let greetings = [
                'Happy Birthday!',
                'Merry Christmas my love',
                'A happy Christmas to all the family',
                'You\'re all I want for Christmas',
                'Get well soon'];

for (let greeing of greetings) {
    let input = greeing;
    // Your conditional test needs to go inside the parentheses
    // in the line below, replacing what's currently  there
    if (greeing) {
        let result = input;
        let listitem = document.createElement('li');
        listitem.textContent = result;
        list.appendChild(listitem);
    }
}