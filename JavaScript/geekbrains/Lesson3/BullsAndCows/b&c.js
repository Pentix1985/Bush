'use strict';

/**
 * Функция генерирует случайную цифру от min до max включительно
 * @param {number} min минимальная цифра
 * @param {number} max максимальная цифра
 * @returns {number} Полученная случайная цифра
 */
function getRandomDigit(min = 0, max = 9) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

/**
 * Функция генерирует массив из четырех цифр
 * @returns {array} Возвращает массив из четырех случайных цифр
 */
function getRandomNumberArray() {

    let randomNumber = [];

    while (randomNumber.length < 4) {

        let digit = getRandomDigit();
    
        // Числа не могут начинаться на 0, поэтому добавлена проверка
        if (randomNumber.length === 0) {
            digit = getRandomDigit(1, 9);
            randomNumber.push(digit);
        } else if (!randomNumber.includes(digit)) {
            randomNumber.push(digit);
        }
    }

    return randomNumber;
}

/**
 * Ещё одна функция генерирующая массив из четырех цифр
 * @returns {array} Возвращает массив из четырех случайных чисел
 */
function getRandomNumberArray0() {

    while(true) {
        let randomDigits = String(parseInt(Math.random() * 10000)).split('').map(strNum => {
            return Number(strNum);
        });

        let randomNumber = [];

        randomDigits.forEach(num => {
            if(!randomNumber.includes(num)) {
                randomNumber.push(num);
            }
        });

        if(randomNumber.length === 4) {
            return randomNumber;
        }
    }
}

    

/**
 * Функция проверяет совпадения чисел и расположение совпадающих цифр и выводит результаты (Функция ничего не возвращает)
 * @param {number} number сгенерированное случайное число
 * @param {number} answer ответ пользователя превиденный к массиву из чисел
 */
function answer(number, answer) {
    answer.forEach((num, idx) => {
        if (number.includes(num) && idx === number.indexOf(num)) {
            bulls++;
        } else if (number.includes(num)) {
            cows++;
        }
    });

    alert(`Ответ пользователя был ${userAnswer.join('')}. Быков: ${bulls} Коров: ${cows}`);
}

let cows = 0;
let bulls = 0;

const randomNumber = getRandomNumberArray0();

// Без проверки на дурака
let userAnswer = prompt(`Введите четыре числа`).split('').map(strNum => {
    return Number(strNum);
});

answer(randomNumber, userAnswer);

