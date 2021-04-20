'use strict';

let likes = document.querySelectorAll('.fa');

likes.forEach((like) => {
    like.addEventListener('click', () =>{
        if(like.classList.contains('fa-heart-o')) {
            like.classList.replace('fa-heart-o', 'fa-heart');
        } else {
            like.classList.replace('fa-heart', 'fa-heart-o');
        }
    });
});




