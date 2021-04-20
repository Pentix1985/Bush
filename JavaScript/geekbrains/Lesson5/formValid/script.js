'use strict';

let input = document.querySelector('input');
let button = document.querySelector('button');
let h2 = document.querySelector('h2');

button.addEventListener('click', () => {
    if(!/\d/g.test(input.value)) {
        h2.style.display = "inline-block";
    } else {
        h2.style.display = "none";
    }
});

