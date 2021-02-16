'use strict';

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;

list.innerHTML = '';
totalBox.textContent = '';

// Number 1
let products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (let i = 0; i < products.length; i++) {  // Number 2
    // Number 3
    let subArray = products[i].split(':');
    let name = subArray[0];
    let price = Number(subArray[1]);

    // Number 4
    total += price;

    // Number 5
    let itemText = `${name} - \$${price}`;

    let listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = `Total: \$${total.toFixed(2)}`;
