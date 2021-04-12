'use strict';

let button = document.querySelector('button');
let modalWindowBg = document.querySelector('.blackfog');
let closeButton = modalWindowBg.querySelector('.close');
let modal = document.querySelector('.modal');

button.addEventListener('click', function(evButton) {
    evButton.target.style.display = "none";

    let timeFunc = setTimeout(() => {modal.classList.toggle('flicker-in-1')}, 4000);

    modalWindowBg.classList.toggle("fade-in");
    modalWindowBg.style.display = "flex";
    modalWindowBg.addEventListener('animationend', (evModalWindowBg) => {
        evModalWindowBg.stopPropagation();
        modal.style.display="inline-block";
        modal.classList.toggle('roll-in-left');
        modal.addEventListener('animationend', (evModal) => {
            timeFunc;
            evModal.stopPropagation();
        });
    });
    
    setTimeout(() => {
        modal.classList.toggle('roll-in-left');
        modal.classList.toggle('flicker-in-1');
        modalWindowBg.classList.toggle("fade-in");
    }, 6000);

    evButton.stopPropagation();

});

closeButton.addEventListener('click', function(evCloseButton){
    modal.classList.toggle('flicker-in-1');
    setTimeout(() => {
        modal.style.display = "none", 2000;
    });
    evCloseButton.stopPropagation();
    // modal.addEventListener('animationend', () => {modalWindow.classList.toggle('fade-off')});
    // setTimeout(() => modalWindow.classList.toggle('fade-off'), 3000);
    // setTimeout(() => modalWindow.style.display = "none", 3000);
    // setTimeout(() => button.style.display = "inline-block", 3000);
    // setTimeout(() => modal.classList.toggle('flicker-in-1'), 3000);
});