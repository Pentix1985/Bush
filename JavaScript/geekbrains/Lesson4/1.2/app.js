'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.


// Синтаксис ES5
/**
 * Функция конструктор принимает три параметра
 * @param {string} author -автор 
 * @param {string} text - текст
 * @param {date} date -дата
 */
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * Функция меняет значение this.text в производном объекте
 * @param {string} newText полученный текст
 * @returns {string} возвращает полученый текст в this.text
 */
PostES5.prototype.edit = function(newText) {
    return this.text = newText;
}

let post1 = new PostES5("Alex", "Lorem asdad adsda", new Date);
console.log("Синтаксис ES5")
console.log(post1.author);
console.log(post1.text);
console.log(post1.date);
console.log(post1.edit("New  text"));
console.log(post1.text);


/**
 * Производная функция конструктор от PostES5
 * @param {string} author -автор
 * @param {string} text -текст
 * @param {string} date -дата
 */
function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

/**
 * Функция меняет значение свойства(ключа) highlighted на противоположное
 * @returns {boolean} возвращает булевое значение
 */
AttachedPostES5.prototype.makeTextHighlighted = function() {
    return this.highlighted = !this.highlighted;
}

let post2 = new AttachedPostES5("Eva", "Some text", new Date);
console.log(post2.author);
console.log(post2.text);
console.log(post2.date);
console.log(post2.edit("Ultra New  text"));
console.log(post2.text);
console.log(post2.highlighted);
console.log(post2.makeTextHighlighted());
console.log(post2.highlighted);
console.log(post2.makeTextHighlighted());

// Синтаксис ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        return this.text = newText;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        return this.highlighted = !this.highlighted;
    }
}

let post1ES6 = new PostES5("AlexES6", "ES6 Lorem asdad adsda", new Date);
console.log("");
console.log("Синтаксис ES6")
console.log(post1ES6.author);
console.log(post1ES6.text);
console.log(post1ES6.date);
console.log(post1ES6.edit("New  text"));
console.log(post1ES6.text);

let post2ES6 = new AttachedPostES6("EvaES6", "ES6 Some text", new Date);
console.log("");
console.log("AttachedPostES6");
console.log(post2ES6.author);
console.log(post2ES6.text);
console.log(post2ES6.date);
console.log(post2ES6.edit("Ultra New  text"));
console.log(post2ES6.text);
console.log(post2ES6.highlighted);
console.log(post2ES6.makeTextHighlighted());
console.log(post2ES6.highlighted);
console.log(post2ES6.makeTextHighlighted());
