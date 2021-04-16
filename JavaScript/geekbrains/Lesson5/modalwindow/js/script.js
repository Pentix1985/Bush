'use strict';

let button = document.querySelector('button');
let modalWindowBg = document.querySelector('.blackfog');
let closeButton = modalWindowBg.querySelector('.close');
let modal = document.querySelector('.modal');
// let timeFunc = setTimeout(() => {modal.classList.toggle('flicker-in-1')}, 4000);

button.addEventListener('click', function(evButton) {
    evButton.target.style.display = "none";
    
    modalWindowBg.classList.add("fade-in");
    modalWindowBg.style.display = "flex";

    setTimeout(() =>{
        modal.classList.add('roll-in-left');
        modal.style.display="inline-block";
    }, 2000);

    setTimeout(() => {
        modal.classList.remove('roll-in-left');
        modalWindowBg.classList.remove("fade-in");
    }, 4000);

    evButton.stopPropagation();

});

closeButton.addEventListener('click', (evCloseButton) => {
    modal.classList.toggle('roll-out-left');
    modalWindowBg.classList.toggle('fade-out');

    setTimeout(() => {
        button.style.display = "inline-block";
        modalWindowBg.style.display = "none";
        modal.style.display="none";
        modal.classList.toggle('roll-out-left');
        modalWindowBg.classList.toggle('fade-out');
    }, 1000);

    evCloseButton.stopPropagation();
});