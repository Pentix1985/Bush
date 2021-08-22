'use strict';

function checkForCorrect() {
    // a. Имя содержит только буквы.
    // let name = formInputs.inputName.value;
    // console.log(/^[a-zа-яё]{2,}$/igu.test(name));

    // +7(000)000-0000.
    // let phone = formInputs.inputPhone.value;
    // console.log(/^\+[\d]{1}[\(]{1}[\d]{3}[\)]{1}[\d]{3}[\-]{1}[\d]{4}$/igu.test(phone));

    // c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
    let email = formInputs.inputEmail.value;
    console.log(/^[a-z]+/igu.test(email));

    // d. Текст произвольный.
    // let textArea = formInputs.textArea.value;
    // console.log(/^[a-zа-яё]{2,}$/igu.test(textArea));
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
    };
});