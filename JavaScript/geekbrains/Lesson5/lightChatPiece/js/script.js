'use strict';

function clearAll() {
    inputAuthor.value = "";
    inputText.value = "";
    titleNoMessage.style.display = "inline-block";
    let messages = messageField.querySelectorAll('p');
    messages.forEach((message) => {
        message.remove();
    });
}

function textFormer(author, text, date) {
    if(inputAuthor.value === "") {
        authorWarn.style.visibility = "visible";
        return;
    }

    if(inputText.value === "") {
        textWarn.style.visibility = "visible";
        return;
    }

    return `<p class="message-text"><span class="message-author">Автор:${author}</span><br><span class="message-time">Время:${date}</span><br>Сообщение: ${text}</p><br>`;
}

function date() {
    let date = new Date;
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}



let resetBtn = document.querySelector('.resetBtn');
let sendBtn = document.querySelector('.sendBtn');
let inputAuthor = document.querySelector('.input-author');
let inputText = document.querySelector('.input-text');
let messageField = document.querySelector('.message');
let textWarn = document.querySelector('.text-warn');
let authorWarn = document.querySelector('.author-warn');
let titleNoMessage = document.querySelector('.title-no-message');

resetBtn.addEventListener('click', clearAll);

sendBtn.addEventListener('click', () => {
    titleNoMessage.style.display = "none";
    
    messageField.insertAdjacentHTML("afterbegin", textFormer(inputAuthor.value, inputText.value, date()));
});

