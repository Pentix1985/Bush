'use strict';

let button = document.querySelector('button');
let modalWindow = document.querySelector('.blackfog');
let closeButton = modalWindow.querySelector('.close');
let modal = document.querySelector('.modal');

button.addEventListener('click', function(ev) {
    let buttonActiv = ev.target;
    buttonActiv.style.display = "none";

    modalWindow.classList.toggle("fade-in");
    modalWindow.style.display = "flex";
    modalWindow.addEventListener('animationend', () => {
        modal.style.display="inline-block";
        modal.classList.toggle('roll-in-left');
        modal.addEventListener('animationend', setTimeout(() => {
            modal.classList.toggle('flicker-in-1');
        }, 7000));
        // modal.addEventListener('animationend', () => modal.classList.toggle('flicker-in-1'));
        // modal.addEventListener('animationend', setTimeout(() => {
        //     modal.classList.toggle('flicker-in-1'), 2000;
        // }));
    }); 
});

closeButton.addEventListener('click', function(event){
    modal.classList.toggle('flicker-in-1');
    setTimeout(() => {
        modal.style.display = "none", 2000;
    });
    // modal.addEventListener('animationend', () => {modalWindow.classList.toggle('fade-off')});
    // setTimeout(() => modalWindow.classList.toggle('fade-off'), 3000);
    // setTimeout(() => modalWindow.style.display = "none", 3000);
    // setTimeout(() => button.style.display = "inline-block", 3000);
    // setTimeout(() => modal.classList.toggle('flicker-in-1'), 3000);
});