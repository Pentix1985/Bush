'use strict';

function checkForCorrect() {
    // a. Имя содержит только буквы.
    let r = true;
    if(!(/^[a-zа-яё]{2,}$/igu.test(formInputs.inputName.value))) {
        formInputs.inputName.style.borderColor = 'red';
        formInputs.inputName.nextSibling.nextSibling.innerText = 'Введено некорректное имя!';
        r = false;
    }

    // +7(000)000-0000.
    if(!(/^\+[\d]{1}[\(]{1}[\d]{3}[\)]{1}[\d]{3}[\-]{1}[\d]{4}$/igu.test(formInputs.inputPhone.value))) {
        formInputs.inputPhone.style.borderColor = 'red';
        formInputs.inputPhone.nextSibling.nextSibling.innerText = 'Введен некорректный телефон!';
        r = false;
    }
    
    if(!(/^[a-z]+\.|-|[a-z]+@[a-z]+\.[a-z]{2,5}$/igu.test(formInputs.inputEmail.value))
    ) {
        formInputs.inputEmail.style.borderColor = 'red';
        formInputs.inputEmail.nextSibling.nextSibling.innerText = 'Введен некорректный email!';
        r = false;
    }

    // d. Текст произвольный.
    console.log(/./igu.test(formInputs.textArea.value));
    return r;
}

let formInputs = {
    inputName: document.querySelector('.name'),
    inputPhone: document.querySelector('.phone'),
    inputEmail: document.querySelector('.email'),
    textArea: document.querySelector('.text-field'),
    btn: document.querySelector('.btn'),
}

formInputs.btn.addEventListener('click', (event) => {
    if(checkForCorrect()) {
        console.log('Данные из формы прошли проверку!');
    }
});